// 1-masala
// let words = ['apple', 'banana', 'cat', 'dog', 'elephant'];

// let result = words
//   .filter(word => word.length >= 5) 
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1));

// console.log(result);



// 2-misol
// let talabalar = [
//     { ism: 'Ali', yosh: 19 },
//     { ism: 'Vali', yosh: 22 },
//     { ism: 'Sami', yosh: 21 }
//   ];
//   let natija = talabalar.find(talaba => talaba.yosh > 20).ism.toUpperCase();
  
//   console.log(natija); 
  

// 3-misol
// let arr = [5000, 12000, 15000, 8000, 20000];

// let umumiyNarx = arr
//   .filter(narx => narx > 10000)
//   .reduce((sum, narx) => sum + narx, 0);

// console.log(umumiyNarx);


// 4-misol
// let sonlar = [10, 50, 30, 150];


// let kattaSon = sonlar.some(son => son > 100);
// let barchaMusbat = sonlar.every(son => son > 0);

// if (barchaMusbat) {
//   console.log("Barcha sonlar musbat");
// } else {
//   console.log("Musbat bo'lmagan sonlar bor");
// }


// 5-misol
// let sonlar = [2, 4, 6, 8];
// let kvadratlar = [];

// sonlar.forEach(function(son) {
//   kvadratlar.push(son * son);

// })

// console.log(kvadratlar); 


// Yozuvga oid misollar

// 1-misol
// let matn = "salom dunyo";
// let kattaHarflar = matn.toUpperCase();

// console.log(kattaHarflar); 


// 2-misol
// let matn = "Bu JavaScript darsi";

// let substringMavjudmi = matn.includes("JavaScript");

// console.log(substringMavjudmi); 

// 3-misol
// let matn = "JavaScript o'rganish juda qiziqarli. JavaScript kuchli til.";

// let almashtirilganMatn = matn.replace(/JavaScript/g, "JS");

// console.log(almashtirilganMatn); 

// 4-misol
// let matn = "Bu yerda juda ko'p qiziqarli narsalar bor";

// let teskariMatn = matn.split(' ').reverse().join(' ');

// console.log(teskariMatn); 


// 5-misol
let matn5 = "    Salom dunyo!    ";
let trimlanganMatn = matn5.trim();

console.log(trimlanganMatn);
