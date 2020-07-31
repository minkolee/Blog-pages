const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '3453dad4',
            s: searchTerm
        }
    });

    if (response.data.Error) {
        return [];
    }

    return response.data.Search;
};

const fetchSingleMovie = async function (imdbID) {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '3453dad4',
            i: imdbID
        }
    });
    return response.data;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown ">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
    //每次异步获取结果
    const movies = await fetchData(event.target.value);

    //然后重置下拉菜单
    resultsWrapper.innerHTML = '';

    //检测返回值的长度, 是0就不显示
    if (movies.length === 0) {
        dropdown.classList.remove('is-active');
        return;
    }

    //不是0, 让菜单变为可用
    dropdown.classList.add('is-active');

    console.log(movies);

    //渲染每个dropdown-item并添加
    for (let movie of movies) {
        const div = document.createElement('a');
        div.classList.add("dropdown-item");
        const imgLink = movie.Poster === 'N/A' ? "http://iph.href.lu/300x447?text=NO%20IMAGE" : movie.Poster;
        div.innerHTML = `<img src="${imgLink}" />${movie.Title}`;
        resultsWrapper.appendChild(div);

        //点击单个item的时候, 再来一个请求, 去用IMDB的链接来进行查询
        div.addEventListener('click', async () => {
            event.preventDefault();
            input.value = movie.Title;
            dropdown.classList.remove('is-active');
            const singleMovie = await fetchSingleMovie(movie.imdbID);
            console.log(singleMovie);

            const summary = document.querySelector("#summary").innerHTML = renderMovie(singleMovie);

        });


    }
};
input.addEventListener('input', debounce(onInput, 500));


document.addEventListener('click', event => {
    //只要点击的地方不是列表之内, 就关闭列表
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }

});


const renderMovie = (singleMovieItem) => {

    const posterlink = singleMovieItem.Poster === 'N/A' ? "http://iph.href.lu/300x447?text=NO%20IMAGE" : singleMovieItem.Poster;

    return `
    <article class=media>
        <figure class="media-left">
        <p class="image">
        <img src="${posterlink}" alt="${singleMovieItem.Title} Poster">
</p>
</figure>
<div class="media-content">
 <div class="content">
 <h1>${singleMovieItem.Title}</h1>
 <h4>${singleMovieItem.Genre}</h4>
 <p>${singleMovieItem.Plot}</p>
</div>
</div>
</article>
<article class="notification is-primary">
<p class="title">${singleMovieItem.Awards}</p>
<p class="subtitle">Awards</p>
</article>
<article class="notification is-primary">
<p class="title">${singleMovieItem.BoxOffice}</p>
<p class="subtitle">BoxOffice</p>
</article>
<article class="notification is-primary">
<p class="title">${singleMovieItem.Metascore}</p>
<p class="subtitle">Metascore</p>
</article>
<article class="notification is-primary">
<p class="title">${singleMovieItem.imdbRating}</p>
<p class="subtitle">imdbRating</p>
</article>
<article class="notification is-primary">
<p class="title">${singleMovieItem.imdbVotes}</p>
<p class="subtitle">imdbVotes</p>
</article>
`
};