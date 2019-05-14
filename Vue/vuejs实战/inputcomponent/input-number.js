Vue.component('input-number', {
    template: '#numbertemplate',
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        },
        step:{
            type: Number,
            default: 1
        }
    },
    data: function () {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue: function (val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value: function (val) {
            this.updateValue(val);
        }
    },
    mounted: function () {
        this.updateValue(this.value);
    },
    methods: {
        handleDown: function () {
            if (this.currentValue <= this.min || (this.currentValue - this.step) <= this.min) {
                this.currentValue = this.min;
            } else {
                this.currentValue -= this.step;
            }
        },

        handleUp: function () {
            if (this.currentValue >= this.max || (this.currentValue + this.step) >= this.max ) {
                this.currentValue = this.max;
            } else {
                this.currentValue += this.step;
            }
        },

        updateValue: function (val) {
            if (val > this.max) {
                val = this.max;
            }
            if (val < this.min) {
                val = this.min;
            }
            this.currentValue = val;
        },
        handleChange: function (e) {
            var val = e.target.value.trim();
            var max = this.max;
            var min = this.min;
            if (isValueNumber(val)) {
                val = Number(val);
                this.currentValue = val;
            }
            if (val > max) {
                this.currentValue = max;
            } else if (val < min) {
                this.currentValue = min;
            } else {
                e.target.value = this.currentValue;
            }
        },
        handleKeyUp: function (e) {
            console.log("按上");
            this.currentValue+=this.step;
        },
        handleKeyDown: function (e) {
            console.log("按下");
            this.currentValue-=this.step;
        }
    }
});


function isValueNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + "");
}

