const quizData = [
  {
    id: "1",
    question: "Nguồn gốc của chiến tranh do nguyên nhân nào?",
    a: "Sự bùng nổ dân số",
    b: "Chế độ tư hữu về tư liệu sản xuất và đối kháng giai cấp",
    c: "Bản năng sinh vật của con người",
    d: "Do định mệnh của loài người",
    correct: "b",
  },
  {
    id: "2",
    question: "Tìm câu trả lời sai. Tính chất của các cuộc chiến tranh?",
    a: "Chính nghĩa và phi nghĩa",
    b: "Hạt nhân và thông thường",
    c: "Cách mạng và phản cách mạng",
    d: "Tiến bộ và phản tiến bộ",
    correct: "b",
  },
  {
    id: "3",
    question: "Bản chất giai cấp của quân đội?",
    a: "Lực lượng chung của cả xã hội",
    b: "Là lực lượng siêu giai cấp",
    c: "Là bản chất của giai cấp sản sinh và nuôi dưỡng nó",
    d: "Lực lượng chung của cả xã hội",
    correct: "c",
  },
  {
    id: "4",
    question: "Nguyên tắc xây dựng quân đội kiểu mới của V.I.Lênin?",
    a: "Sự lãnh đạo của Đảng Cộng sản và quan điểm giai cấp công nhân trong xây dựng quân đội",
    b: "Xây dựng quân đội chính quy",
    c: "Trung thành với chủ nghĩa quốc tế vô sản",
    d: "Xây dựng quân đội để phục vụ toàn cầu hóa",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const num_questions = document.getElementById("progress");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  num_questions.innerText = "Câu " + currentQuizData.id;
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = "A. " + currentQuizData.a;
  b_text.innerText = "B. " + currentQuizData.b;
  c_text.innerText = "C. " + currentQuizData.c;
  d_text.innerText = "D. " + currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  document.getElementById("right-answer").innerHTML = `${quizData[
    currentQuiz
  ].correct.toUpperCase()} là đáp án đúng nhất`;
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `  
      <h2>Bạn trả lời đúng ${score}/${quizData.length}</h2>
      <div class="button">  
      <button id="reset" onclick="history.go(0)">Làm lại</button>  
      </div>
      `;
    }
  }
});

// CountDown
let time = 60;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `Còn lại: ${min} : ${sec}`;
    }
  }, 1000);
}

startCountdown();
