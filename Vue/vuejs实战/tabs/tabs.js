Vue.component("tabs", {
    template:"#tabstemplate",
    data: function () {
        return {
            navList: [],
            currentValue: this.value
        }
    },
    props:{
        value:{
            type: [String, Number],
            default: 1
        }
    },
    methods:{
        getTabs() {
            return this.$children.filter(item => item.$options.name === "pane");
        },
        updateNav() {
            this.navList = [];
            var _this = this;
            this.getTabs().forEach((pane, index) => {
                this.navList.push({
                    label:pane.label,
                    name: pane.name || index
                });
                if(!pane.name) pane.name=index;
                if (index === 0) {
                    if (!this.currentValue) {
                        this.currentValue = pane.name || index;
                    }
                }
            });
        },
        updateStatus(){
            var tabs = this.getTabs();
            console.log(tabs);
            tabs.forEach(tab => tab.show = tab.name === this.currentValue);
        },
        tabCls:function (item) {
            return [
                'tabs-tab',{
                    'tabs-tab-active': item.name === this.currentValue
                }
            ]
        },
        handleChange: function (index) {
            var nav = this.navList[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input', name);
            this.$emit('on-click', name);
        }
    },
    watch:{
        value:function (val) {
            this.currentValue = val;
        },
        currentValue:function () {
            this.updateStatus();
        }
    },
    mounted:function () {
        var panes = this.getTabs();
        panes[0].show = true;
    }

});