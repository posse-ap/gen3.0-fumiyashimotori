"use strict"

{

  const correct_answers = [
    {
      question:日本の,
      answers :["28" , "7" , "0"],
      index:1,
      note: "ke"
    },
    {
      index:2,
      value: 'X-TECH'
    },
    {
      index:0,
      value: 'Internet of Things'
    },
    {
      index:0,
      value: 'Society 5.0'
    },
    {
      index:0,
      value: 'Web3.0'
    },
    {
      index:1,
      value: '約5倍'
    },
  ];
  
  const quiz = document.getElementById('js-quiz');

  const createQuizHtml = (quizItem, questionNumber) => {
    const answersHtml = quizItem.answers.map((answer,
      answerIndex) => 
       `<li class="choice">
        <button class="btn js-answer" data-answer="${answerIndex}" >
        ${answer}<i class="icon-arrow"></i>
        </button>
        </li>`
     ).join(''); 
     
     const noteHtml = quizItem.note ? `<cite 
     class="fref">
       <i class="icon-note"></i>${quizItem.note}
     </cite>` : '';

     return ` <div id="quiz js-quiz" data-quiz="${questionNumber}">
     <div class="question">
       <h2 class="question-box">
         <div class="question-letter-Q">Q${questionNumber + 1}</div>
         <div class="question-text">
         </div>
       </h2>
       <div class="question-img">
         <img src="./assets-ph1-website-main/img/quiz/img-quiz01.png" alt="01" >
       </div>
     </div>
     <div class="answer">
       <div class="answer-letter-A">A</div>
       <ul class="choices">
         <li class="choice"><button class="btn js-answer" data-answer="0" >約28万人<i class="icon-arrow"></i></button></li>
         <li class="choice"><button class="btn js-answer" data-answer="1" >約79万人<i class="icon-arrow"></i></button></li>
         <li class="choice"><button class="btn js-answer" data-answer="2" >約183万人<i class="icon-arrow"></i></button></li>
         
       </ul>
       <div class="answer-correct js-answerBox ">
         <p class="answer-correct-title js-answerTitle"></p>
         <p class="answer-correct-content">
           <span class="labelA">A</span>
           <span class="js-answerText"></span>
         </p>
       </div>
     </div>
     <cite class="fref">
     経済産業省　2019年3月 - IT 人材需要に関する調査
     </cite>

   </div>`

    }

  const allQuiz = document.querySelectorAll('.js-quiz');

  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }
  
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }
  
  allQuiz.forEach(quiz => {
      const answers = quiz.querySelectorAll('.js-answer');
      const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
      const answerBox = quiz.querySelector('.js-answerBox');
      const answerTitle = quiz.querySelector('.js-answerTitle');
      const answerText = quiz.querySelector('.js-answerText');

      answers.forEach(answer => {
        answer.addEventListener('click', () => {
          answer.classList.add('is-selected');
          const selectedAnswer =Number(answer.getAttribute('data-answer'));

          // 全てのボタンを非活性化//
          setDisabled(answers);

          // 正解ならtrue,不正解ならfalseをcheckCorrectに格納
          const isCorrect = correct_answers[selectedQuiz].index === selectedAnswer;

          //解答欄にテキストやクラスめいを追加
          answerText.innerText = correct_answers[selectedQuiz].value;
          setTitle(answerTitle, isCorrect);
          setClassName(answerBox, isCorrect);
        })
    })
   })

   
}
