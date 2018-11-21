// 第一题

function min(x, y) {
    return (x >= y ? y : x)
}


// 第二题

function isEven(positiveInt) {
    let innerInt = positiveInt<0? -positiveInt:positiveInt;
    if (innerInt ===1){
        return false
    }else if (innerInt === 0){
        return true
    }else{
        return isEven(innerInt-2)
    }
}


// 第三题

function countBs(stringObj) {
    let len = stringObj.length;
    if (len === 0) {
        return 0
    } else {
        let sum = 0;
        for (let i = 0; i < len; i++) {
            if (stringObj[i] === "B") {
                sum++;
            }
        }
        return sum
    }
}

function countChar(stringObj,charObj) {
    let len = stringObj.length;
    if (len === 0) {
        return 0
    } else {
        let sum = 0;
        for (let char of stringObj) {
            if (char === charObj) {
                sum++;
            }
        }
        return sum
    }
}

