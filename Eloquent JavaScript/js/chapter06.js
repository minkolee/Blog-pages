// 由于每个函数都有自己的 this 绑定，它的值依赖于它的调用方式，所以在用 function 关键
// 字定义的常规函数中，不能引用外层作用域的 this 。

// 箭头函数是不同的 - 它们不绑定他们自己的 this ，但可以看到他们周围（定义位置）作用域
// 的 this 绑定。 因此，你可以像下面的代码那样，在局部函数中引用 this ：

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});