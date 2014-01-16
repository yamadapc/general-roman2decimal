(ns roman-to-decimal.core)
(use ['clojure.string :only '(split)])

;;; This is a fairly messy implementation, since I have almost 0 expirence with
;;; clojure. Please forgive me then, and please leave a note if you have tips or
;;; comments.

(defn roman-to-decimal [roman]
  ;; Converts roman numbers represented as strings into decimal numbers

  (defn iter [acc decimal i]
    (if (= i (count decimal))
      ;; base case
      acc

      ;; recur case
      (let [n (nth decimal i)
            nxt-i (+ i 1)
            nxt (nth decimal nxt-i 0)]
        (if (> nxt n)
          (iter (- acc n) decimal nxt-i)
          (iter (+ acc n) decimal nxt-i)))))

  (let [roman-map {"I" 1, "V" 5, "X" 10, "L" 50, "C" 100, "D" 500, "M" 1000}
        decimal (map roman-map (rest (split roman #"")))]
    (iter 0 decimal 0)))
