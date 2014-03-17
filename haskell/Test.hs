import Test.HUnit
import Roman2Decimal

genTest :: String -> Int -> Test
genTest i e = "romanStrToDecimal " ++ i ~: e ~=? romanStrToDecimal i

tests :: Test
tests = test [ genTest "CCC" 300
             , genTest "CCCXX" 320
             , genTest "XC" 90
             , genTest "IV" 4
             , genTest "CD" 400
             , genTest "IX" 9
             , genTest "MMMCCXC" 3290
             , genTest "MCMVII" 1907
             , genTest "MMCDXLVII" 2447
             , genTest "MMCMLXXXIV" 2984
             , genTest "MXCVI" 1096
             , genTest "MCMIV" 1904
             , genTest "MMDII" 2502
             , genTest "M" 1000
             , genTest "MMDLXXIX" 2579
             , genTest "MMMLXXXVIII" 3088
             , genTest "MMDCCXCIX" 2799
             , genTest "CXCVII" 197
             ]

main :: IO ()
main = do
    print "Roman2Decimal tests:"
    runTestTT tests
    return ()
