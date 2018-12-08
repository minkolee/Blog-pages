if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.storage = function () {

};

jscript.storage.setCookie = function (inName, inValue, inExpiry) {
    //typeof 时间对象返回的是object,这里采用instanceof
    if (inExpiry instanceof Date) {
        //toGMTString已经废弃,改用toUTCString
        inExpiry = inExpiry.toUTCString();
    }
    //escape已经从Web标准中删除,改用decodeURI()或者decodeURIComponent代替
    document.cookie = inName + "=" + decodeURI(inValue) + ";expires =" + inExpiry;
};

jscript.storage.getCookie = function (inName) {
    var docCookies = document.cookie;
    var cIndex = docCookies.indexOf(inName + "=");
    if (cIndex === -1) {
        return null;
    }
    cIndex = docCookies.indexOf("=", cIndex) + 1;
    var endStr = docCookies.indexOf(";", cIndex);
    if (endStr === -1) {
        endStr = docCookies.length;
    }
    return unescape(docCookies.substring(cIndex, endStr));
};

//原书这里有问题,Date对象没有字面量,必须使用new才能得到一个新的Date对象
jscript.storage.deleteCookie = function (inName) {
    if (this.getCookie(inName)) {
        this.setCookie(inName, null, new Date(0));
    }
};