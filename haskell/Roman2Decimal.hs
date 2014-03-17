-- roman2decimal
module Roman2Decimal (
  RomanAlg(..),
  romanAlgToDecimal,
  RomanNum,
  romanToDecimal,
  strToRoman,
  romanStrToDecimal
) where

data RomanAlg = I | V | X | L | C | D | M
              deriving(Eq, Ord, Show, Read)

type RomanNum = [RomanAlg]

romanAlgToDecimal :: RomanAlg -> Int
romanAlgToDecimal c = case c of
                        I -> 1
                        V -> 5
                        X -> 10
                        L -> 50
                        C -> 100
                        D -> 500
                        M -> 1000

romanToDecimal :: RomanNum -> Int
romanToDecimal = loop 0 . map romanAlgToDecimal
  where loop m (x:xs@(y:_)) | x < y = loop (m - x) xs
        loop m (y:ys)   = loop (m + y) ys
        loop m []       = m

romanStrToDecimal :: String -> Int
romanStrToDecimal = romanToDecimal . strToRoman

strToRoman :: String -> RomanNum
strToRoman = read . surround "[" "]" . interpose ","

surround :: String -> String -> String -> String
surround l r s = l ++ s ++ r

interpose :: String -> String -> String
interpose c = init . concatMap (:c)
