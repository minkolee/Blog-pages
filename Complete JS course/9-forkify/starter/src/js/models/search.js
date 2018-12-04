import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;

    }

    async getResults() {
        const key = "fc7a70a47ea063594a91052ee18076e0";
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            //用一个属性来存放异步查询的结果,可能在调用对象的方法的时候还不存在,但是可以通过回调函数来使用.
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (e) {
            console.log(e);
        }
    }
}




