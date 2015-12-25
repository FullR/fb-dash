var _ = require("lodash");

// Detects whether fn is being called with a `this` value. If `this` is defined `this` is passed as the first argument to `fn`. Otherwise, `fn` is invoked normally.
function wrapLodashFn(fn) {
  return function() {
    "use strict";
    var args;
    var i;
    var length;
    if(typeof this === "undefined") {
      return fn.apply(null, arguments);
    } else {
      length = arguments.length;
      args = [this];
      for(i = 0; i < length; i++) {
        args.push(arguments[i]);
      }
      return fn.apply(null, args);
    }
  };
}

var wrappedLodash = _.pairs(_)
  .filter(function(v) {
    return typeof v[1] === "function";
  })
  .reduce(function(fns, pair) {
    fns[pair[0]] = wrapLodashFn(pair[1]);
    return fns;
  }, {});

wrappedLodash.nodashWrap = wrapLodashFn;
wrappedLodash.lodash = _;

module.exports = wrappedLodash;

