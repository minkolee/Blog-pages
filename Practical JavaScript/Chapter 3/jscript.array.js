if (typeof jscript === "undefined") {
    jscript = function () {

    };
}

jscript.array = function () {

};
//将源数组内所有数据追加复制到目标数组中
jscript.array.copyArray = function (inSrcArray, inDestArray) {
    var i;
    for (i = 0; i < inSrcArray.length; i++) {
        inDestArray.push(inSrcArray[i]);
    }
    return inDestArray;
}

//在目标数组中查找第一个给定值的索引,找不到就返回-1
jscript.array.findInArray = function (inArray, inValue) {
    var i;
    for(i=0;i<inArray.length;i++){
        if(inArray[i]===inValue);
        return i;
    }
    return -1;
}

//计算数组元素的平均数
jscript.array.arrayAverage = function (inArray) {
    var i;
    var accumulator = 0
    for(i=0;i<inArray.length;i++){
        accumulator += inArray[i];
    }
    return accumulator / inArray.length
};
