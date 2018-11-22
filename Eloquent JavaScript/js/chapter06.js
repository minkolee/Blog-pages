// 由于每个函数都有自己的 this 绑定，它的值依赖于它的调用方式，所以在用 function 关键
// 字定义的常规函数中，不能引用外层作用域的 this 。

// 箭头函数是不同的 - 它们不绑定他们自己的 this ，但可以看到他们周围（定义位置）作用域
// 的 this 绑定。 因此，你可以像下面的代码那样，在局部函数中引用 this ：

// function normalize() {
//     console.log(this.coords.map(n => n / this.length));
// }
// normalize.call({coords: [0, 2, 3], length: 5});


// 么空对象的原型是什么呢？是 Object.prototype ，它是所有对象中原型的父原型。

// Object.getPrototypeOf 返回一个对象的原型。

// 使用 Object.create 来创建一个具有特定原型的对象。
// let killerRabbit = Object.create(protoRabbit);
// 创建killerRabbit,其原型是protoRabbit


// 构造器函数,这是需要指定原型和具体的属性的简单构造器:
// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }

// JavaScript 提供了一种方法，来使得更容易定义这种类型的功能。 如果将关键字 new 放在函
// 数调用之前，则该函数将被视为构造器。 这意味着具有正确原型的对象会自动创建，绑定到
// 函数中的 this ，并在函数结束时返回。


// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");

// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }

// let gentleRabbit = makeRabbit('Gooo...');
// gentleRabbit.speak('hahah');

// function Rabbit(type) {
//     this.type = type;
//     this.prototype = protoRabbit;
// }
//
// Rabbit.prototype.speak = function (line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// };
//
//
// let newRabbit = new Rabbit('new');
//
// newRabbit.speak('gggg');
//
// console.log(Object.getPrototypeOf(newRabbit));


// 使用简单对象作为映射是危险的。 有几种可能的方法来避免这个问题。 首先，可以使
// 用 null 原型创建对象。 如果将 null 传递给 Object.create ，那么所得到的对象将不会
// 从 Object.prototype 派生，并且可以安全地用作映射。

// 符号是使用 Symbol 函数创建的值。类似于hash之后的唯一值,可以用来当做键索引,并且使用toString可以得到原来的字符串值
// 通过在属性名称周围使用方括号，可以在对象表达式和类中包含符号属性。 这会导致属性名
// 称的求值，就像方括号属性访问表示法一样，这允许我们引用一个持有该符号的绑定。
// let stringObject = {
//     [toStringSymbol]() { return "a jute rope"; }
// };
// console.log(stringObject[toStringSymbol]());
// // → a jute rope

// 在类声明内部，名称前面写有 static 的方法，存储在构造器中,就像是静态方法,属于工具


//习题一 向量类型

// class Vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     plus(vecObj){
//         return new Vec(this.x+vecObj.x, this.y+vecObj.y)
//     }
//
//     minus(vecObj){
//         return new Vec(this.x-vecObj.x, this.y-vecObj.y)
//     }
//
//     get length(){
//         return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
//     }
//
// }
//
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

// 习题二
// 其实就是一个ADT
class Group {
    constructor() {
        this.data = []
        this.length = this.data.length;
    }

    add(element) {
        for (let i = 0; i < this.length; i++) {
            if (element === this.data[i]) {
                return;
            }
        }
        this.data.push(element);
        this.length++;
    }

    delete(element) {
        for (let i = 0; i < this.length; i++) {
            if (element === this.data[i]) {
                this.data.splice(i, 1);
                this.length--;
            }
        }
    }

    has(element) {
        let flag = false;
        for (let i = 0; i < this.length; i++) {
            if (element === this.data[i]) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    static from(iterable) {
        let newGroup = new Group();
        let len = iterable.length;
        for (let i = 0; i < len; i++) {
            newGroup.add(iterable[i])
        }
        return newGroup
    }
}

//习题二,迭代器,放到原型上边作为一个绑定方法,自动传入当前对象,返回表示是否已经done和对应值的对象

class GroupIterator {
    constructor(group) {
        this.current = 0;
        this.group = group
    }

    next() {
        if (this.current == this.group.length) {
            // this.current = 0;
            return {done: true}
        }

        let value = this.group.data[this.current];
        this.current++;
        return {value, done: false};
    }
}
// 实际编程的时候将直接就写了该段,无需分离
Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this)
}


// 习题三
// 同名属性调用方法,调用原型的方法即可.

let map = {one: true, two: true, hasOwnProperty: true};