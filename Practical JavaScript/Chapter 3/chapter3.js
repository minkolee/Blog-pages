jscript = function () {
};
jscript.ui = function () {
};
jscript.ui.alerts = new function () {
};
jscript.ui.alerts.showErrorAlert = function () {
    alert("An error occurred");
};


//在包中创建一个类,包的属性是这个类的实例
jscript.ui.alerts.MessageDisplayer = function (inMsg) {
    this.msg = inMsg;
    this.toString = function () {
        return "msg" + this.msg;
    }
};
var v = new jscript.ui.alerts.MessageDisplayer("Minko");
// alert(v);

//jscript.array
