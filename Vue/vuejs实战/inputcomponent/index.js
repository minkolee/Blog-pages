var app = new Vue({
    el: "#app",
    data:{
        value: 5
    },
    methods:{
        changeHandler(val) {
            console.log(val);
        }
    }
});