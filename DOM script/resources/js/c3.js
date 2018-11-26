let placeHolder = document.getElementById("placeholder");

function showPic(whichpic) {
    let source = whichpic.getAttribute('href');
    placeHolder.setAttribute('src', source);
    document.getElementById("description").firstChild.nodeValue = whichpic.getAttribute('title');
}

