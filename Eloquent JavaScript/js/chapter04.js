// ES6的简易遍历方式

// for (let entry of JOURNAL) {
//     console.log(`${entry.events.length} events.`);
// }

// 直接使用数组内元素
// function phi([n00, n01, n10, n11]) {
//     return (n11 * n00 - n10 * n01) /
//         Math.sqrt((n10 + n11) * (n00 + n01) *
//             (n01 + n11) * (n00 + n10));
// }

//第一题
//
//
function range(x, y, step = 1) {
    let ar = [];

    if (step < 0) {
        for (let i = x; i > y - 1; i = i + step) {
            ar.push(i)
        }
    } else if (step > 0) {
        for (let i = x; i < y + 1; i = i + step) {
            ar.push(i)
        }
    }
    return ar;
}

function sum(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}

// 第二题
// 以数组中心交换数组的两个元素
function reverseArray(arrayObj) {
    let array = [];
    for (let element of arrayObj) {
        array.unshift(element);
    }
    return array
}

function reverseArrayInPlace(arrayObj) {
    let len = arrayObj.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = arrayObj[i];
        arrayObj[i] = arrayObj[len - 1 - i];
        arrayObj[len - 1 - i] = temp;
    }
}

//应该说还是不带副作用的函数应用最广
//但运行速度快的是后者，其所需时间大概是第一个时间复杂度为O(n)的一半

//第三题，实现列表
//其实就是JS实现的一个链表
function arrayToList(arrayObj) {
    let len = arrayObj.length;
    let startNode = null;
    let currentNode = null;
    let previousNode = null;

    for (let i = 0; i < len; i++) {
        if (!startNode) {
            startNode = {value: arrayObj[i], rest: null};
            previousNode = startNode;
        } else {
            currentNode = {value: arrayObj[i], rest: null};
            previousNode.rest = currentNode;
            previousNode = currentNode;
        }
    }
    return startNode
}

function listToArray(listObj) {
    let current = listObj;
    let array = [];
    while (current.rest) {
        array.push(current.value);
        current = current.rest
    }
    array.push(current.value);
    return array
}

function prepend(element, listObj) {
    return {value: element, rest: listObj}

}

function nth(listObj, positiveInt) {
    let start = listObj;
    if (positiveInt === 0) {
        return listObj.value;
    } else {
        while (positiveInt > 0) {
            if (!start.rest) {
                return undefined;
            } else {
                start = start.rest
            }
            positiveInt--;
        }
        return start.value
    }
}

//递归版本的nth函数


function nthRecursion(list, n) {
    if (!list) return undefined;
    else if (n === 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}


// 第四题,核心在于Object.keys 函数。 你给它一个对象，它返回一个字符串数组 - 对象的属性名称。
// 如果遇到两个对象比较，就继续调用该函数
function deepEqual(obj1,obj2) {
    if(!obj1 || !obj2){
        return false
    }

    if (typeof obj1 !==typeof obj2){
        return false
    }

    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj1);
    if(obj1Keys.length!==obj2Keys.length){
        return false
    }

    for(let eachAttr of obj1Keys){
        if(typeof obj1[eachAttr]==="object" || typeof obj2[eachAttr]==="object"){
            if(!(deepEqual(obj1[eachAttr],obj2[eachAttr]))){
                return false
            }
        }else {
            if(obj1[eachAttr]!==obj2[eachAttr]){
                return false
            }
        }
    }

    return true
}
