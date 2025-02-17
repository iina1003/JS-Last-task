"use strict"
let currentCard = Math.floor(Math.random() * 13) + 1;
let streak = 0;
let maxStreak = 0;
document.getElementById("current-card").textContent = currentCard;

function getNextCard() {
    let nextCard;
    do {
        nextCard = Math.floor(Math.random() * 13) + 1;
    } while (nextCard === currentCard);
    return nextCard;
}

function guess(choice) {
    let nextCard = getNextCard();
    let result = "";

    if ((choice === 'high' && nextCard > currentCard) || (choice === 'low' && nextCard < currentCard)) {
        result = "正解！次のカード: " + nextCard;
        streak++;
        if (streak > maxStreak) {
            maxStreak = streak;
        }
    } else {
        result = "不正解... 次のカード: " + nextCard;
        document.getElementById("restart").style.display = "block";
        document.getElementById("high-btn").disabled = true;
        document.getElementById("low-btn").disabled = true;
    }
    
    document.getElementById("result").textContent = result;
    document.getElementById("streak").textContent = "連続正解数: " + streak;
    document.getElementById("max-streak").textContent = "最高連勝記録: " + maxStreak;
    currentCard = nextCard;
    document.getElementById("current-card").textContent = currentCard;
}

function restartGame() {
    currentCard = Math.floor(Math.random() * 13) + 1;
    streak = 0;
    document.getElementById("current-card").textContent = currentCard;
    document.getElementById("result").textContent = "";
    document.getElementById("streak").textContent = "連続正解数: " + streak;
    document.getElementById("restart").style.display = "none";
    document.getElementById("high-btn").disabled = false;
    document.getElementById("low-btn").disabled = false;
}