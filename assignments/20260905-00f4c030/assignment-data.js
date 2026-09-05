window.TUTOR_ASSIGNMENT = {
  title: "2026-09-05｜因數與倍數作業",
  date: "2026-09-05",
  note: "共 15 題。完成後按「完成並查看結果」，再依訂正提示檢查。",
  questions: [
    {
      type: "choice",
      promptHtml: "<p>某正整數的所有正因數恰好是 1、2、4、7、14、28。這個正整數是多少？</p>",
      options: ["14", "21", "28", "56"],
      answer: 2,
      explanation: "完整正因數表中最大的數就是原來的正整數，所以答案是 28。"
    },
    {
      type: "choice",
      promptHtml: "<p>若 n 為正整數，而且 72 ÷ n 也是正整數，則 n 一定是什麼？</p>",
      options: ["72 的因數", "72 的倍數", "質數", "偶數"],
      answer: 0,
      explanation: "72 ÷ n 沒有餘數，表示 n 可以整除 72，所以 n 是 72 的因數。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>a、b 都是正整數，且 a × b = 72。求 a + b 的最小值與最大值。</p>",
      parts: [
        { label: "最小值", answer: 17 },
        { label: "最大值", answer: 73 }
      ],
      explanation: "72 的因數配對為 1×72、2×36、3×24、4×18、6×12、8×9；和最小是 8+9=17，最大是 1+72=73。"
    },
    {
      type: "number",
      promptHtml: "<p>把全班 48 位同學排成長方形隊形（包含正方形），每行至少 1 人，旋轉後相同的隊形算同一種。共有幾種排法？</p>",
      answerLabel: "排法數",
      answer: 5,
      tolerance: 0,
      explanation: "48 的因數配對為 1×48、2×24、3×16、4×12、6×8，共 5 組。"
    },
    {
      type: "number",
      promptHtml: "<p>用 84 張大小相同的正方形色紙拼成長方形，旋轉後相同的形狀算同一種。共有幾種不同形狀？</p>",
      answerLabel: "形狀數",
      answer: 6,
      tolerance: 0,
      explanation: "84 的因數配對為 1×84、2×42、3×28、4×21、6×14、7×12，共 6 組。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>用 24 張邊長 2 公分的正方形色紙拼成長方形。求長方形周長的最大值與最小值。</p>",
      parts: [
        { label: "最大周長（公分）", answer: 100 },
        { label: "最小周長（公分）", answer: 40 }
      ],
      explanation: "最長用 1×24 張，實際邊長是 2 與 48，周長 100；最接近正方形用 4×6 張，實際邊長是 8 與 12，周長 40。"
    },
    {
      type: "number",
      promptHtml: "<p>用 72 塊邊長 1 公分的正方形紙板，緊密拼成面積為 72 平方公分的長方形。這個長方形的周長最小可能是多少公分？</p>",
      answerLabel: "最小周長（公分）",
      answer: 34,
      tolerance: 0,
      explanation: "72 的因數配對中 8×9 最接近正方形，因此最小周長是 2×(8+9)=34 公分。"
    },
    {
      type: "number",
      promptHtml: "<p>a 為正整數，且 a + 5 是 84 的正因數。a 共有幾個可能的值？</p>",
      answerLabel: "可能值的個數",
      answer: 8,
      tolerance: 0,
      explanation: "84 的正因數中大於 5 的有 6、7、12、14、21、28、42、84，共 8 個；各自減 5 都得到正整數 a。"
    },
    {
      type: "choice",
      promptHtml: "<p>a、b 都是 11 的倍數。下列哪一個結果不一定是 11 的倍數？</p>",
      options: ["a + b", "a − b", "a × b", "a ÷ b（商為整數時）"],
      answer: 3,
      explanation: "兩個 11 的倍數相加、相減或相乘仍是 11 的倍數；相除的整數商不一定是，例如 22÷11=2。"
    },
    {
      type: "choice",
      promptHtml: "<p>下列關於 0 與 1 的敘述，哪一個是錯誤的？</p>",
      options: ["1 是每個正整數的因數", "每個非 0 整數都是 0 的因數", "0 是 12 的因數", "1 是 360 最小的正因數"],
      answer: 2,
      explanation: "因數不能是 0，因為除數為 0 沒有意義，所以 0 不是 12 的因數。"
    },
    {
      type: "choice",
      promptHtml: "<p>已知 96 ÷ 12 = 8，餘數為 0。下列敘述何者正確？</p>",
      options: ["96 是 12 的因數", "12 是 96 的倍數", "12 可以整除 96，96 是 12 的倍數", "8 不能整除 96"],
      answer: 2,
      explanation: "96÷12 沒有餘數，所以 12 是 96 的因數，12 可以整除 96，而 96 是 12 的倍數。"
    },
    {
      type: "choice",
      promptHtml: "<p>下列哪一個數不是 180 的因數？</p>",
      options: ["9", "12", "15", "28"],
      answer: 3,
      explanation: "180 可被 9、12、15 整除，但 180÷28 不是整數。"
    },
    {
      type: "choice",
      promptHtml: "<p>將 96 位學生分組，每組人數都相同。下列哪一個數不可能是每組人數？</p>",
      options: ["6", "8", "12", "14"],
      answer: 3,
      explanation: "每組人數必須是 96 的因數；6、8、12 都能整除 96，14 不能。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>把 120 的正因數由小到大排列：1、2、3、4、5、6、8、a、b、15、20、24、30、40、60、120。求 a、b。</p>",
      parts: [
        { label: "a", answer: 10 },
        { label: "b", answer: 12 }
      ],
      explanation: "120 的正因數依序為 1、2、3、4、5、6、8、10、12、15、20、24、30、40、60、120。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>回答下列兩題：(1) 1260 的所有正因數中，小於 1260 的最大因數是多少？(2) 936 的所有正因數中，最接近 300 的因數是多少？</p>",
      parts: [
        { label: "(1) 最大因數", answer: 630 },
        { label: "(2) 最接近 300 的因數", answer: 312 }
      ],
      explanation: "1260 的最大真因數是 1260÷2=630。936 的因數中，312 距離 300 為 12，比相鄰候選因數更近。"
    }
  ]
};
