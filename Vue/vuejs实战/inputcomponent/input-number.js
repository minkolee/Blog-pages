Vue.component('input-number',{
    template: '<div class="input-number"></div>',
    props:{
        max:{
            type:Number,
            default: Infinity
        },
        min:{
            type:Number,
            default: -Infinity
        },
        value:{
            type:Number,
            default: 0
        }
    },
    data:function () {
        return {
            currentValue: this.value
        }
    },
    watch:{
        currentValue: function (val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value: function (val) {
            this.updateValue(val);

        }
    },
    methods:{
        updateValue: function (val) {
            if (val > this.max()) val = this.max();
            if(val<this.min) val = this.min();
            this.currentValue = val;
        }
    },
    mounted:function () {
        this.updateValue(this.value);
    }
});