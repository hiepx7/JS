/****** BÀI 1 */
// Viết hoàm tìm số lớn nhất, số nhỏ nhất, tổng 3 số trong 3 số a, b, c lấy được từ bên ngoài

function timSoLonNhat (a, b, c) {
    var soLonNhat = a;
    if (soLonNhat < b){
        soLonNhat = b;
    } 
    if (soLonNhat < c) {
        soLonNhat = c;
    }
    return soLonNhat;
}

function timSoNhoNhat (a, b, c){
    var soNhoNhat = a;
    if (soNhoNhat > b){
        soNhoNhat = b;
    }
    if (soNhoNhat > c){
        soNhoNhat = c;
    }
    return soNhoNhat;
}

function tinhTong3So (a, b, c){
    var tong = a + b + c;
    return tong;
}

function onClick (){
    var x = 6;
    var y = 17;
    var z = 9;
    var soMax = timSoLonNhat(x, y, z);
    var soMin = timSoNhoNhat (x, y, z);
    var tong3so = tinhTong3So(x, y, z);
    console.log("Số lớn nhất là: " + soMax);
    console.log ("Số nhỏ nhất là: " + soMin);
    console.log ("Tổng 3 số là: " + tong3so);
}

onClick();