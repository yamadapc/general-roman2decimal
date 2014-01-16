ROMAN_MAP = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
result = 0
roman = [ROMAN_MAP[c] for c in raw_input()]

for i, n in enumerate(roman):
    if len(roman) == i + 1: nxt = 0
    else: nxt = roman[i + 1]

    if nxt > n: result -= n
    else: result += n

print result
