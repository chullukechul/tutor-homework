(function () {
  'use strict';

  const assignment = window.TUTOR_ASSIGNMENT;
  const root = document.getElementById('quiz-root');

  if (!assignment || !root) {
    document.body.textContent = '作業資料載入失敗，請聯絡老師。';
    return;
  }

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  function questionInput(question, index) {
    const name = `question-${index}`;
    if (question.type === 'choice') {
      return `<div class="choices">${question.options.map((option, optionIndex) => `
        <label class="choice">
          <input type="radio" name="${name}" value="${optionIndex}">
          <span>${escapeHtml(option)}</span>
        </label>`).join('')}</div>`;
    }

    if (question.type === 'number' || question.type === 'text') {
      const inputMode = question.type === 'number' ? 'decimal' : 'text';
      return `<div class="answer-row">
        <label for="${name}">${escapeHtml(question.answerLabel || '答案')}</label>
        <input id="${name}" name="${name}" inputmode="${inputMode}" autocomplete="off">
      </div>`;
    }

    if (question.type === 'multi_number') {
      return question.parts.map((part, partIndex) => `<div class="answer-row">
        <label for="${name}-${partIndex}">${escapeHtml(part.label || `第 ${partIndex + 1} 格`)}</label>
        <input id="${name}-${partIndex}" name="${name}-${partIndex}" inputmode="decimal" autocomplete="off">
      </div>`).join('');
    }

    if (question.type === 'notebook') {
      return `<div class="notebook-task">${escapeHtml(question.instruction || '請將完整過程寫在筆記本。')}</div>`;
    }

    return '<div class="notebook-task">本題請寫在筆記本。</div>';
  }

  root.innerHTML = `
    <main class="quiz-shell">
      <header class="quiz-header">
        <p class="quiz-kicker">線上作業</p>
        <h1>${escapeHtml(assignment.title)}</h1>
        ${assignment.note ? `<p class="quiz-note">${escapeHtml(assignment.note)}</p>` : ''}
        <div class="quiz-meta">
          <span>共 ${assignment.questions.length} 題</span>
          ${assignment.date ? `<span>${escapeHtml(assignment.date)}</span>` : ''}
        </div>
      </header>
      <form id="quiz-form" novalidate>
        <section class="question-list">
          ${assignment.questions.map((question, index) => `
            <article class="question-card" data-index="${index}">
              <h2>第 ${index + 1} 題</h2>
              <div class="prompt">${question.promptHtml}</div>
              ${questionInput(question, index)}
              <div class="feedback" aria-live="polite"></div>
            </article>`).join('')}
        </section>
        <div id="result" class="result" tabindex="-1"></div>
        <div class="actions"><button class="submit-button" type="submit">完成並查看結果</button></div>
      </form>
    </main>`;

  function normalizedNumber(value) {
    const cleaned = String(value).trim().replaceAll(',', '').replaceAll('−', '-').replaceAll('×10^', 'e');
    const number = Number(cleaned);
    return Number.isFinite(number) ? number : null;
  }

  function checkQuestion(question, index, form) {
    if (question.type === 'notebook') return { review: true };

    if (question.type === 'choice') {
      const selected = form.querySelector(`input[name="question-${index}"]:checked`);
      return { correct: Boolean(selected) && Number(selected.value) === Number(question.answer) };
    }

    if (question.type === 'number') {
      const input = form.querySelector(`[name="question-${index}"]`);
      const actual = normalizedNumber(input.value);
      const expected = normalizedNumber(question.answer);
      const tolerance = Number(question.tolerance || 0);
      return { correct: actual !== null && expected !== null && Math.abs(actual - expected) <= tolerance };
    }

    if (question.type === 'text') {
      const input = form.querySelector(`[name="question-${index}"]`);
      const answers = (Array.isArray(question.answer) ? question.answer : [question.answer]).map((value) => String(value).trim().toLowerCase());
      return { correct: answers.includes(input.value.trim().toLowerCase()) };
    }

    if (question.type === 'multi_number') {
      const correct = question.parts.every((part, partIndex) => {
        const input = form.querySelector(`[name="question-${index}-${partIndex}"]`);
        const actual = normalizedNumber(input.value);
        const expected = normalizedNumber(part.answer);
        const tolerance = Number(part.tolerance || 0);
        return actual !== null && expected !== null && Math.abs(actual - expected) <= tolerance;
      });
      return { correct };
    }

    return { review: true };
  }

  const form = document.getElementById('quiz-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let correct = 0;
    let graded = 0;
    let review = 0;

    assignment.questions.forEach((question, index) => {
      const card = form.querySelector(`[data-index="${index}"]`);
      const feedback = card.querySelector('.feedback');
      const result = checkQuestion(question, index, form);

      if (result.review) {
        review += 1;
        feedback.className = 'feedback review';
        feedback.textContent = question.explanation || '本題請依照指示完成，之後交給老師檢查。';
        return;
      }

      graded += 1;
      if (result.correct) {
        correct += 1;
        feedback.className = 'feedback correct';
        feedback.textContent = question.correctMessage || '答對了。';
      }
      else {
        feedback.className = 'feedback wrong';
        feedback.innerHTML = `<strong>再檢查看看。</strong>${question.explanation ? ` ${escapeHtml(question.explanation)}` : ''}`;
      }
    });

    const resultBox = document.getElementById('result');
    resultBox.classList.add('visible');
    resultBox.innerHTML = graded
      ? `<strong>${correct} / ${graded}</strong><br>這是可自動批改題目的結果。${review ? `另外有 ${review} 題需要寫在筆記本。` : ''}`
      : `共有 ${review} 題需要依照指示寫在筆記本。`;
    resultBox.focus();
    window.scrollTo({ top: resultBox.offsetTop - 18, behavior: 'smooth' });
  });
})();
