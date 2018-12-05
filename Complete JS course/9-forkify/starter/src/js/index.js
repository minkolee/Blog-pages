import Search from "./models/search";
import * as searchView from "./views/searchView"
import {elements} from "./views/base";

/*Global state of the app
|* - Search object
|* - Current recipe object
|* - Shopping list object
|* - Liked recipes
*/
const state = {

}

const controlSearch = async () => {
    // 1  从视图中获取查询字符串
    const query = searchView.getInput();
    if(query){
        // 2 如果有查询字符串,创建Search对象,加到当前状态上
        state.search = new Search(query);

        // 3 准备UI元素,更新查询结果
        searchView.clearInput();

        // 4 查询结果

        await state.search.getResults();

        // 5 在UI上渲染结果
        searchView.clearResults();
        searchView.renderResults(state.search.result)
    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
})








const search = new Search("pizza");
console.log(search);
search.getResults();



































//fc7a70a47ea063594a91052ee18076e0

//https://www.food2fork.com/api/search

//https://www.food2fork.com/api/get

//https://www.food2fork.com/api/search?key=fc7a70a47ea063594a91052ee18076e0&q=chicken%20breast&page=2
















