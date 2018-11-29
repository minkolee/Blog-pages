///////////////////////////////////////
// Lecture: Hoisting
// calculateAge(1990);


// function calculateAge(year) {
//     console.log(2016 - year);
// }
//
// retirement(1990);


// 函数表达式无法提升，只有函数声明才能提升
// var retirement = function(year){
//     console.log(65-(2016-calculateAge(year)));
// };

// console.log(age);
// var age = 23;//如果不注释这行，显示undefined，如果注释掉，则会报错。因为没有了提升。

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }
//
// foo();
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
//
// var john = {
//     name:"John",
//     yearofBirth:1990,
//     calculateAge:function () {
//         console.log(this);
//         function inner() {
//             console.log("i m inner");
//             console.log(this);
//         }
//         inner();//并不是绑定的函数，默认的this对象依然是window
//     }
// };
//
// john.calculateAge();

// var mike = {
//     name:"Mike",
//     yearofBirth:1990,
// };
//
// function showName() {
//     if(this.name){
//         console.log(this.name);
//     } else {
//         console.log("找不到name")
//     }
// }
//
// showName();
//
// mike.showName = showName;
//
// mike.showName();
//绑定的方法this显然就是当前对象了。

