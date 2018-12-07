if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.debug = function () {

};

jscript.debug.enumProps = function (inObj) {
    var props = "";
    var i;
    for (i in inObj) {
        props += i + " = " + inObj[i] + "\n";
    }
    console.log(props);
};

//这个封装并不好,应该采用立即执行函数来封装,从外部依然可以直接访问loglevel属性
//原来logger就是这么实现的,只要判断级别即可
jscript.debug.DivLogger = function () {
    //定义日志级别和日志颜色
    this.LEVEL_TRACE = 1;
    this.LEVEL_DEBUG = 2;
    this.LEVEL_INFO = 3;
    this.LEVEL_WARN = 4;
    this.LEVEL_ERROR = 5;
    this.LEVEL_FATAL = 6;
    this.LEVEL_TRACE_COLOR = "a0a000";
    this.LEVEL_DEBUG_COLOR = "64c864";
    this.LEVEL_INFO_COLOR = "000000";
    this.LEVEL_WARN_COLOR = "0000ff";
    this.LEVEL_ERROR_COLOR = "ff8c00";
    this.LEVEL_FATAL_COLOR = "ff0000";

    //打印日志的最低级别
    this.logLevel = 3;

    //输出结果的DIV
    this.targetDiv = null;

    //设置最低级别

    this.setLevel = function (inLevel) {
        this.logLevel = inLevel;
    };

    //设置目标DIV,实际上可以是任何标签
    this.setTargetDiv = function (inTargetDiv) {
        this.targetDiv = inTargetDiv;
        this.targetDiv.innerHTML = "";

    };

    //检测是否应该输出日志
    this.shouleBeLogged = function (inLevel) {
        return inLevel >= this.logLevel;
    };

    //trace级别的日志消息,只有在当前设置可以显示trace及以上的消息的时候,而且存在targetDiv,就会输出消息,否则不输出消息
    this.trace = function (inMessage) {
        if (this.shouleBeLogged(this.LEVEL_TRACE) && this.targetDiv) {
            this.targetDiv.innerHTML += "<div style ='color:#" + this.LEVEL_TRACE_COLOR + ";'>" + "[TRACE] " + inMessage + "</div>";
        }
    };
    //debug级别
    this.debug = function (inMessage) {
        if (this.shouleBeLogged(this.LEVEL_DEBUG) && this.targetDiv) {
            this.targetDiv.innerHTML += "<div style ='color:#" + this.LEVEL_DEBUG_COLOR + ";'>" + "[DEBUG] " + inMessage + "</div>";
        }
    };
    //info级别
    this.info = function (inMessage) {
        if (this.shouleBeLogged(this.LEVEL_INFO) && this.targetDiv) {
            this.targetDiv.innerHTML += "<div style ='color:#" + this.LEVEL_INFO_COLOR + ";'>" + "[INFO] " + inMessage + "</div>";
        }
    };
    //warn级别
    this.warn = function (inMessage) {
        if (this.shouleBeLogged(this.LEVEL_WARN) && this.targetDiv) {
            this.targetDiv.innerHTML += "<div style ='color:#" + this.LEVEL_WARN_COLOR + ";'>" + "[WARN] " + inMessage + "</div>";
        }
    };
    //error级别
    this.error = function (inMessage) {
        if (this.shouleBeLogged(this.LEVEL_ERROR) && this.targetDiv) {
            this.targetDiv.innerHTML += "<div style ='color:#" + this.LEVEL_ERROR_COLOR + ";'>" + "[ERROR] " + inMessage + "</div>";
        }
    };
    //fatal级别
    this.fatal = function (inMessage) {
        if (this.shouleBeLogged(this.LEVEL_FATAL) && this.targetDiv) {
            this.targetDiv.innerHTML += "<div style ='color:#" + this.LEVEL_FATAL_COLOR + ";'>" + "[FATAL] " + inMessage + "</div>";
        }
    };



};

























