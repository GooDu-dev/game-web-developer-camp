function UserInput() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)
}

function BotInput() {
    botInput = Math.floor((Math.random() * 100) % 3)
    console.log(botInput)
}

// "3" == 3 == true
function CompareBotAndUserValue() {
    // ROCK : 0
    // PAPER : 1
    // SCISSOR : 2
    if (userInput == botInput) {
        console.log("DRAW")
    } else if (userInput == 0 && botInput == 2) {
        // User: ROCK
        // BOT: SCISSOR
        console.log("User wins")
    } else if (userInput == 1 && botInput == 0) {
        // User: PAPER
        // BOT: ROCK
        console.log("User wins")
    } else if (userInput == 2 && botInput == 1) {
        // User: SCISSOR
        // BOT: PAPER
        console.log("User wins")
    } else {
        console.log("Bot wins")
    }
}

function PlayGame() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)

    botInput = Math.floor((Math.random() * 100) % 3)
    console.log(botInput)

    // ROCK : 0
    // PAPER : 1
    // SCISSOR : 2
    if (userInput == botInput) {
        console.log("DRAW")
    } else if (userInput == 0 && botInput == 2) {
        // User: ROCK
        // BOT: SCISSOR
        console.log("User wins")
    } else if (userInput == 1 && botInput == 0) {
        // User: PAPER
        // BOT: ROCK
        console.log("User wins")
    } else if (userInput == 2 && botInput == 1) {
        // User: SCISSOR
        // BOT: PAPER
        console.log("User wins")
    } else {
        console.log("Bot wins")
    }
}