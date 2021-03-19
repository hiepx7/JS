function myFunction (){
    var listUL = document.getElementsByTagName("ul");   // Lấy toàn bộ các thẻ ul trong document
    var ulDauTien = listUL[0];  // thứ tự được tính từ thứ 0 giống mảng.
    
    var listLI = ulDauTien.getElementsByTagName("li");
    var liDauTien = listLI[0];
    liDauTien.style.backgroundColor = "green";
    liDauTien.style.color = "white";


    // Thẻ Div:
    var listDiv = document.getElementsByTagName("div");
    var divDauTien = listDiv[0];
    // var listP = divDauTien.getElementsByTagName("p");
    // var pThuHai = listP[1];

    pThuHai = divDauTien.getElementsByTagName("p")[1];
    // pThuHai = document.getElementsByTagName("div")[0].getElementsByTagName('p')[1].style.backgroundColor = "orange";

    pThuHai.style.fontSize = "20px";
    pThuHai.style.color = "blue";

    // Dấu * để lấy tất cả các thẻ.
    var test = listDiv[0].getElementsByTagName("*")[0];  // đếm thứ tự của tất cả các thẻ.
    test.innerHTML = "Đã test xong";


    changeClass();
    testQuerySelector();
    testQuerySelectorAll();
}

function changeClass(){
    var listClass = document.getElementsByClassName("test");
    
    // listClass[0].style.color = "orange";
    // listClass[1].style.color = "orange";

    for (var item of listClass){    // Sử dụng for nếu không biết listClass có bao nhiều ptu và cho gọn code.
        item.style.color = "orange";
        item.style.fontSize = "20px";
    }
}

function testQuerySelector(){   
    var theLI = document.querySelector("li");   // Lấy thẻ li đầu tiên trong tất cả các selector
    theLI.innerHTML = "Query Selector đã thay đổi nội dung.";
    theLI.style.color = "white";
}

function testQuerySelectorAll(){
    var listLI = document.querySelectorAll("li")  // Lấy list tất cả các thẻ li
    for (var item of listLI){
        item.style.border = "1px dashed #808073";
    }

    var listClassTest = document.querySelectorAll(".test");  // Lấy list tất cả các class "test"
    listClassTest.style.backgroundColor = "yellow";
    listClassTest.style.fontWeight = "bold";
}