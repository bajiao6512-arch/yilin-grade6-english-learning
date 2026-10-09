const readingExercises = [
  {
    tag: 'Unit 1',
    title: 'My School Life',
    passage:
      'My name is Tom. I am eleven years old. I go to school by bus every morning. My classroom is big and clean. My teacher is kind and friendly. I like English very much because I can read and write in English. After school, I play football with my friends.',
    questions: [
      {
        question: 'How old is Tom?',
        options: ['Ten', 'Eleven', 'Twelve', 'Nine'],
        answer: 'Eleven',
        explanation: '文中明确写了：I am eleven years old.'
      },
      {
        question: 'How does Tom go to school?',
        options: ['By bike', 'By bus', 'On foot', 'By car'],
        answer: 'By bus',
        explanation: '文中说：I go to school by bus every morning.'
      },
      {
        question: 'What does Tom like?',
        options: ['Math', 'English', 'Music', 'Science'],
        answer: 'English',
        explanation: '文中提到：I like English very much.'
      }
    ]
  },
  {
    tag: 'Unit 2',
    title: 'My Family',
    passage:
      'This is my family. There are four people in my family. My father is a teacher. My mother is a doctor. I have one sister and one brother. We are a happy family and we eat dinner together every evening.',
    questions: [
      {
        question: 'How many people are there in the family?',
        options: ['Two', 'Three', 'Four', 'Five'],
        answer: 'Four',
        explanation: '文中说：There are four people in my family.'
      },
      {
        question: 'What does the father do?',
        options: ['He is a doctor', 'He is a teacher', 'He is a driver', 'He is a farmer'],
        answer: 'He is a teacher',
        explanation: '文中写明：My father is a teacher.'
      },
      {
        question: 'What do they do every evening?',
        options: ['Do homework', 'Play football', 'Eat dinner together', 'Go shopping'],
        answer: 'Eat dinner together',
        explanation: '句子最后说明：We eat dinner together every evening.'
      }
    ]
  },
  {
    tag: 'Unit 3',
    title: 'My Hobbies',
    passage:
      'I like reading books very much. My brother likes playing football, and my sister likes drawing pictures. We all have different hobbies. After school, I read books in the library. It makes me feel relaxed and happy.',
    questions: [
      {
        question: 'What is the writer good at?',
        options: ['Reading books', 'Playing basketball', 'Drawing pictures', 'Swimming'],
        answer: 'Reading books',
        explanation: '文中开头就说：I like reading books very much.'
      },
      {
        question: 'Where does the writer read books after school?',
        options: ['At home', 'In the library', 'At the park', 'In the classroom'],
        answer: 'In the library',
        explanation: '文中提到：After school, I read books in the library.'
      },
      {
        question: 'What does the writer feel after reading?',
        options: ['Tired', 'Relaxed and happy', 'Angry', 'Bored'],
        answer: 'Relaxed and happy',
        explanation: '文中说：It makes me feel relaxed and happy.'
      }
    ]
  }
];

const state = {
  currentIndex: 0,
  answered: false
};

const exerciseTag = document.getElementById('exerciseTag');
const exerciseProgress = document.getElementById('exerciseProgress');
const exerciseTitle = document.getElementById('exerciseTitle');
const exercisePassage = document.getElementById('exercisePassage');
const questionList = document.getElementById('questionList');
const resultBox = document.getElementById('resultBox');
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

function renderExercise() {
  const currentExercise = readingExercises[state.currentIndex];
  exerciseTag.textContent = currentExercise.tag;
  exerciseProgress.textContent = `第 ${state.currentIndex + 1} / ${readingExercises.length} 篇`;
  exerciseTitle.textContent = currentExercise.title;
  exercisePassage.textContent = currentExercise.passage;

  questionList.innerHTML = '';
  resultBox.classList.add('hidden');
  resultBox.classList.remove('success', 'warning');
  state.answered = false;

  currentExercise.questions.forEach((item, questionIndex) => {
    const questionItem = document.createElement('div');
    questionItem.className = 'question-item';

    const questionTitle = document.createElement('h4');
    questionTitle.textContent = `${questionIndex + 1}. ${item.question}`;

    const optionList = document.createElement('div');
    optionList.className = 'option-list';

    item.options.forEach((option) => {
      const label = document.createElement('label');
      label.className = 'option-item';
      label.innerHTML = `
        <input type="radio" name="q-${questionIndex}" value="${option}" />
        <span>${option}</span>
      `;
      optionList.appendChild(label);
    });

    questionItem.appendChild(questionTitle);
    questionItem.appendChild(optionList);
    questionList.appendChild(questionItem);
  });
}

function getUserAnswers() {
  const currentExercise = readingExercises[state.currentIndex];
  const answers = {};

  currentExercise.questions.forEach((_, questionIndex) => {
    const selected = document.querySelector(`input[name="q-${questionIndex}"]:checked`);
    answers[questionIndex] = selected ? selected.value : null;
  });

  return answers;
}

function checkAnswers() {
  const currentExercise = readingExercises[state.currentIndex];
  const userAnswers = getUserAnswers();
  const total = currentExercise.questions.length;
  let correctCount = 0;
  const feedbacks = [];

  currentExercise.questions.forEach((item, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === item.answer;
    if (isCorrect) correctCount += 1;
    feedbacks.push({
      isCorrect,
      userAnswer,
      answer: item.answer,
      explanation: item.explanation
    });
  });

  const scoreText = `你答对了 ${correctCount} / ${total}`;
  resultBox.classList.remove('hidden');
  resultBox.classList.add(correctCount >= Math.ceil(total / 2) ? 'success' : 'warning');

  const detailHtml = feedbacks
    .map((item, index) => {
      const status = item.isCorrect ? '正确' : '错误';
      const userText = item.userAnswer ? item.userAnswer : '未作答';
      return `<p><strong>${index + 1}. ${status}</strong> 你的答案：${userText}，正确答案：${item.answer}。${item.explanation}</p>`;
    })
    .join('');

  resultBox.innerHTML = `<strong>${scoreText}</strong>${detailHtml}`;
  state.answered = true;
}

function nextExercise() {
  state.currentIndex = (state.currentIndex + 1) % readingExercises.length;
  renderExercise();
}

submitBtn.addEventListener('click', () => {
  if (state.answered) {
    nextExercise();
    return;
  }

  checkAnswers();
  submitBtn.textContent = '下一篇';
});

nextExerciseBtn.addEventListener('click', () => {
  nextExercise();
  submitBtn.textContent = '提交答案';
});

resetBtn.addEventListener('click', () => {
  renderExercise();
  submitBtn.textContent = '提交答案';
});

renderExercise();

document.getElementById('year').textContent = new Date().getFullYear();












































































































































































































































































































































































































































