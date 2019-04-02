// compose(funcA, funcB, funcC) 形象为 compose(funcA(funcB(funcC())))）

function compose_template() {

}

function compose() {
  let args = Array.prototype.slice.call(arguments);

  if(args.length === 0) {
    return arg => arg;
  }

  if(args.length === 1) {
    return args[0]
  }

  // return args.reduce((a, b) => (...args) => a(b(...args)))
  return args.reduce(function(a, b) {
    return function(...args) {
      return a(b(...args));
    };
  })
}

module.exports = compose;


