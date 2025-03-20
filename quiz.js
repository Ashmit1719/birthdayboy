const questions = [
    { question: "If I could take you anywhere, where would it be? 🌍", options: ["Bora Bora", "Maldives", "Santorini", "Pakistan"], correct: "Bora Bora" },
    { question: "What thing about you do I love the most? 😍", options: ["Your laugh", "Your thighs", "Your third toe", "Your eyes"], correct: "Your laugh" },
    { question: "What movie name do I think best describes you? 🎥", options: ["Barbie", "12th Fail", "Sleeping Beauty", "The Joker", "All of the above 🤣"], correct: "All of the above 🤣" },
    { question: "What’s my favorite type of date? ❤️", options: ["Fancy candlelit dinner", "Amusement Park", "Movie night at home", "Long drive"], correct: "Amusement Park" },
    { question: "If I could relive any memory with you, which one would it be? 💭", options: [], correct: "Any" }
];

const container = document.getElementById("quiz-container");

questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<p>${q.question}</p>${q.options.map(option => `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`).join('')}`;
    container.appendChild(questionElement);
});

function submitQuiz() {
    document.getElementById("quiz-congratulations").classList.remove("hidden");
    document.getElementById("video-link").classList.remove("hidden");
}

function goToVideo() {
    window.location.href = "surprise-video.html";
}