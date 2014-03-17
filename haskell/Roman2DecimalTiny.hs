module Roman2DecimalTiny (
  romanStrToDecimal
) where

romanMap :: Char -> Int
romanMap c | c == 'I'  = 1
           | c == 'V'  = 5
           | c == 'X'  = 10
           | c == 'L'  = 50
           | c == 'C'  = 100
           | c == 'D'  = 500
           | c == 'M'  = 1000
           | otherwise = error "invalid roman number"

romanStrToDecimal :: String -> Int
romanStrToDecimal = loop 0 . map romanMap
  where loop m (x:xs@(y:_)) | x < y = loop (m - x) xs
        loop m (y:ys) = loop (m + y) ys
        loop m []     = m
