function cube(x) {
  return x * x;
}

const foo = Math.PI + Math.SQRT2;
let graph = {
  options: {
    color: 'white',
    thickness: '2px'
  },
  draw: function () {
    console.log('from graph draw function: ' + graph.options.color)
  }
};

export {cube, foo, graph};