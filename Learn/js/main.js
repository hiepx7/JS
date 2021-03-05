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
console.log(mang.sort());
//In ra phan tu thu ... cua mang
console.log(mang[4]);

// In ra chieu dai cua mang
console.log(mang.length);

console.log(testIndexSo);
console.log(testIndex1);
console.log(testIndex2);

