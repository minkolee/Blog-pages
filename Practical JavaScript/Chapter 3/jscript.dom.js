if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.dom = function () {

};

//算出视口宽度与元素宽度的一半,外加上屏幕水平滚动的距离,设置给目标元素的左边距
//这里仅仅设置了left属性,和定位有关系 ,如果没定位,则无法使用
jscript.dom.layerCenterH = function (inObj) {
    var lca;
    var lcb;
    var lcx;
    var iebody;
    var dsocleft;
    if (window.innerWidth) {
        lca = window.innerWidth;
    } else {
        lca = document.body.clientWidth;
    }
    lcb = inObj.offsetWidth;
    lcx = (Math.round(lca / 2)) - (Math.round(lcb / 2));
    iebody = (document.compatMode && document.compatMode !== "BackCompat") ? document.documentElement : document.body;
    dsocleft = document.all ? iebody.scrollLeft : window.pageXOffset;
    inObj.style.left = lcx + dsocleft + "px";
};

jscript.dom.layerCenterV = function (inObj) {
    var lca;
    var lcb;
    var lcx;
    var iebody;
    var dsoctop;
    if (window.innerHeight) {
        lca = window.innerHeight;
    } else {
        lca = document.body.clientHeight;
    }
    lcb = inObj.offsetHeight;
    lcx = (Math.round(lca / 2)) - (Math.round(lcb / 2));
    iebody = (document.compatMode && document.compatMode !== "BackCompat") ? document.documentElement : document.body;
    dsoctop = document.all ? iebody.scrollTop : window.pageYOffset;
    inObj.style.top = lcx + dsoctop + "px";
};

jscript.dom.execScripts = function (inText) {
    //si为初始索引0
    var si = 0;
    while (true) {
        // 找到script标签的开口部分,如果-1就返回
        var ss = inText.indexOf("<" + "script" + ">", si);
        if (ss === -1) {
            return;
        }
        //从新的ss处往下找,找下一个闭合的script标签
        var se = inText.indexOf("<" + "/" + "script" + ">", ss);
        if (se === -1) {
            return
        }
        // 找到之后将索引前进9,准备下一次搜索
        si = se + 9;

        //取两个标签之间的内容
        var sc = inText.substring(ss + 8, se);

        //执行其中的内容
        eval(sc);
    }
};

//使用arguments对象来传入任意个id,获取这些id对应的元素组成的数组
jscript.dom.getDOMElements = function () {
    if (!arguments.length) {
        return null;
    }

    if (arguments.length === 1) {
        return document.getElementById(arguments[0]);
    }

    var i;
    var result = [];
    for (i = 0; i < arguments.length; i++) {
        result.push(document.getElementById(arguments[i]));
    }
    return result;
};










