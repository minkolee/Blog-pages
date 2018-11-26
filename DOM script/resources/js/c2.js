let outerList = document.getElementById("list");
let innerList = document.getElementById("innerlist");

let liList= outerList.getElementsByTagName("li");
let innnerLiList = innerList.getElementsByTagName("li");

//满足条件的结果有两个
let ul = document.getElementsByClassName('ul');
// console.log(ul);

//同时查询两个类,满足条件的结果只有一个
let ul2 = document.getElementsByClassName('nav ul');
// console.log(ul2);

outerList.setAttribute('title','goose');


console.log(outerList.getAttribute('title'));
// console.log(outerList.getAttribute('data-aria'));


