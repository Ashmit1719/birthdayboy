const clues = [
    { id: 1, riddle: "Where we first met, a place of learning and dread?", answer: "school" },
    { id: 2, riddle: "A magical meal we shared, flavors rich and rare?", answer: "tanjore tiffin" },
    { id: 3, riddle: "The place where we laughed, the ocean in sight?", answer: "goa night" }
];

const foundClues = {};
const container = document.getElementById("clue-container");

clues.forEach(({ id, riddle }) => {
    const clueElement = document.createElement("div");
    clueElement.innerHTML = `<p>${riddle}</p><input type="text" id="answer-${id}" placeholder="Type your answer"> <button onclick="checkAnswer(${id})">Submit</button>`;
    container.appendChild(clueElement);
});

function checkAnswer(id) {
    const userAnswer = document.getElementById(`answer-${id}`).value.toLowerCase();
    if (userAnswer === clues.find(clue => clue.id === id).answer) {
        foundClues[id] = true;
        document.getElementById(`answer-${id}`).style.backgroundColor = "lightgreen";
    }
    if (Object.keys(foundClues).length === clues.length) {
        document.getElementById("congratulations-message").classList.remove("hidden");
        document.getElementById("quiz-link").classList.remove("hidden");
    }
}

function goToQuiz() {
    window.location.href = "pop-quiz.html";
}