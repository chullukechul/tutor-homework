window.TUTOR_ASSIGNMENT = {
  title: "9 月 23 日數學作業",
  date: "2026-09-23",
  note: "共 15 題。請先在紙上整理算式，再輸入答案。",
  questions: [
    {
      type: "number",
      promptHtml: "解方程式：<strong>(x − 468) ÷ 156 = 5</strong>。求 x。",
      answer: 1248,
      explanation: "先乘回 156：x − 468 = 780，再加 468，x = 1248。"
    },
    {
      type: "number",
      promptHtml: "使用分配律計算：<strong>64 × 37 + 64 × 63</strong>。",
      answer: 6400,
      explanation: "提出共同因數 64：64 × (37 + 63) = 64 × 100 = 6400。"
    },
    {
      type: "number",
      promptHtml: "六面骰中，紅色點數得分為點數的 5 倍，黑色點數得分為點數的 −3 倍。擲出紅 6、黑 4、紅 1，總得分是多少？",
      answer: 23,
      explanation: "6 × 5 + 4 × (−3) + 1 × 5 = 30 − 12 + 5 = 23。"
    },
    {
      type: "number",
      promptHtml: "海平面水的沸點為 100°C；海拔每上升 100 公尺，沸點約下降 0.3°C。海拔 1200 公尺時，沸點約為多少°C？",
      answer: 96.4,
      tolerance: 0.001,
      explanation: "1200 ÷ 100 = 12，下降 12 × 0.3 = 3.6°C，所以是 96.4°C。"
    },
    {
      type: "number",
      promptHtml: "整數 n 滿足 <strong>4 &lt; n &lt; 12</strong>，共有多少個可能值？",
      answer: 7,
      explanation: "可能值為 5、6、7、8、9、10、11，共 7 個。"
    },
    {
      type: "number",
      promptHtml: "計算：<strong>85 − (−34) + (−71) − 58</strong>。",
      answer: -10,
      explanation: "85 + 34 − 71 − 58 = 119 − 129 = −10。"
    },
    {
      type: "text",
      promptHtml: "已知 <strong>甲−5 = 乙+2 = 丙−4 = 丁−7</strong>，比較甲、乙、丙、丁的大小。請用「&lt;」連接。",
      answerLabel: "由小到大",
      answer: ["乙<丙<甲<丁", "乙＜丙＜甲＜丁", "乙 < 丙 < 甲 < 丁", "乙 ＜ 丙 ＜ 甲 ＜ 丁"],
      explanation: "可令共同值為 0，得到甲=5、乙=−2、丙=4、丁=7，所以乙＜丙＜甲＜丁。"
    },
    {
      type: "number",
      promptHtml: "數 a 在數線上位於 −2 與 −1 之間，計算 <strong>|a|/a + |a−1|/(a−1)</strong>。",
      answer: -2,
      explanation: "a 與 a−1 都是負數，因此兩個分式都等於 −1，合計 −2。"
    },
    {
      type: "number",
      promptHtml: "使用提公因數計算：<strong>(−48) × 37 − 52 × 37</strong>。",
      answer: -3700,
      explanation: "提出 37：37 × (−48 − 52) = 37 × (−100) = −3700。"
    },
    {
      type: "number",
      promptHtml: "若 <strong>208 × (−30) = (200 + 甲) × (−30) = 乙</strong>，求乙 ÷ 甲。",
      answer: -780,
      explanation: "甲=8，乙=208×(−30)=−6240，所以乙÷甲=−780。"
    },
    {
      type: "number",
      promptHtml: "3 人 10 天共吃 30 公斤米；食量相同，5 人吃同樣 30 公斤米可吃幾天？",
      answer: 6,
      explanation: "總量相當於 3×10=30 人天，改成 5 人可吃 30÷5=6 天。"
    },
    {
      type: "number",
      promptHtml: "數字塔頂層依序為 2、3、4；下一層每格為相鄰兩格的乘積，最下層再取上一層兩格的乘積。最下層是多少？",
      answer: 72,
      explanation: "第二層是 2×3=6 與 3×4=12，最下層是 6×12=72。"
    },
    {
      type: "number",
      promptHtml: "定義 <strong>a ⊙ b = a ÷ b + a × b</strong>，計算 <strong>[(−12) ⊙ 3] ⊙ (−2)</strong>。",
      answer: 100,
      explanation: "先得 (−12)⊙3=−4−36=−40；再算 (−40)⊙(−2)=20+80=100。"
    },
    {
      type: "choice",
      promptHtml: "下列關於科學記號 <strong>a × 10<sup>n</sup></strong> 的敘述，何者正確？",
      options: [
        "a 可以等於 12",
        "n 一定是正整數",
        "a 的絕對值須大於等於 1 且小於 10",
        "4.6 × 10⁻³ 是四位數"
      ],
      answer: 2,
      explanation: "科學記號的係數須滿足 1 ≤ |a| < 10，因此正確答案是 C。"
    },
    {
      type: "number",
      promptHtml: "將 <strong>2<sup>4</sup> × 5<sup>3</sup></strong> 寫成 a × 10<sup>n</sup> 的科學記號，求 a+n。",
      answer: 5,
      explanation: "2⁴×5³=2×(2³×5³)=2×10³，所以 a+n=2+3=5。"
    }
  ]
};
