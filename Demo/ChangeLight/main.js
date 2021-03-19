function getEle(id){
    return document.getElementById(id);
}

function turnON(){
    var den = getEle("light");
    den.src = "img/light-on.png";
}

function turnOFF(){
    var den = getEle("light");
    den.src = "img/light-off.png";
}