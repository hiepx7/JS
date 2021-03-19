// function bamNut1(){
//     var chao = document.getElementById("loichao1");
//     chao.innerHTML = "Đã thay đổi lời chào 1 !";
// }

// function bamNut2(){
//     var chao = document.getElementById("loichao2");
//     chao.innerHTML = "Đã thay đổi lời chào 2 !";
// }

function thayDoiNoiDung(id, noidung){
    var chao = document.getElementById(id);
    chao.innerHTML = noidung;
}

function thayDoiStyle(id , size, mau, nen){
    var kieu = document.getElementById(id);
    kieu.style.fontSize = size;
    kieu.style.color = mau;
    kieu. style.backgroundColor = nen;
}

function thayDoiDiv2(id){
    var the = document.getElementById(id);
    the.style.backgroundColor = "red";
}

function getDiv3(id){
    var the = document.getElementById(id);
    return the.style.width;
}

function bamNut1(){
    thayDoiNoiDung("loichao1" , "Đã thay đổi lời chào 1 !");
    thayDoiStyle("loichao1", "20px", "#FFF", "red");
}

function bamNut2(){
    thayDoiNoiDung("loichao2","Đã thay đổi lời chào 2 !");
    thayDoiDiv2("theDiv2")
}

function bamNut3(){
   thayDoiNoiDung ("theDiv3", getDiv3("theDiv3"));
}

