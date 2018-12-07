if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.browser = function () {

};

jscript.browser.getBrowserIdentity = function () {
    return navigator.appName + " " + navigator.appVersion;
}