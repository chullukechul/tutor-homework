window.TUTOR_ASSIGNMENT = {
  title: "幾何與相似綜合練習",
  date: "2026-09-12",
  note: "共 20 題。先在圖上標出已知條件，再決定要用相似、特殊角或面積關係。完成後按按鈕查看訂正。",
  questions: [
    {
      type: "choice",
      promptHtml: `<p>梯形 ABCD 中，AD∥BC，兩條對角線交於 O。關於上、下兩個三角形 △AOD、△BOC，以及靠近兩腰的 △AOB、△DOC，下列何者一定正確？</p><svg viewBox="0 0 420 245" role="img" aria-label="梯形 ABCD 的兩條對角線交於 O"><path d="M135 35 L285 35 L365 210 L55 210 Z M135 35 L365 210 M285 35 L55 210" fill="none" stroke="#173b63" stroke-width="4"/><circle cx="210" cy="112" r="5" fill="#087f75"/><text x="118" y="28">A</text><text x="289" y="28">D</text><text x="370" y="225">C</text><text x="37" y="225">B</text><text x="218" y="109">O</text></svg>`,
      options: [
        "△AOD 與 △BOC 相似；△AOB 與 △DOC 面積相等，但不一定相似",
        "四個小三角形一定都相似",
        "△AOB 與 △DOC 一定相似，但面積不一定相等",
        "只有 △AOD 與 △BOC 面積相等，沒有任何相似關係"
      ],
      answer: 0,
      explanation: "AD∥BC 使上、下兩個三角形有兩組對應角相等，因此相似；靠兩腰的兩塊可證明面積相等，但形狀不一定相似。"
    },
    {
      type: "choice",
      promptHtml: `<p>直角三角形 ABC 中，∠A＝90°，由 A 向斜邊 BC 作高 AD。下列關係何者正確？</p><svg viewBox="0 0 420 245" role="img" aria-label="直角三角形向斜邊作高"><path d="M110 40 L55 210 L360 210 Z M110 40 L185 210" fill="none" stroke="#173b63" stroke-width="4"/><path d="M102 57 L119 60 L122 43 M176 210 L176 201 L185 201" fill="none" stroke="#087f75" stroke-width="3"/><text x="96" y="31">A</text><text x="37" y="227">B</text><text x="365" y="227">C</text><text x="180" y="230">D</text></svg>`,
      options: [
        "△ABC、△ABD、△ACD 彼此相似，可用 AA 判別",
        "只有 △ABD 與 △ACD 相似，大三角形不相似",
        "三個三角形面積相等，所以相似",
        "必須知道三邊長才能判斷"
      ],
      answer: 0,
      explanation: "三個三角形都有對應直角，且各自再共享或對應一個銳角，因此用 AA 可判斷三者彼此相似。"
    },
    {
      type: "choice",
      promptHtml: "<p>一個正三角形的邊長為 18 公分。它的高是多少公分？</p>",
      options: ["6√3", "9√3", "12√3", "18√3"],
      answer: 1,
      explanation: "正三角形高＝邊長×√3÷2，所以 18×√3÷2＝9√3。"
    },
    {
      type: "choice",
      promptHtml: `<p>平行四邊形 ABCD 中，AE 是 ∠BAD 的角平分線，E 在 BC 上。已知 ∠D＝60°、AD＝12、EC＝5，求 △ABE 的面積。</p><svg viewBox="0 0 430 250" role="img" aria-label="平行四邊形中角平分線 AE 交 BC 於 E"><path d="M130 45 L335 45 L285 210 L80 210 Z M130 45 L220 210" fill="none" stroke="#173b63" stroke-width="4"/><path d="M318 47 Q330 62 329 77" fill="none" stroke="#087f75" stroke-width="3"/><text x="113" y="36">A</text><text x="340" y="40">D</text><text x="288" y="229">C</text><text x="62" y="229">B</text><text x="215" y="231">E</text><text x="227" y="201">5</text><text x="222" y="35">12</text><text x="310" y="87">60°</text></svg>`,
      options: ["21√3／4", "49√3／4", "49√3／2", "49√3"],
      answer: 1,
      explanation: "BC＝12，所以 BE＝7。由角平分線與平行線可得 AB＝BE，且三個角都是 60°，所以 △ABE 是邊長 7 的正三角形，面積為 49√3／4。"
    },
    {
      type: "number",
      promptHtml: "<p>一個等腰三角形的兩腰皆為 12，頂角為 30°。求此三角形面積。</p>",
      answerLabel: "面積",
      answer: 36,
      tolerance: 0,
      explanation: "面積＝1／2×12×12×sin30°＝72×1／2＝36。"
    },
    {
      type: "choice",
      promptHtml: `<p>如下圖，B、D、C 在同一直線上，∠B＝30°、∠D＝60°、AC⊥BC，且 BD＝10。求 AC。</p><svg viewBox="0 0 440 245" role="img" aria-label="三十度與六十度直角三角形組合"><path d="M55 210 L210 210 L360 210 L360 45 Z M55 210 L360 45 M210 210 L360 45" fill="none" stroke="#173b63" stroke-width="4"/><path d="M345 210 L345 195 L360 195" fill="none" stroke="#087f75" stroke-width="3"/><text x="42" y="230">B</text><text x="202" y="230">D</text><text x="365" y="230">C</text><text x="365" y="42">A</text><text x="88" y="203">30°</text><text x="221" y="201">60°</text><text x="119" y="229">10</text></svg>`,
      options: ["5", "5√3", "10√3", "15"],
      answer: 1,
      explanation: "設 AC＝h。由 30° 三角形得 BC＝√3h；由 60° 三角形得 DC＝h／√3，所以 BD＝√3h－h／√3＝2h／√3＝10，故 h＝5√3。"
    },
    {
      type: "choice",
      promptHtml: `<p>如下圖，B、D、C 在同一直線上，∠B＝30°、∠D＝45°、AC⊥BC，且 BD＝4。求 AC。</p><svg viewBox="0 0 440 245" role="img" aria-label="三十度與四十五度直角三角形組合"><path d="M55 210 L220 210 L365 210 L365 55 Z M55 210 L365 55 M220 210 L365 55" fill="none" stroke="#173b63" stroke-width="4"/><path d="M350 210 L350 195 L365 195" fill="none" stroke="#087f75" stroke-width="3"/><text x="42" y="230">B</text><text x="212" y="230">D</text><text x="370" y="230">C</text><text x="370" y="52">A</text><text x="90" y="203">30°</text><text x="233" y="201">45°</text><text x="130" y="229">4</text></svg>`,
      options: ["1＋√3", "2＋√3", "2＋2√3", "4√3"],
      answer: 2,
      explanation: "設 AC＝h，則 30° 三角形給 BC＝√3h，45° 三角形給 DC＝h。因此 BD＝(√3－1)h＝4，整理得 h＝2＋2√3。"
    },
    {
      type: "number",
      promptHtml: `<p>矩形 ABCD 的兩條對角線交於 O。已知 ∠AOD＝150°，對角線 BD＝12√2。求矩形面積。</p><svg viewBox="0 0 430 245" role="img" aria-label="矩形兩條對角線夾角一百五十度"><rect x="65" y="45" width="300" height="155" fill="none" stroke="#173b63" stroke-width="4"/><path d="M65 45 L365 200 M365 45 L65 200" fill="none" stroke="#173b63" stroke-width="4"/><circle cx="215" cy="122.5" r="5" fill="#087f75"/><text x="48" y="39">A</text><text x="371" y="39">D</text><text x="371" y="220">C</text><text x="48" y="220">B</text><text x="222" y="117">O</text><text x="224" y="93">150°</text></svg>`,
      answerLabel: "面積",
      answer: 72,
      tolerance: 0,
      explanation: "矩形面積＝1／2×對角線²×兩對角線夾角的正弦值＝1／2×(12√2)²×sin150°＝72。"
    },
    {
      type: "number",
      promptHtml: `<p>以 A 為起點，向北 8 公里到達道路上的 P 點；另由 A 向西 6 公里，再向北 12 公里到達同一道路上的 Q 點。道路是一直線。若由 A 向東 x 公里也會到達道路，求 x。</p><svg viewBox="0 0 440 250" role="img" aria-label="道路通過 P Q 並延伸到 A 東側"><path d="M115 45 L385 225" stroke="#173b63" stroke-width="4"/><path d="M205 225 L205 105 M205 225 L115 225 L115 45 M205 225 L385 225" fill="none" stroke="#087f75" stroke-width="4"/><text x="194" y="244">A</text><text x="210" y="101">P</text><text x="100" y="40">Q</text><text x="390" y="244">R</text><text x="214" y="173">8</text><text x="151" y="244">6</text><text x="94" y="145">12</text><text x="286" y="244">x</text></svg>`,
      answerLabel: "x（公里）",
      answer: 12,
      tolerance: 0,
      explanation: "道路的兩段直角三角形相似。高度差 12－8＝4 對應水平 6；高度 8 對應 x，所以 8：x＝4：6，得 x＝12。"
    },
    {
      type: "number",
      promptHtml: "<p>從 A 向東走 x 公里，再向南走 6 公里到 B；接著由 B 向西走 20 公里，再向北走 15 公里到 C。若 A、B、C 恰在同一直線上，求 x。</p>",
      answerLabel: "x（公里）",
      answer: 8,
      tolerance: 0,
      explanation: "把路徑畫成兩個相似直角三角形，可得 6：x＝15：20，所以 15x＝120，x＝8。"
    },
    {
      type: "choice",
      promptHtml: `<p>B、F、D 在同一直線上，BF＝72 公尺、FD＝48 公尺。F 處立一根垂直竹竿 EF。從 B 經 E 看見右側山壁頂 C；從 D 經 E 看見左側山壁頂 A。若兩山壁皆垂直地面，求左山壁 AB 與右山壁 CD 的高度比。</p><svg viewBox="0 0 460 260" role="img" aria-label="竹竿瞄準左右兩山壁"><path d="M45 225 L45 45 M415 225 L415 80 M265 225 L265 145 M45 225 L415 80 M415 225 L45 45" fill="none" stroke="#173b63" stroke-width="4"/><text x="28" y="242">B</text><text x="423" y="242">D</text><text x="254" y="243">F</text><text x="270" y="142">E</text><text x="28" y="39">A</text><text x="421" y="77">C</text><text x="145" y="243">72</text><text x="328" y="243">48</text></svg>`,
      options: ["2：3", "3：2", "5：3", "5：2"],
      answer: 1,
      explanation: "BD＝120。AB：EF＝120：48＝5：2；CD：EF＝120：72＝5：3。因此 AB：CD＝(5／2)：(5／3)＝3：2。"
    },
    {
      type: "number",
      promptHtml: `<p>三根支柱都垂直地面，頂端落在同一直斜線上。第一根高 4 公尺；向右 5 公尺的第二根高 7 公尺；第三根在第一根右方 15 公尺。求第三根高度。</p><svg viewBox="0 0 440 260" role="img" aria-label="三根垂直支柱頂端共線；第二根距第一根五公尺，第三根距第一根十五公尺"><path d="M55 210 L420 210 M75 210 L75 155 M185 210 L185 120 M405 210 L405 50 M75 155 L405 50" fill="none" stroke="#173b63" stroke-width="4"/><path d="M75 218 L75 232 M185 218 L185 232 M405 218 L405 252 M75 226 L185 226 M75 246 L405 246" fill="none" stroke="#087f75" stroke-width="2"/><text x="46" y="185">4</text><text x="156" y="159">7</text><text x="411" y="135">?</text><text x="124" y="223">5</text><text x="226" y="243">15</text></svg>`,
      answerLabel: "高度（公尺）",
      answer: 13,
      tolerance: 0,
      explanation: "每水平 5 公尺高度增加 3 公尺。15 公尺是 3 倍，所以高度增加 9 公尺；第三根高 4＋9＝13 公尺。"
    },
    {
      type: "choice",
      promptHtml: "<p>同一個三角形，以三邊 a、b、c 分別為底時，對應的高之比為 3：1：2。求 a：b：c。</p>",
      options: ["3：1：2", "1：3：2", "2：6：3", "6：2：3"],
      answer: 2,
      explanation: "同一三角形面積固定，底與對應高成反比。1／3：1：1／2，同乘 6 得 2：6：3。"
    },
    {
      type: "number",
      promptHtml: `<p>兩直線 ACD、BCE 交於 C，且 AB∥DE。已知 AC＝8、CD＝12、BC＝10，求 CE。</p><svg viewBox="0 0 450 245" role="img" aria-label="蝴蝶形相似三角形"><path d="M65 55 L225 125 L390 197 M65 195 L225 125 L390 53 M65 55 L65 195 M390 53 L390 197" fill="none" stroke="#173b63" stroke-width="4"/><text x="45" y="49">A</text><text x="45" y="216">B</text><text x="220" y="119">C</text><text x="396" y="216">D</text><text x="396" y="49">E</text><text x="130" y="83">8</text><text x="305" y="174">12</text><text x="132" y="178">10</text><text x="305" y="86">?</text></svg>`,
      answerLabel: "CE",
      answer: 15,
      tolerance: 0,
      explanation: "由 AB∥DE 與對頂角可得 △ABC∼△DCE。AC：CD＝BC：CE＝8：12＝2：3，所以 CE＝15。"
    },
    {
      type: "number",
      promptHtml: `<p>在 △ABC 中，D 在 AB 上，且 ∠ACD＝∠ABC。已知 AD＝9、AC＝15，求 BD。</p><svg viewBox="0 0 420 245" role="img" aria-label="三角形內線段 CD 形成相似三角形"><path d="M190 35 L55 210 L365 210 Z M115 132 L365 210" fill="none" stroke="#173b63" stroke-width="4"/><text x="185" y="27">A</text><text x="37" y="228">B</text><text x="370" y="228">C</text><text x="99" y="132">D</text><text x="137" y="83">9</text><text x="276" y="114">15</text></svg>`,
      answerLabel: "BD",
      answer: 16,
      tolerance: 0,
      explanation: "由 AA 得 △ACD∼△ABC，因此 AD：AC＝AC：AB。9：15＝15：AB，得 AB＝25；BD＝25－9＝16。"
    },
    {
      type: "number",
      promptHtml: "<p>小安用地面上的小鏡子測建築物高度。她的眼睛離地 1.5 公尺，人到鏡面的水平距離為 3 公尺，鏡面到建築物的水平距離為 18 公尺。假設視線形成的兩個直角三角形相似，建築物高多少公尺？</p>",
      answerLabel: "高度（公尺）",
      answer: 9,
      tolerance: 0,
      explanation: "高度比等於水平距離比：H：1.5＝18：3＝6：1，所以 H＝9 公尺。"
    },
    {
      type: "choice",
      promptHtml: "<p>某正三角形的面積為 16√3 平方公分。它的邊長與高分別是多少？</p>",
      options: ["邊長 4，高 2√3", "邊長 8，高 4√3", "邊長 8，高 8√3", "邊長 16，高 8√3"],
      answer: 1,
      explanation: "由面積＝√3a²／4＝16√3，得 a²＝64、a＝8；高為 8×√3÷2＝4√3。"
    },
    {
      type: "choice",
      promptHtml: "<p>某正三角形的高為 6√3 公分。它的邊長與面積分別是多少？</p>",
      options: ["邊長 6，面積 9√3", "邊長 9，面積 81√3／4", "邊長 12，面積 36√3", "邊長 18，面積 81√3"],
      answer: 2,
      explanation: "邊長＝6√3×2÷√3＝12；面積＝√3×12²÷4＝36√3。"
    },
    {
      type: "number",
      promptHtml: "<p>一個平行四邊形的兩鄰邊長為 10、14，夾角為 30°。求平行四邊形面積。</p>",
      answerLabel: "面積",
      answer: 70,
      tolerance: 0,
      explanation: "以 14 為底，高＝10×sin30°＝5，所以面積＝14×5＝70。"
    },
    {
      type: "choice",
      promptHtml: "<p>一個三角形的兩邊長為 10、18，兩邊夾角為 60°。求三角形面積。</p>",
      options: ["45", "45√3", "90", "90√3"],
      answer: 1,
      explanation: "面積＝1／2×10×18×sin60°＝90×√3／2＝45√3。"
    }
  ]
};
