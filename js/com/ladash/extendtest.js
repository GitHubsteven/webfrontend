var ladash = require("ladash");

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log(ladash.extend({ 'a': 0 }, new Foo, new Bar));