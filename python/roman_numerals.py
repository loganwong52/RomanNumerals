def to_roman(num):
    # write your code here!
    output = ""
    roman_numeral_map = {
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


    while(num > 0):
        # 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
        for roman_num in roman_numeral_map:
            arabic_num = roman_numeral_map[roman_num]
            
            # 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
            evenly_div_times = num//arabic_num
        
            # 6. If EVENLY_DIVISIBLE_TIMES >= 1
            if(evenly_div_times >= 1):
                for i in range(0, evenly_div_times):
                    # 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
                    output += roman_num
                    # 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
                    num -= arabic_num

    return output