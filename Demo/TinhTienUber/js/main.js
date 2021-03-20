// Khai báo hằng số và mảng giá cho từng loại xe.
const ARRAY_GIA_UBER_X = [8000, 12000, 10000];
const GIA_CHO_UBER_X = 2000;

const ARRAY_GIA_SUV = [9000, 14000, 12000];
const GIA_CHO_SUV = 3000;

const ARRAY_GIA_BLACK = [10000, 16000, 14000];
const GIA_CHO_BLACK = 4000;


function getEle(id){
    return document.getElementById(id);
}


// BƯỚC 5 - TẠO HÀM KIỂM TRA LOẠI XE
function kiemTraLoaiXe(){
    /** Phân tích:
     * Như phân tích ở bước 2, ta cần phải tạo hàm để kiểm tra user chọn xe gì.
     * Từ đó sẽ lấy được giá trị user chọn để quay lại bước 2 tính.
     * 
     * Vì đây là hàm check dữ liệu nhập vào nên parameter sẽ không có gì mà khai bảo thẳng
     * các biến tham gia ở ngay trong hàm.
     */

    var uberX = getEle("uberX");
    var uberSUV = getEle("uberSUV");
    var uberBlack = getEle("uberSUV");

    if (uberX.checked){
        return "uberX";
    } else if (uberSUV.checked){
        return "uberSUV";
    } else if (uberBlack.checked){
        return "uberBlack";
    }
}

// BƯỚC 4 - TÍNH TIỀN CHỜ
function tinhTienCho(thoiGianCho, giaCho){
    /** Phân tích:
     * Đây là hàm tính toán (tạo công thức) chứ không phải là hàm lấy dữ liệu và xử lý
     * nên sẽ có các parameter
     * Công thức (>=3 phút): tienCho = Thời gian chờ (làm tròn) * Giá chờ
     */

    var tienCho = 0;
    if (thoiGianCho >=3){
        tienCho = Math.round(thoiGianCho/3.0) * giaCho;
    }
    return tienCho;
}


// BƯỚC 3 - TẠO HÀM PHỤ ĐỂ ĐƯA RA CÔNG THỨC TÍNH TIỀN
function tinhTienTheoKM(soKM, arrayPriceByXe,thoiGianCho, tienCho){
/** Phân tích:
 * Như phân tích ở bước 2, 
 * Ở bước này ta sẽ tạo ra công thức để tính tiền theo KM cho mỗi loại xe
 * Có nghĩa là bỏ qua loại xe để tính. Sau này khi dùng lại hàm này thì sẽ chỉ cần check xe gì rồi áp dụng hàm này để tính
 * 
 * Để tính tiền, ta cần 4 biến: số km, giá, thời gian chờ, giá chờ.
 * Thêm nữa, đây là hàm công thức nên sẽ không có dữ liệu từ DOM vào nên các parameter được đưa vào luôn.
 *  + Giá thì mỗi xe có 3 mức giá => Tạo hằng số mảng giá cho từng xe rồi sử dụng index mảng để lấy giá.
 *  + Giá chờ thì mỗi xe có 1 mức khác nhau => Cũng cần khai báo hằng số.
 */
    var tongTien = 0;
    var tienCho = tinhTienCho(thoiGianCho, giaCho);
    if (soKM <= 1){
        tongTien = arrayPriceByXe[0] + tienCho;
    } else if (1 < soKM && soKM < 20){
        tongTien = arrayPriceByXe[0] + (soKM-1)*arrayPriceByXe[1] + tienCho;
    } else if (soKM >= 20){
        tongTien = arrayPriceByXe[0] + 18*arrayPriceByXe[1] + (soKM-19)*arrayPriceByXe[2] + tienCho;
    }
    return tongTien;
}

// BƯỚC 2 - TẠO HÀM TÍNH TỔNG TIỀN
function tinhTongTien(){
    /** Phân tích:
     * Mỗi một loại xe được tính số tiền như sau: 
     *   soKM <= 1: Giá km đầu tiên + Tiền chờ
     *   1 < soKM < 20km: Giá KM đầu tiên + ((soKM-1) * Giá 1_19km) + Tiền chờ
     *   soKM >=20: Giá km đầu tiên + (18 * Giá 1_19km) + ((soKM-19) * Giá 20km) + Tiền chờ
     *
     * Tóm lại, với từng loại xe: tongTien = Giá theo KM + Tiền chờ 
     * Ta sẽ sử dụng switch-case để duyệt cho từng loại xe để tính dựa vào các hàm:
     * => Tạo hàm để tính tiền theo km đi được: tinhTienTheoKM()
     *    Tạo hàm để kiểm tra user chọn xe gì để duyệt theo switch-case: kiemTraLoaiXe()
     * 
     * Ngoài ra, Tiền chờ còn có yêu cầu là từ 3 phút trở đi mới tính tiền, trên 3 phút thì cứ 3 phút tính tiền 1 lần.
     * Tức là, thoiGianCho < 3 phút: tienCho = 0
     *         thoiGianCho >= 3 phút: tính tiền chờ theo từng loại xe. (Làm tròn)
     * Vì thế sẽ có thêm hàm tính tiền chờ nữa: tinhTienCho()
     * 
     * Lưu ý:
     * - Số KM và Thời gian chờ là hằng số lấy được từ người nhập vào => get về là được
     * - Giá thì lại phụ thuộc vào Loại xe và Thời gian chờ.
     */
    
    var soKM = getEle("soKM").value;
    soKM = parseFloat(soKM);

    var thoiGianCho = getEle("thoiGianCho").value;
    thoiGianCho = parseFloat(thoiGianCho);

    var tongTien = 0;
    var loaiXe = kiemTraLoaiXe();

    switch (loaiXe){
        case "uberX":
            tongTien = tinhTienTheoKM(soKM, ARRAY_GIA_UBER_X, thoiGianCho, GIA_CHO_UBER_X);
            break;
        case "uberSUV":
            tongTien = tinhTienTheoKM(soKM, ARRAY_GIA_SUV, thoiGianCho, GIA_CHO_SUV);
            break;
        case "uberBlack":
            tongTien = tinhTienTheoKM(soKM, ARRAY_GIA_BLACK, thoiGianCho, GIA_CHO_BLACK);
            break;
        default: 
            alert('Vui lòng chọn loại xe bạn muốn !')
    }

    return tongTien;
}

// BƯỚC 1 - Gắn sự kiện cho button TÍNH TIỀN
getEle("btnTinhTien").onclick = function(){
    var tongTien = tinhTongTien();

    // Show kết quả xuống dưới
    getEle("divThanhTien").style.display = "block";
    getEle("xuatTien").innerHTML = tongTien;
}