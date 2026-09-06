window.TUTOR_ASSIGNMENT = {
  title: "相似三角形作業",
  date: "2026-09-05",
  note: "共 15 題。先找對應角與對應邊，再列比例；完成後按按鈕查看訂正。",
  questions: [
    {
      type: "choice",
      promptHtml: "<p>兩線段 AC、BD 交於 O。已知 OA：OC＝2：3，OB：OD＝2：3。△AOB 與 △COD 的關係為何？</p>",
      options: ["相似，根據 SAS", "相似，根據 SSS", "相似，根據 AA", "不一定相似"],
      answer: 0,
      explanation: "∠AOB 與 ∠COD 是對頂角，且夾角兩邊的比都為 2：3，因此用 SAS 判斷相似。"
    },
    {
      type: "choice",
      promptHtml: "<p>△PQR 的三邊長為 6、8、10；△XYZ 的三邊長為 9、12、15。下列何者正確？</p>",
      options: ["兩三角形不相似", "兩三角形以 AA 相似", "兩三角形以 SSS 相似", "資料不足"],
      answer: 2,
      explanation: "6：9＝8：12＝10：15＝2：3，三組對應邊成比例，所以以 SSS 相似。"
    },
    {
      type: "choice",
      promptHtml: `<p>在 △ABC 中，D、E 分別位於 AB、AC 上。AD＝6、DB＝3、AE＝8、EC＝4。選出正確敘述。</p><svg viewBox="0 0 360 210" role="img" aria-label="三角形 ABC 內有線段 DE"><path d="M180 20 L45 185 L320 185 Z M90 130 L268 130" fill="none" stroke="#173b63" stroke-width="4"/><text x="176" y="17">A</text><text x="28" y="202">B</text><text x="322" y="202">C</text><text x="76" y="127">D</text><text x="273" y="127">E</text><text x="123" y="70">6</text><text x="70" y="165">3</text><text x="231" y="70">8</text><text x="283" y="165">4</text></svg>`,
      options: ["SAS 相似，DE：BC＝2：3", "SAS 相似，DE：BC＝3：2", "SSS 相似，DE：BC＝2：3", "不一定相似"],
      answer: 0,
      explanation: "AD：AB＝6：9＝2：3，AE：AC＝8：12＝2：3，且 ∠A 是共用角，所以以 SAS 相似，DE：BC＝2：3。"
    },
    {
      type: "number",
      promptHtml: "<p>兩直線 AE、BD 交於 C。AC＝6、CE＝9、BC＝8、CD＝12，且 AB＝10。因 AC：CE＝BC：CD，兩三角形可用 SAS 判斷相似。求 DE。</p>",
      answerLabel: "DE",
      answer: 15,
      tolerance: 0,
      explanation: "AC：CE＝BC：CD＝2：3，且夾角為對頂角，所以 AB：DE＝2：3；DE＝10×3÷2＝15。"
    },
    {
      type: "multi_number",
      promptHtml: `<p>梯形 ABCD 中 AB∥CD，對角線 AD、BC 交於 E。AE＝4、ED＝10、BE＝6、AB＝8。求 EC 與 CD。</p><svg viewBox="0 0 360 220" role="img" aria-label="梯形 ABCD 對角線交於 E"><path d="M115 35 L245 35 L320 190 L40 190 Z M115 35 L320 190 M245 35 L40 190" fill="none" stroke="#173b63" stroke-width="4"/><circle cx="180" cy="106" r="5" fill="#087f75"/><text x="98" y="28">A</text><text x="248" y="28">B</text><text x="326" y="205">C</text><text x="22" y="205">D</text><text x="186" y="104">E</text></svg>`,
      parts: [
        { label: "EC", answer: 15 },
        { label: "CD", answer: 20 }
      ],
      explanation: "由平行線可得 △AEB∼△DEC，且 AE：ED＝4：10＝2：5。因此 BE：EC＝2：5，EC＝15；AB：CD＝2：5，CD＝20。"
    },
    {
      type: "number",
      promptHtml: `<p>在 △AQC 中，B 在 AQ 上、P 在 AC 上，且 BP∥QC。AB＝5、BQ＝15、BP＝7，求 QC。</p><svg viewBox="0 0 360 210" role="img" aria-label="三角形 AQC 內有平行線 BP"><path d="M55 30 L310 180 L55 180 Z M119 68 L119 180" fill="none" stroke="#173b63" stroke-width="4"/><text x="35" y="28">A</text><text x="105" y="62">B</text><text x="105" y="202">P</text><text x="315" y="195">C</text><text x="37" y="200">Q</text></svg>`,
      answerLabel: "QC",
      answer: 28,
      tolerance: 0,
      explanation: "AQ＝5＋15＝20，△ABP∼△AQC，放大倍數為 AQ÷AB＝20÷5＝4，所以 QC＝7×4＝28。"
    },
    {
      type: "number",
      promptHtml: "<p>在 △ABC 中，D、E 分別在 AB、AC 上，且 DE∥BC。AD＝6、DB＝9、DE＝8，求 BC。</p>",
      answerLabel: "BC",
      answer: 20,
      tolerance: 0,
      explanation: "AB＝6＋9＝15，DE：BC＝AD：AB＝6：15＝2：5，所以 BC＝8×5÷2＝20。"
    },
    {
      type: "multi_number",
      promptHtml: `<p>直角三角形 ABC 中，∠A＝90°，AE 垂直斜邊 BC。BE＝9、EC＝16。求 AE、AB、AC。</p><svg viewBox="0 0 360 220" role="img" aria-label="直角三角形斜邊高"><path d="M75 35 L55 190 L310 190 Z M75 35 L160 190" fill="none" stroke="#173b63" stroke-width="4"/><path d="M67 52 L84 54 L86 37 M151 190 L151 181 L160 181" fill="none" stroke="#087f75" stroke-width="3"/><text x="62" y="27">A</text><text x="36" y="208">B</text><text x="316" y="208">C</text><text x="155" y="210">E</text><text x="98" y="184">9</text><text x="225" y="184">16</text></svg>`,
      parts: [
        { label: "AE", answer: 12 },
        { label: "AB", answer: 15 },
        { label: "AC", answer: 20 }
      ],
      explanation: "BC＝25。由斜邊高相似關係：AE²＝9×16＝144；AB²＝9×25＝225；AC²＝16×25＝400。"
    },
    {
      type: "number",
      promptHtml: `<p>在 △ABC 中，D 在 AB 上，∠ACD＝∠ABC。已知 AD＝4、AC＝10，求 BD。</p><svg viewBox="0 0 360 220" role="img" aria-label="三角形 ABC 內有線段 CD"><path d="M175 25 L45 190 L315 190 Z M115 101 L315 190" fill="none" stroke="#173b63" stroke-width="4"/><text x="174" y="18">A</text><text x="28" y="208">B</text><text x="320" y="208">C</text><text x="98" y="100">D</text><text x="137" y="65">4</text><text x="242" y="95">10</text></svg>`,
      answerLabel: "BD",
      answer: 21,
      tolerance: 0,
      explanation: "由 AA 得 △ACD∼△ABC，所以 AD：AC＝AC：AB，即 4：10＝10：AB，得 AB＝25；BD＝25－4＝21。"
    },
    {
      type: "number",
      promptHtml: "<p>用地面上的小鏡子測樹高。眼睛離地 1.6 公尺，人到鏡面的距離是 2.5 公尺，鏡面到樹的距離是 12.5 公尺。假設視線形成的兩個直角三角形相似，樹高是多少公尺？</p>",
      answerLabel: "樹高（公尺）",
      answer: 8,
      tolerance: 0,
      explanation: "樹高：1.6＝12.5：2.5＝5：1，所以樹高＝1.6×5＝8 公尺。"
    },
    {
      type: "number",
      promptHtml: "<p>地面上的點光源照向一位身高 1.8 公尺的人，人在牆上的影子高 5.4 公尺。人到牆的距離是 8 公尺。光源、人的腳與牆腳在同一直線上，求光源到人的距離。</p>",
      answerLabel: "距離（公尺）",
      answer: 4,
      tolerance: 0,
      explanation: "高度放大 5.4÷1.8＝3 倍，所以光源到牆是光源到人的 3 倍。設光源到人為 x，x＋8＝3x，得 x＝4。"
    },
    {
      type: "number",
      promptHtml: "<p>同一時刻，一根 12 公尺高的旗竿影長 8 公尺。附近一支 3 公尺高的路牌影長是多少公尺？</p>",
      answerLabel: "影長（公尺）",
      answer: 2,
      tolerance: 0,
      explanation: "同一時刻高度與影長成比例：12：8＝3：x，所以 x＝2 公尺。"
    },
    {
      type: "multi_number",
      promptHtml: "<p>升旗時，甲、乙、丙、丁四位學生依序等距站成一直線，四人的頭頂也恰好共線。甲身高 182 公分，乙身高 176 公分。求丙、丁的身高。</p>",
      parts: [
        { label: "丙（公分）", answer: 170 },
        { label: "丁（公分）", answer: 164 }
      ],
      explanation: "位置等距且頭頂共線，所以身高是等差數列。182 到 176 每次減 6，之後依序為 170、164。"
    },
    {
      type: "multi_number",
      promptHtml: `<p>D、F 將 AB 三等分，E、G 將 AC 三等分，且 DE∥FG∥BC。若 △ABC 面積為 144，求 △ADE 與 △AFG 的面積。</p><svg viewBox="0 0 360 230" role="img" aria-label="兩邊三等分的三角形與兩條平行線"><path d="M180 20 L45 205 L315 205 Z M135 82 L225 82 M90 144 L270 144" fill="none" stroke="#173b63" stroke-width="4"/><text x="176" y="17">A</text><text x="29" y="222">B</text><text x="319" y="222">C</text><text x="120" y="80">D</text><text x="229" y="80">E</text><text x="75" y="143">F</text><text x="274" y="143">G</text></svg>`,
      parts: [
        { label: "△ADE 面積", answer: 16 },
        { label: "△AFG 面積", answer: 64 }
      ],
      explanation: "線性比為 1：2：3，面積比為 1：4：9。144÷9＝16，所以兩個面積分別為 16 與 64。"
    },
    {
      type: "multi_number",
      promptHtml: `<p>D、F 在 AB 上，E、G 在 AC 上，DE∥FG∥BC，且 AD：DF：FB＝1：2：3。若 △ABC 面積為 360，求 △ADE、梯形 DFGE、梯形 FBCG 的面積。</p><svg viewBox="0 0 360 230" role="img" aria-label="分段比例一比二比三的三角形與兩條平行線"><path d="M180 20 L45 205 L315 205 Z M157 51 L203 51 M112 113 L248 113" fill="none" stroke="#173b63" stroke-width="4"/><text x="176" y="17">A</text><text x="29" y="222">B</text><text x="319" y="222">C</text><text x="143" y="50">D</text><text x="207" y="50">E</text><text x="97" y="112">F</text><text x="253" y="112">G</text></svg>`,
      parts: [
        { label: "△ADE", answer: 10 },
        { label: "梯形 DFGE", answer: 80 },
        { label: "梯形 FBCG", answer: 270 }
      ],
      explanation: "累積線性比為 1：3：6，面積比為 1：9：36。每份是 360÷36＝10；梯形面積用相鄰三角形面積相減，得到 80、270。"
    }
  ]
};
