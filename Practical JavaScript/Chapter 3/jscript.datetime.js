if (typeof jscript === "undefined") {
    jscript = function () {
    };
}

jscript.datetime = function () {

};

jscript.datetime.getNumberDaysInMonth = function (inMonth, inYear) {
    inMonth = inMonth - 1;
    var leap_year = this.isLeapYear(inYear);
    if (leap_year) {
        leap_year = 1;
    } else {
        leap_year = 0;
    }
    if (inMonth === 3 || inMonth === 5 || inMonth === 8 || inMonth === 10) {
        return 30;
    } else if (inMonth === 1) {
        return 28 + leap_year;
    } else {
        return 31;
    }
};

jscript.datetime.isLeapYear = function (inYear) {
    return ((inYear % 4 === 0 && !(inYear % 100 === 0)) || inYear % 400 === 0);
};