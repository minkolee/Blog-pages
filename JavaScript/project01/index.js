//omdb key is 3453dad4

//film id tt6048922`

let apiKey = '3453dad4'

const fetchData = async () =>{
    const response = await axios.get("http://www.omdbapi.com/",{
        params:{
            apiKey: '3453dad4',
            i: 'tt6048922'
        }
    });
    console.log(response.data);
}

