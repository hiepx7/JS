function getEle(id) {
    return document.getElementById(id);
}

function tinhToan(){
    // Lấy giá trị nhập user vào
    var bill = getEle("billamt").value;
    var tip = getEle("serviceQual").value;
    var soNguoiTip = getEle("peopleamt").value;

    //Validation
    if (bill == "" || bill <=0 || tip == 0){
        alert("Vui lòng điền đủ và đúng thông tin !");
    } 

    if (soNguoiTip == "" || soNguoiTip <=1){
        soNguoiTip = 1;
        getEle("each").style.display = "none";
    }else{
        getEle("each").style.display = "block";
    }

    var ketQua = bill*tip/soNguoiTip;
    ketQua = Math.round(ketQua*100)/100;    // Làm tròn đến 2 chữ số thập phân
    ketQua = ketQua.toFixed(2);       //Đảm bảo sau dấu phảy có 2 chữ số (kể cả nếu có số 0)
        

    // Hiển thị giao diện kết quả
    getEle("totalTip").style.display = "block";
    getEle("tip").innerHTML = ketQua;
}

// Ẩn mặc định giao diện Kết quả
getEle("totalTip").style.display = "none";

// Gắn sự kiện khi bấm nút TÍNH NGAY
getEle("calculate").onclick = function(){
    tinhToan();
}