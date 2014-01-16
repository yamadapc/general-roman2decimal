(ns roman-to-decimal.core-test
  (:require [clojure.test :refer :all]
            [roman-to-decimal.core :refer :all]))

(deftest roman-to-decimal-test
  (testing "purely additive input"
    (is (= 300 (roman-to-decimal "CCC")))
    (is (= 320 (roman-to-decimal "CCCXX"))))

  (testing "purely subtractive input"
    (is (= 90 (roman-to-decimal "XC")))
    (is (= 4 (roman-to-decimal "IV")))
    (is (= 400 (roman-to-decimal "CD")))
    (is (= 9 (roman-to-decimal "IX"))))

  (testing "mixed input"
    (is (= 3290 (roman-to-decimal "MMMCCXC")))
    (is (= 1907 (roman-to-decimal "MCMVII")))
    (is (= 2447 (roman-to-decimal "MMCDXLVII")))
    (is (= 2984 (roman-to-decimal "MMCMLXXXIV")))
    (is (= 1096 (roman-to-decimal "MXCVI")))
    (is (= 1904 (roman-to-decimal "MCMIV")))
    (is (= 2502 (roman-to-decimal "MMDII")))
    (is (= 1000 (roman-to-decimal "M")))
    (is (= 2579 (roman-to-decimal "MMDLXXIX")))
    (is (= 3088 (roman-to-decimal "MMMLXXXVIII")))
    (is (= 2799 (roman-to-decimal "MMDCCXCIX")))
    (is (= 197 (roman-to-decimal "CXCVII")))))
