function update(element){
    var id = document.getElementById('image');
    id.style.backgroundImage = "url('"+element.src+"')";
    id.innerHTML = element.alt;
}

function unDo(){
    var id = document.getElementById('image');
    id.style.backgroundImage = "url('')";
    id.innerHTML = "Hover over an image below to display here.";
}