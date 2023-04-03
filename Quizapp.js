// Define an array of ten questions
const questions = [
  'What is the capital of France?',
  'Who painted the Mona Lisa?',
  'What is the highest mountain in the world?',
  'Who directed the movie "Jaws"?',
  'What is the smallest planet in our solar system?',
  'Who is the founder of Microsoft?',
  'What is the most populous country in the world?',
  'What is the largest continent on Earth?',
  'Who wrote the novel "Pride and Prejudice"?',
  'What is the chemical symbol for gold?'
];

// Define an empty array to store the selected questions
const selectedQuestions = [];

// Select five random questions
while (selectedQuestions.length < 5) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  if (!selectedQuestions.includes(questions[randomIndex])) {
    selectedQuestions.push(questions[randomIndex]);
  }
}

// Display the selected questions in a quiz app
const quizApp = document.getElementById('quiz-app');
selectedQuestions.forEach((question, index) => {
  const questionNumber = index + 1;
  const questionElement = document.createElement('div');
  questionElement.innerHTML = `
    <h3>Question ${questionNumber}</h3>
    <p>${question}</p>
  `;
  quizApp.appendChild(questionElement);
});
