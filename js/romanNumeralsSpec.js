var rn = require("./romanNumerals");

// console.log(rn.toRoman(1) === 'I');
// console.log(rn.toRoman(3) === 'III');
// console.log(rn.toRoman(4) === 'IV');

// console.log(rn.toRoman(4) === 'IIII');
// console.log(rn.toRoman(9) === 'VIIII');
// console.log(rn.toRoman(52) === 'LII');
//  console.log(rn.toRoman(4));      //IV
//  console.log(rn.toRoman(9));      //IX
// console.log(rn.toRoman(40));     //XL
console.log(rn.toRoman(49));     //XLIX
console.log(rn.toRoman(99));     //XCIX
console.log(rn.toRoman(499));    //CDXCIX
console.log(rn.toRoman(944));    //CMXLIV
console.log(rn.toRoman(999));    //CMXCIX
console.log(rn.toRoman(150));    //CL

// console.log(rn.toRoman(4005));    //MMMMV
// console.log(rn.toRoman(4949));    //MMMMCMXLIX
// console.log(rn.toRoman(949));    //CMXLIX



