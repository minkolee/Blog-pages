// 正则表达式是一种对象类型。我们可以使用两种方法来构造正则表达式：一是使用 RegExp 构
// 造器构造一个正则表达式对象；二是使用斜杠（ / ）字符将模式包围起来，生成一个字面值。

let re1 = new RegExp("abc");
let re2 = /abc/;

// 这两个正则表达式对象都表示相同的模式：字符 a 后紧跟一个 b ，接着紧跟一个 c 。
// 使用 RegExp 构造器时，需要将模式书写成普通的字符串，因此反斜杠的使用规则与往常相同。

// 第二种写法将模式写在斜杠之间，处理反斜杠的方式与第一种方法略有差别。首先，由于斜
// 杠会结束整个模式，因此模式中包含斜杠时，需在斜杠前加上反斜杠。此外，如果反斜杠不
// 是特殊字符代码（比如 \n ）的一部分，则会保留反斜杠，不像字符串中会将其忽略，也不会
// 改变模式的含义。一些字符，比如问号、加号在正则表达式中有特殊含义，如果你想要表示
// 其字符本身，需要在字符前加上反斜杠。
//
// test 方法是匹配正则表达式最简单的方法。该方法只负责判断字符串是否与某个模式匹配。
// 正则表达式还有一个 exec （执行，execute）方法，如果无法匹配模式则返回 null ，否则返
// 回一个表示匹配字符串信息的对象。
//
// let match = /\d+/.exec("one two 100");
// console.log(match);
// console.log(typeof match);
// console.log(match.index);
//
// let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she said 'hello'"));
// replace 是将全字符串加上分组匹配的部分,按照顺序传给回调函数.

// \d 任意数字符号
// \w 字母和数字符号（单词符号）
// \s 任意空白符号（空格，制表符，换行符等类似符号）
// \D 非数字符号
// \W 非字母和数字符号
// \S 非空白符号
// . 除了换行符以外的任意符号

// /abc/ ：字符序列
// 139
// /[abc]/ ：字符集中的任何字符
// /[^abc]/ ：不在字符集中的任何字符
// /[0-9]/ ：字符范围内的任何字符
// /x+/ ：出现一次或多次
// /x+?/ ：出现一次或多次，非贪婪模式
// /x*/ ：出现零次或多次
// /x??/ ：出现零次或多次，非贪婪模式
// /x{2，4}/ ：出现两次到四次
// /(abc)/ ：元组
// /a|b|c/ ：匹配任意一个模式
// /\d/ ：数字字符
// /\w/ ：字母和数字字符（单词字符）
// /\s/ ：任意空白字符
// /./ ：任意字符（除换行符外）
// /\b/ ：单词边界
// /^/ ：输入起始位置
// /$/ ：输入结束位置


//习题一
// function verify(regexp,array1,array2){
//     for(let eachstring of array1){
//         console.log(regexp.test(eachstring))
//     }
//     for(let eachstring of array2){
//         console.log(regexp.test(eachstring))
//     }
// }

// 1. car 和 cat
// let regexp = /ca[rt]/;
//
// verify(regexp,
//     ["my car", "bad cats"],
//     ["camper", "high art"]);

// 2. pop 和 prop
// let regexp = /pr?op/;
//
// verify(regexp,
//     ["pop culture", "mad props"],
//     ["plop", "prrrop"]);

// 3. ferret 、 ferry 和 ferrari

// verify(/ferr(et|y|ari)/,
//     ["ferret", "ferry", "ferrari"],
//     ["ferrum", "transfer A"]);

// 4. 以 ious 结尾的单词

// verify(/ious\b/,
//     ["how delicious", "spacious room"],
//     ["ruinous", "consciousness"]);

// 5. 句号、冒号、分号之前的空白字符
// verify(/\s[.,;:]/,
//     ["bad punctuation ."],
//     ["escape the period"]);


// 6. 多于六个字母的单词
// verify(/[\w]{7}\b/,
//     ["hottentottententen"],
//     ["no", "hotten totten tenten"]);

// 7. 不包含 e （或者 E ）的单词

// verify(/\b[^\WeE]+\b/,
//     ["red platypus", "wobbling nest"],
//     ["earth bed", "learning ape", "BEET"]);

// 习题二
// 前后的区别就是,单引号要么是字符开头,要么之前是非字母和数字,结束的单引号之后是非字母和数字结束,这两种模式都替换掉
// let text = "'I'm the cook,' he said, 'it's my job.'";
//
// let regexp = /(^|\W)'|'(\W|$)/g;.
// console.log(text.replace(regexp,'$1"$2' ));


// 习题三
// 数字部分
// let number = /^[+-]?\d+$|^[+-]?\d+\.\d+$|^[+-]?\d\.+$|^[+-]?\.\d+$|(^[+-]?\d+|^[+-]?\d\.+|^[+-]?\d+\.\d+)[eE][+-]?\d+$/;
// //              整数             前后数字      前小数点     后小数点       只存在整数 前后数字,后小数点的状态,三选一然后接大小E,正负号,和以整数结尾
// for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
//     "1.3e2", "1E-4", "1e+12"]) {
//     if (!number.test(str)) {
//         console.log(`Failed to match '${str}'`);
//     }
// } for (
//     let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
//     if (number.test(str)) {
//         console.log(`Incorrectly accepted '${str}'`);
//     }
// }

















