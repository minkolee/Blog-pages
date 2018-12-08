if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.lang = function () {

};

jscript.lang.copyProperties = function (inSrcObj, inDestObj, inOverride) {
    //本来IDE提示这个函数有可能会将所有属性一同遍历,可以考虑增加一个hasOwnProperty检查
    //经过实际发现,例如数组,不会把继承的属性传递过去.
    var prop;
    for (prop in inSrcObj) {
        if(!inSrcObj.hasOwnProperty(prop)) continue;//如果prop不是自己的,就继续循环

        if (inOverride || !inDestObj[prop]) {
            inDestObj[prop] = inSrcObj[prop];
        }
    }
    return inDestObj;
};

