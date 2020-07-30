//omdb key is 3453dad4

//film id tt6048922`

let apiKey = '3453dad4'

const fetchData = async (name) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apiKey: '3453dad4',
            s: name
        }
    });
    console.log(response.data);
}

const input = document.querySelector('input');

//避免重复点击的套路, 1.5秒钟没有输入再发送
let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1500);
}

input.addEventListener('input', onInput);