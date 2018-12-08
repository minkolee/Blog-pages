if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.page = function () {

};

jscript.page.printPage = function () {
    if (parseInt(navigator.appVersion) >= 4) {
        window.print()
    }
};

jscript.page.getParameter = function (inParamName) {
    var retVal = null;
    var varvals = unescape(location.search.substring(1));
    // location.search是?开头的参数字符串,取索引1开始的表示取参数部分
    // 之后用&分割,再用=分割就可以得到数组了
    if (varvals) {
        var search_array = varvals.split("&");
        var temp_array = [];
        var j = 0;
        var i = 0;
        for (i = 0; i < search_array.length; i++) {
            temp_array = search_array[i].split("=");
            var pName = temp_array[0];
            var pVal = temp_array[1];

            // 这里原书判断有问题,未传入的参数应该是undefined,不如直接就用简单一些的判断
            if (!inParamName) {
                if (retVal === null) {
                    retVal = [];
                }
                retVal[j] = pName;
                retVal[j + 1] = pVal;
                console.log(retVal);

                j = j + 2;
            } else {
                if (pName === inParamName) {
                    retVal = pVal;
                    break;
                }
            }
        }
    }
    return retVal;
};

jscript.page.breakOutOfFrames = function () {
    if (self != top) {
        top.location = self.location;
    }
}