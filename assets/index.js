const texts = {
  easy: [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
  ],
  medium: [
    "In the middle of difficulty lies opportunity.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is what happens when you're busy making other plans.",
  ],
  hard: [
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
  ],
};

function updateSampleText() {
  const difficulty = document.getElementById("difficulty").value;
  const sampleTextDiv = document.getElementById("sample-text");
  const randomText =
    texts[difficulty][Math.floor(Math.random() * texts[difficulty].length)];
  sampleTextDiv.textContent = randomText;
}

// Initialize with a default text
document.addEventListener("DOMContentLoaded", () => {
  const difficultySelect = document.getElementById("difficulty");
  difficultySelect.addEventListener("change", updateSampleText);
  updateSampleText();
});

let startTime, endTime;

function startTest() {
  startTime = new Date();
  document.getElementById("start-btn").disabled = true;
  document.getElementById("stop-btn").disabled = false;
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").focus();
}

function stopTest() {
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000; // time in seconds
  document.getElementById("time").textContent = timeTaken.toFixed(2);
  document.getElementById("start-btn").disabled = true;
  document.getElementById("stop-btn").disabled = true;
}

function retryTest() {
  document.getElementById("time").textContent = "0.00";
  document.getElementById("start-btn").disabled = false;
  document.getElementById("stop-btn").disabled = true;
  document.getElementById("retry-btn").disabled = true;
  document.getElementById("user-input").value = "";
}

document.getElementById("start-btn").addEventListener("click", startTest);
document.getElementById("stop-btn").addEventListener("click", stopTest);
document.getElementById("retry-btn").addEventListener("click", retryTest);
