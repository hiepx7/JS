var mang = [];
mang = ['A', 'B', "C", 5, 6.1,'Cuoi', true, false, "Hello"];
mang[2]='D'
// Khi push thì phan tu vao cuoi cung cua mang
mang.push("Cuoi");

// Xác định một phần tử là phần tử thứ mấy của mảng:
var testIndexSo = mang.indexOf(5);
var testIndex1 = mang.indexOf('Cuoi');
var testIndex2 = mang.lastIndexOf('Cuoi');

console.log(mang);
//In ra phan tu thu ... cua mang
console.log(mang[4]);

// In ra chieu dai cua mang
console.log(mang.length);

console.log(testIndexSo);
console.log(testIndex1);
console.log(testIndex2);

console.log(mang.sort());
console.log(mang.reverse()); 

// Dùng for để duyệt theo index trong mảng
/* for(var i=0; i< mang.length; i++){
    console.log(mang[i]);
} */

// Dùng for of để duyệt theo index trong mảng (Nên dùng)
//Dung for (nói chung) khi ĐÃ BIẾT số vòng lặp
for (var ptu of mang){
    console.log(ptu);
}

// Dung while khi KHÔNG BIẾT số vòng lặp
/* var i = 0;
while(i < mang.length){
    console.log(mang);
    i++;
} */



