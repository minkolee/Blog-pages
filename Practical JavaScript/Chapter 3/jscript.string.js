if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.string = function () {

};


//这个方法不错,分割之后检查分割的结果的长度,减去1就是该子串出现的次数.
jscript.string.substrCount = function (inStr, inSearchStr) {
    if (inStr && inSearchStr) {
        var splitChars = inStr.split(inSearchStr);
        return splitChars.length - 1
    } else {
        return null;
    }
};

//从字符串中删除指定的字母,算法就是遍历然后检查,由于字符串是不可变量,所以返回一个新字符串即可
jscript.string.stripChars = function (inStr, inStripOrAllow, inCharList) {
    if(!inStr||!inStripOrAllow||!inCharList){
        return null;
    }

    inStripOrAllow = inStripOrAllow.toLowerCase();
    var outStr = "";
    var i, j, nextChar, keepChar;
    for (i = 0; i < inStr.length; i++) {
        //注意,substr不是ECMA的标准方法,应当考虑使用其他方法替代
        nextChar = inStr[i];
        keepChar = inStripOrAllow !== "allow";
        for (j = 0; j < inCharList.length; j++) {
            checkChar = inCharList[j];
            if (inStripOrAllow === "allow" && nextChar === checkChar) {
                keepChar = true;
            }
            if (inStripOrAllow === "strip" && nextChar === checkChar) {
                keepChar = false;
            }
        }
        if (keepChar === true) {
            outStr = outStr + nextChar;
        }
    }
    return outStr;
};

jscript.string.strContentValid = function (inString, inCharlist, inFromExcept) {
    if (!inString || !inCharlist || !inFromExcept) {
        return false;
    }

    inFromExcept = inFromExcept.toLowerCase();
    var i;
    if (inFromExcept === "from_list") {
        for (i = 0; i < inString.length; i++) {
            if (inCharlist.indexOf(inString.charAt(i)) === -1) {
                return false;
            }
        }
        return true;
    }

    if (inFromExcept === "not_from_list") {
        for (i = 0; i < inString.length; i++) {
            if (inCharlist.indexOf(inString.charAt(i)) !== -1) {
                return false;
            }
        }
        return true;
    }
};

//原书的replace 和 trim 在ES5中都已经实现,但要注意实现的方法.replace 使用了反复indexOf,trim则遍历到第一个非空字符,然后开始截取.按照类似的思路可以编写righttrim,然后合起来就是fulltrim