function getEle(id){
    return document.getElementById(id);
}

function login(){
    var userName = getEle("username");
    var password = getEle("password");
    var thongBao = getEle("thongbao");
    var nenThongBao = getEle ("thongbao");

    if (userName.value === "hiepdepzai" && password.value ==="hiepdepzaiqua!"){
        thongBao.innerHTML = "Đăng nhập thành công !";
        nenThongBao.style.backgroundColor = "green";
    } else {
        thongBao.innerHTML = "Chưa đúng. Vui lòng nhập lại !";
        nenThongBao.style.backgroundColor = "red";
    }
    
}
