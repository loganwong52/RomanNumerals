// PART 1: LAZY ROMAN NUMERALS
// part 1 Map:
/*
let romanArabicMap = {
        "M" : 1000,
        "D" : 500, 
        "C" : 100,
        "L" : 50,
        "X" : 10,
        "V" : 5,
        "I" : 1
    }
*/

//PART 2: MODERN ROMAN NUMERALS: The only thing to change is the map!!!
// PART 1: LAZY ROMAN NUMERALS
exports.toRoman = function(num) {
    // 2. Create a OUTPUT string, set to ''
    let output = "";
    // 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
    
    // Part 2 Map
    let romanArabicMap = {
        "M" : 1000,
        "CM" : 900,
        "D" : 500,
        "CD" : 400,
        "C" : 100,
        "XC" : 90,
        "L" : 50,
        "XL" : 40,
        "X" : 10,
        "IX" : 9,
        "V" : 5,
        "IV" : 4,
        "I" : 1
    }

    var arabicNum;
    //var romanNum;
    var evenlyDivTimes;
    while(num > 0){
        // 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
        for(const romanNum in romanArabicMap){
            arabicNum = romanArabicMap[romanNum];
            
            // 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
            evenlyDivTimes = Math.floor(num/arabicNum);
        
            // 6. If EVENLY_DIVISIBLE_TIMES >= 1
            if(evenlyDivTimes >= 1){
                for(var i = 0; i < evenlyDivTimes; ++i){
                    // 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
                    output += romanNum;
                    // 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
                    num -= arabicNum;
                }
            }
        }
    }
    return output;
};