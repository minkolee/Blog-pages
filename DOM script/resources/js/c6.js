function prepareGallery() {

    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    let gallery = document.getElementById('imagegallery');
    let links = gallery.getElementsByTagName('a');
    for(let i=0;i<links.length;i++){
        links[i].onclick = function () {
            if(!document.getElementById('placeholder')) return true;
            let source = this.getAttribute('href');
            let placeholder = document.getElementById('placeholder');
            if(placeholder.nodeName !=="IMG"){return true;}
            placeholder.setAttribute('src',source);
            if(document.getElementById('description')){
                let text = this.getAttribute("title") ? this.getAttribute('title'):"";
                let description = document.getElementById("description");
                if(description.firstChild.nodeType===3){
                    description.firstChild.nodeValue=text;
                }
            }
            return false;
        }
    }
}


window.onload = function () {
    prepareGallery();
};