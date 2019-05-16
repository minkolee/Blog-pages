var app = new Vue({
    el: "#app",
    data: {
        // 列名
        columns: [
            {title: '姓名', key: 'name'},
            {title: '年龄', key: 'age', sortable: true},
            {title: '生日', key: 'birthday', sortable: true},
            {title: '地址', key: 'address'}
        ],
        // 表格数据
        data: [
            {name: "jenny", age: 18, birthday: '1984-02-17', address: '上海'},
            {name: "minko", age: 36, birthday: '1983-07-9', address: '上海'},
            {name: "cony", age: 5, birthday: '2014-06-29', address: '上海'}
        ]
    }
});