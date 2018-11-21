// 第一题
// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######



// 第二题
// let myString = "#";
//
// for(let i=0;i<7;i++){
//     console.log(myString);
//     myString = myString + "#";
// }

//
// let tbody = document.getElementById("tbody");
//
// for (let i = 1; i <= 100; i++) {
//     let newTR = document.createElement("tr");
//     let newTD1 = document.createElement("td");
//     newTD1.innerText = i;
//     let newTD2 = document.createElement("td");
//     if (i % 3 === 0 && i % 5 === 0) {
//         newTD2.innerText = "FizzBuzz"
//     } else if (i % 3 === 0) {
//         newTD2.innerText = "Fizz"
//     } else if (i % 5 === 0) {
//         newTD2.innerText = "Buzz"
//     } else {
//         newTD2.innerText = i;
//     }
//     newTR.appendChild(newTD1);
//     newTR.appendChild(newTD2);
//     tbody.appendChild(newTR);
// }

// 第三题
let size = parseInt(window.prompt('Enter a number'));
drawGird(size);

function drawGird(size) {
    if (size === 1) {
        console.log("*");
        return null;
    } else {
        for (let i = 0; i < size; i++) {
            let start = "";
            if (i % 2 === 0) {
                start = "*"
            } else {
                start = "#"
            }
            drawLine(start, size, i)
        }
    }
}

function drawLine(start, size) {
    let string = start;
    for (let j = 0; j < size - 1; j++) {
        if (string[string.length - 1] === "*") {
            string = string + "#"
        } else {
            string = string + "*"
        }
    }
    console.log(string + "\n")
}
// 画棋盘算法，每一层的奇偶性不同，所以可以用行号加每一行的索引来标记该行的黑白号，学到了。