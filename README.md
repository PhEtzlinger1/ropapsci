# ropapsci
Rock Paper Scissor Game - first JS project

Writing logic
- For Computer Selection: Function returning randomly rock, paper, scissor name getComputerChoice (Math.random)
    -> variable for each item, math random, highest will be selected (test Math.max())

- For Human: Function that human can select among Rock, Paper, Scissor - using Prompt method 
    -> function getHumanChoice
        -> Invalid input will not be considered. Text displayed: Choose between Rock, Paper, Scissor

- Score Variables: let humanScore, let computerScore; initial value = 0

- Play Round: Determine Winner after each round
    -> create function playRound
        -> humanChoice & computerChoice (as argumants)
            -> humanChoice: Case-insensitive (rock, ROCK, Rock)
            -> logic to determine winner + console.log "name winner"
            -> Increment humanScore or computerScore variable based on the round winner

            RULES:  Rock wins over Scissor
                    Scissor wins over Paper
                    Paper wins over Rock

- Logic for entire game: max round per game = 5
    -> function playGame that calls playRound to play 5 rounds, keeps track of scores & declares endWinner
        -> create function playGame
            -> move playRound functoin & score variables so that they're declared inside of a new play Game function
            -> play 5 rounds by calling playRound 5 times
            (see hints related to this!)



