window.TUTOR_ASSIGNMENT = {
  title: "正負數、數線與指數作業",
  date: "2026-09-09",
  note: "共 10 題。完成後按「完成並查看結果」，再依訂正提示檢查。",
  questions: [
    {
      type: "number",
      promptHtml: "<p>滿足 <strong>3 &lt; |x| &lt; 10</strong> 的整數 x 共有幾個？</p>",
      answerLabel: "整數個數",
      answer: 12,
      tolerance: 0,
      explanation: "|x| 可為 4、5、6、7、8、9，每個絕對值各有正、負兩個整數，所以共有 12 個。"
    },
    {
      type: "number",
      promptHtml: "<p>數線上 -6 與 -4 之間分成 8 等分。由左至右第 5 個等分點的坐標是多少？（可輸入小數）</p>",
      answerLabel: "坐標",
      answer: -4.75,
      tolerance: 0,
      explanation: "每一小格是 (−4−(−6))÷8=0.25；由左端 -6 向右走 5 格，得到 -4.75。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>小安的成績是 82 分，比班平均高 7 分。小華比班平均高 13 分，小美比班平均低 4 分。求班平均，以及小華和小美相差幾分。</p>",
      parts: [
        { label: "班平均（分）", answer: 75 },
        { label: "小華與小美相差（分）", answer: 17 }
      ],
      explanation: "班平均是 82−7=75 分；小華 88 分，小美 71 分，因此相差 17 分。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>絕對值大於 3 又 1/4 且小於 6 又 1/2 的整數共有幾個？這些整數的總和是多少？</p>",
      parts: [
        { label: "整數個數", answer: 6 },
        { label: "總和", answer: 0 }
      ],
      explanation: "符合條件的是 −6、−5、−4、4、5、6，共 6 個；正負成對相加，總和為 0。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>數線上 P 在 Q 的右邊 5 單位，且 P 的坐標是 7。若 QR=12，求 R 的兩個可能坐標。</p>",
      parts: [
        { label: "較小的坐標", answer: -10 },
        { label: "較大的坐標", answer: 14 }
      ],
      explanation: "Q=7−5=2；與 2 相距 12 的點是 2−12=−10 或 2+12=14。"
    },
    {
      type: "choice",
      promptHtml: "<p>甲、乙兩點原本位於數線上的 -31 與 67。兩點同方向移動相同距離後，所在位置互為相反數。它們如何移動？</p>",
      options: ["向左 18 單位", "向右 18 單位", "向左 36 單位", "向右 36 單位"],
      answer: 0,
      explanation: "原來兩點的中點是 (−31+67)÷2=18；把中點移到原點，兩點要一起向左 18 單位。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>甲、乙兩戶在同一直線上的坐標分別是 -26 與 18，電視臺正好位於兩戶的中點。若數線上 1 單位代表 40 公尺，求電視臺坐標及兩戶的實際距離。</p>",
      parts: [
        { label: "電視臺坐標", answer: -4 },
        { label: "兩戶距離（公尺）", answer: 1760 }
      ],
      explanation: "中點是 (−26+18)÷2=−4；兩戶相距 44 單位，所以實際距離為 44×40=1760 公尺。"
    },
    {
      type: "choice",
      promptHtml: "<p>將 427/1000000 寫成科學記號。</p>",
      options: ["4.27×10⁻⁴", "4.27×10⁻³", "4.27×10⁴", "0.427×10⁻⁴"],
      answer: 0,
      explanation: "427/1000000=0.000427。小數點向右移 4 位得到 4.27，因此要乘上 10⁻⁴。"
    },
    {
      type: "number",
      promptHtml: "<p>某細菌一開始有 250 個，每 30 分鐘數量變為原來的 2 倍。在相同條件下，3 小時後共有多少個？</p>",
      answerLabel: "細菌數量",
      answer: 16000,
      tolerance: 0,
      explanation: "3 小時是 180 分鐘，共翻倍 180÷30=6 次；250×2⁶=250×64=16000。"
    },
    {
      type: "choice",
      promptHtml: "<p>設 A=(−0.5)⁴、B=(−0.5)⁵、C=(−1.5)⁴、D=(−1.5)⁵。由大到小排列何者正確？</p>",
      options: ["C > A > B > D", "C > A > D > B", "A > C > B > D", "D > B > A > C"],
      answer: 0,
      explanation: "A、C 是正數且 C>A；B、D 是負數，而 B 較接近 0，所以 B>D。因此 C>A>B>D。"
    }
  ]
};
