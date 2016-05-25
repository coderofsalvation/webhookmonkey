var t = {};

t.errors = 0;

t.error = function(msg) {
  t.errors++;
  console.error("ERROR: " + msg);
  if (process.env.HALT != null) {
    return process.exit(1);
  }
};

t.tests = [];

t.test = function(description, cb) {
  return t.tests.push({
    description: description,
    cb: cb
  });
};

t.run = function() {
  var i, next;
  i = 0;
  output = function (msg,i){
    console.log('\x1b[33m',"\n++ " + msg, '\x1b[0m' );
  }
  next = function() {
    if (t.tests[++i] != null) {
      output(t.tests[i].description,i+1)
      return t.tests[i].cb(next);
    }
  };
  output(t.tests[i].description,i+1)
  return t.tests[i].cb(next);
};

module.exports = t
