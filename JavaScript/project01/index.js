//omdb key is 3453dad4

//film id tt6048922`

let apiKey = '3453dad4';

const fetchData = async (name) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apiKey: '3453dad4',
            s: name
        }
    });

    if (response.data.Error) {
        return [];
    }

    return response.data.Search;
};


const root = document.querySelector(".autocomplete");

root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input type="text" class="input">
    <div class="dropdown is-active">
        <div class="dropdown-menu">
            <div class="dropdown-content results">
 
            </div>
        </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector(".dropdown");
const resultWrapper = document.querySelector(".results");




const onInput = debounce(async event => {
    const movies = await fetchData(event.target.value);

    console.log(movies);
    dropdown.classList.add('is-active');
    resultWrapper.innerHTML = "";
    movies.forEach(x => {

        const option = document.createElement("a");
        option.classList.add('dropdown-item');
        option.innerHTML = `<img src="${x.Poster}" />
            ${x.Title}`;
        resultWrapper.appendChild(option);
    })


    // for (let movie in movies) {
    //     const div = document.createElement("div");
    //     div.innerHTML = `<img src="${movie.Poster}" />
    //     <h1>${movie.Title}</h1>`;
    //     document.querySelector('#target').appendChild(div);
    // }


});
input.addEventListener('input', onInput);