let playedGames = 0;
const maxTries = 3;
const gamePrize = 100;
const maxRandom = 5;
const minRandom = 0;
let totalPrize = 0;
const infinityGame = true;

while (infinityGame) {
    let startGame = confirm(playedGames === 0 ? 'Do you want to play a game?' : 'Do you want to play a game again?');

    if (startGame) {
        const maxRandomIncreased = maxRandom * (playedGames + 1);
        let randomNumber = Math.round(random(minRandom, maxRandomIncreased));
        console.log(randomNumber);
        let attempt = 1;
        const prize = gamePrize * (playedGames + 1);
        let currentPrize = 0;

        while (attempt <= maxTries) {
            const divide = 2;
            currentPrize = prize / Math.pow(divide, attempt - 1);

            let userNumber = prompt(`Choose a roulette pocket number from ${minRandom} to ${maxRandomIncreased}
            Attempts left: ${maxTries - attempt + 1}
            Total prize: ${totalPrize}$
            Possible prize on current attempt: ${currentPrize}$`);

            if (parseInt(userNumber) === randomNumber) {
                let answer = confirm(`Congratulation, you won! Your prize is: ${currentPrize}$. `
                    + `Do you want to continue?`);
                if (answer === false) {
                    alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
                }
                break;
            } else {
                attempt++;
            }
        }
        playedGames++;
        totalPrize += currentPrize;
    } else {
        alert('You did not become a billionaire, but can.');
        break;
    }
}

function random(min, max) {
    return min + Math.random() * (max - min);
}


