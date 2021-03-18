var a = [4, 16, 7, 3, -6, 8, -9, -2, 5, 12, -4];
a[5]= 6;
a.push(7);
a[11]= -7;
console.log(a);
console.log('Chiều dài mảng a: '+ a.length);
console.log('Phần tử thứ 5 của mang a: ' + a.indexOf(5));
console.log('Phần tử cuối cùng của mang a: ' + a[a.length-1]);

// CÂU 1: Tính tổng các số trong mảng a
var tong = 0;
for (var item of a){
    tong += item; // tong = tong + item;
}
console.log('Tổng các phần tử của mang a là: ' + tong);

/** 3 CÁCH SỬ DỤNG VÒNG LẶP

// Duyệt theo index của mảng, bắt đầu từ phần tử thứ 0
for (var i=0; i<a.length; i++){ 
    console.log(a[i]);
}

// Duyệt theo từng phần tử dùng for...of
for (var pt of a){
    console.log(pt);
}

// Duyệt theo while, khi không cần quan tâm mảng có bao nhiêu phần tử.
var i =0; 
while (i < a.length){
    console.log(a[i]);
    i++;
}

****/


// ******************************************** 
// CÂU 2: Tìm phần tử âm lớn nhất trong mảng mangX. Xuất giá trị và chỉ số tại vị trí đó
/**
 * Lưu ý: Bài này đi tìm chỉ số (index) của phần tử trong mảng.
 * Bước 1 - Tìm chỉ số Âm đầu tiên
 * Bước 2 - Đi tìm chỉ số Âm lớn nhất: so sánh chỉ số Âm đầu tiên với các phần tử còn lại.
 * Bước 3 - Tìm tập hợp những chỉ số Âm lớn nhất (vì có thể có phần tử khác bằng chỉ số Âm lớn nhất)
 * Bước 4 - In mảng những chỉ số Âm lớn nhất.
 */

var mangX = [4, 16, 7, -4, -6, 8, 16, -2, 5, 12, -2];   // mảng có cả số âm & số dương, và kquả trùng nhau

console.log(mangX);

// Bước 1: Đi tìm chỉ số Âm đầu tiên.
var chiSoAmDauTien = -1;
for (var i = 0; i < mangX.length; i++){
    if(mangX[i] < 0){
        chiSoAmDauTien = i;
        break;
    }
}

// Bước 2: Xác định chỉ số (index) Âm lớn nhất bằng cách: So sánh nó với những thành phần còn lại.
// Nếu đã tìm được chỉ số (index) Âm đầu tiên rồi mà nó khác -1 thì đi tìm chỉ số Âm lớn nhất.
// (Lưu ý: Khai báo chỉ số Âm lớn nhất bên ngoài vòng lặp và coi như nó bằng chỉ số Âm đầu tiên vừa tìm được)
// Còn nếu không thì nó không có giá trị âm nào cả.

var chiSoAmLonNhat = chiSoAmDauTien;
if (chiSoAmDauTien != -1){
    for (var i = chiSoAmDauTien; i < mangX.length; i++){
        if (mangX[i] < 0 && mangX[i] > mangX[chiSoAmLonNhat]){
            chiSoAmLonNhat = i;
        }
    }

    // Bước 3: Đi tìm những phần tử Âm lớn nhất.
    // Lưu ý: Khai báo mảng các chỉ số Âm lớn nhất ở bên ngoài để nó tích lũy các phần tử quét được.
    var mangSoAmLonNhat = [];
    for (var i = chiSoAmLonNhat; i < mangX.length; i++){
        if (mangX[i] === mangX[chiSoAmLonNhat]){
            mangSoAmLonNhat.push(i);
        }
    }

    console.log("Bước 3 -> Mảng các số âm lớn nhất nằm ở vị trí thứ: " + mangSoAmLonNhat);

    // Bước 4: In mảng các số Âm lớn nhất
    /**
     * Lưu ý: chiSoAmDauTien và chiSoAmLonNhat chỉ là index của các phần tử chứ không phải là giá trị phần tử. 
     *          Và mangSoAmLonNhat cũng chỉ là mảng các index của phần tử Âm lớn nhất.
     * Vì thế, khi in ra thì cần phải dùng vòng lặp for
     */

    console.log("Bước 4 -> Phần tử Âm lớn nhất trong mảng mangX là: " + mangX[chiSoAmLonNhat] + ". Nằm ở vị trí:");    
    for (var i = 0; i < mangSoAmLonNhat.length; i++){
        console.log("- index thứ: " + mangSoAmLonNhat[i]);
    }   

} else {
    console.log("Không có giá trị âm nào.")
}




// ******************************************** 
// CÂU 3: Tính tổng các số lẻ trong mảng mangX.

var tongSoLe = 0;
for (var soLe of mangX){
    if (soLe % 2 != 0 ) {
        tongSoLe += soLe;
    }
}
console.log("Câu 3 - Tổng các số lẻ trong mảng mangX = " + tongSoLe);



// ******************************************** 
// CÂU 4: Tìm số lớn nhất trong mảng mangX và chỉ số tại đó.
/** 
 * Bước 1 - Cho số đầu tiên là số lớn nhất. Sau đó, duyệt mảng để tìm số lớn nhất: so sánh thằng đầu tiên với những ptử còn lại
 * Bước 2 - Tạo mảng những phần tử lớn nhất bằng nhau
 * Bước 3 - In danh sách các số lớn nhất và chỉ số (index) tại đó.
*/


// Bước 1: Tìm số lớn nhất
var chiSoMax = 0;   // Cho phần tử đầu tiên là Số lớn nhất (mà gắn cho index của nó là 0)
for (var i = 0; i < mangX.length; i++){
    if (mangX[i] > mangX[chiSoMax]){       // Nếu phần tử thứ i mà lớn hơn phần tử đầu tiên thì nó là số lớn nhất
        chiSoMax = i;       //Lưu ý: không break; vì nếu break thì nó sẽ dừng lại luôn khi tìm được ptử lớn hơn đầu tiên.
    }
}

// Bước 2: Mảng những số lớn nhất
var mangSoMax = [];
for (var i = mangSoMax; i < mangX.length; i++){
    if (mangX[i] === mangX[chiSoMax]){
        mangSoMax.push(i);
    }
}

// Bước 3: In ra
console.log("Câu 4 - Số lớn nhất trong mangX là: " + mangX[chiSoMax] + ". Nằm ở vị trí index: " + mangSoMax);
