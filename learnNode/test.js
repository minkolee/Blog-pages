let fs = require('fs');
let https = require('https');


fs.writeFile(__dirname+"/index.html","<h1>First Node Js File</h1>",function (error) {
    if(error){
        return console.log('error');
    }else{
        return console.log("Congratulations");
    }
});

var photoLocation = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg"

https.get(photoLocation,function (response) {
    response.pipe(fs.createWriteStream(__dirname+"/photo.jpg"))
});