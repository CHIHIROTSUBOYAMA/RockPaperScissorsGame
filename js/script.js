const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        // コンピューターの手
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    compareHands(this.className, computerChoice);
                    playerHand.src = `img/${this.className}.png`;
                    computerHand.src = `img/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease ";
                computerHand.style.animation = "shakeComputer 2s ease ";
                const winner = document.querySelector(".winner");
                winner.textContent = "じゃんけんぽん！"
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "あいこ";
            return;
        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "あなたの勝ち！"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "あなたの負け！"
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "あなたの勝ち！"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "あなたの負け！"
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "あなたの勝ち！"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "あなたの負け！"
                cScore++;
                updateScore();
                return;
            };
        };
    };
    startGame();
    playMatch();
};

game();