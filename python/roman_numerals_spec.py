from roman_numerals import to_roman

print(to_roman(1) == 'I')
print(to_roman(3) == 'III')
print(to_roman(4) == 'IV')
# add tests to cover different edge cases

print(to_roman(49));     #XLIX
print(to_roman(99));     #XCIX
print(to_roman(499));    #CDXCIX
print(to_roman(944));    #CMXLIV
print(to_roman(999));    #CMXCIX
print(to_roman(150));    #CL