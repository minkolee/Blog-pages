// 第一题

// function flatArray(arrayObj) {
//     return arrayObj.reduce((a,b)=>{return a.concat(b)})
//
// }
//
// let arrays = [[1, 2, 3], [4, 5], [6]];
//
// console.log(flatArray(arrays));


// 第二题

// function loop(value,filter,update,main) {
//     let inner = value;
//     while(filter(inner)){
//         main(inner);
//         inner = update(inner);
//     }
// }
//
// loop(3, n => n > 0, n => n - 1, console.log);

// 第三题
// 循环方法的every函数
// function every(array,test) {
//     let len = array.length;
//     let flag = true;
//     for(let i =0;i<len;i++){
//         if(!test(array[i])){
//             flag=false;
//             break;
//         }
//     }
//     return flag
// }

//some方法的every函数
//由于some是满足一个条件就退出,所以要将测试条件取反,再将some的结果取反
// function every(array,test){
//
//     function innerTest(x) {
//         return !test(x)
//     }
//
//     return !array.some(innerTest)
// }
//
// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));