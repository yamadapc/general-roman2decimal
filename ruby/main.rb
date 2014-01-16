ROMAN_MAP = {'I'=>1,'V'=>5,'X'=>10,'L'=>50,'C'=>100,'D'=>500,'M'=>1000}
roman = gets.chomp.split ''
result = 0
roman.each_with_index do |roman_alg, i|
  nxt = ROMAN_MAP[roman[i + 1]]
  n = ROMAN_MAP[roman_alg]
  result = (nxt and nxt > n) ? result - n : result + n
end
puts result
