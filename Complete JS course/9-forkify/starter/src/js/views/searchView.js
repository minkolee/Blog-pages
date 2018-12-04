//这是所有视图函数的文件

import {elements} from "./base";

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    elements.searchInput.value = "";
}

export const clearResults = () => {
    elements.seachResList.innerHTML = "";
}

const renderRecipe = recipe => {
    //渲染模板字符串
    const markup = `
                    <li>
                    <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    `;
    //insertAdjacentHTML 在不同的位置插入HTML代码
    elements.seachResList.insertAdjacentHTML("beforeend",markup);
};


export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};