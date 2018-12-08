if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.math = function () {

};

jscript.math.genRandomNumber = function (inMin, inMax) {
    if(inMin>=inMax) return 0;
    return inMin + Math.random() * (inMax - inMin);
};