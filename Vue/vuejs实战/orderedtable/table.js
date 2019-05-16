Vue.component("vTable", {
    props: {
        columns: {
            type: Array,
            default: function () {
                return [];
            }
        },
        data:{
            type:Array,
            default:function () {
                return [];
            }
        }
    },
    data: function () {
        return {
            currentColumns: [],
            currentData: []
        }
    },
    mounted:function () {
        this.makeColumns();
        this.makeData();
        console.log(this.currentColumns);
        console.log(this.currentData);
    },
    methods:{
        makeColumns:function () {
            console.log(this.columns);
            this.currentColumns = this.columns.map(function (col,index) {
                col._sortType = 'normal';
                col._index = index;
                return col;
            })
        },
        makeData:function () {
            this.currentData = this.data.map(function (row,index) {
                row._index = index;
                return row;
            })
        }
    },
    render:function (createElement) {
        var _this = this;
        var ths = [];

        this.currentData.forEach(function (row) {
            var tds = [];
            _this.currentColumns.forEach(function (cell) {
                tds.push(createElement('td', row[cell.key]));
            });
            console.log(tds);
        });




        var trs = [];
        return createElement('table', [
            createElement('thead',[
                createElement('tr', ths)
            ]),
            createElement('tbody', trs)
        ]);



    }

});