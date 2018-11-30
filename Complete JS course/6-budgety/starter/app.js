//create modules
//use IIFE 隔离环境
//只返回公用部分也就是API

//数据控制
var budgetController = (function () {


})();

// 视图控制
var UIController = (function () {


    return {
        getInput: function () {

            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector(".add__value").value
            }
        }
    }
})();


// 逻辑控制,需要把两个控制器传入当做参数操作
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        //获取表单元素中的内容(点击按钮或者按回车)
        var input = UICtrl.getInput();
        console.log(input);


        //    通过数据控制添加数据
        //    将数据对应的元素添加入UI
        //    取数和计算结果
        //    显示计算结果到UI上
    };


    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);


    document.addEventListener("keyup", function (event) {

        if (event.code === "Enter") {
            ctrlAddItem();
        }


    })


})(budgetController, UIController);