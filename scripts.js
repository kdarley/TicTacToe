const gameBoard = (() => {
    let gameBoard = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];    

    let currentPlayer = ["x"]

    let currentOptions = [];
    
    // check if the board has three of the same symbol in a row
    const gameStatus = () => {
        let gameOver = false;
        let x = 0;
        let o = 0;

        // check the columns
        for (let col = 0; col <3; col++){
            x=0
            o=0
            for (let row = 0; row < 3; row++){
                if (gameBoard[row][col] == "x"){
                    x++
                } else if (gameBoard[row][col] == "o") {
                    o++ 
                }  
            }
            if (x==3){
                gameOver = true
                break
            } 

            if (o==3){
                gameOver = true
                break
            } 

        }

        // check the rows
        for (let row = 0; row <3; row++){
            x=0;
            o=0;
            for (let col = 0; col < 3; col++){
                if (gameBoard[row][col] == "x"){
                    x++;
                } else if (gameBoard[row][col] == "o") {
                    o++;
                }  
            }
            if (x==3){
                gameOver = true
                break
            } 

            if (o==3){
                gameOver = true
                break
            } 
        }
        // check left to right diagonal
        x=0
        o=0
        for (let i = 0; i <3; i++){
            if (gameBoard[i][i] == "x") {
                x++
            } else if (gameBoard[i][i]== "o"){
                o++
            }
        }

        if (x==3){
            gameOver = true
        } 

        if (o==3){
            gameOver = true
        } 
        // check right to left diagonal
        x=0
        o=0
        for (let i = 0; i <3; i++){
            if (gameBoard[i][2-i] == "x") {
                x++
            } else if (gameBoard[i][2-i]== "o"){
                o++
            }
        }
        if (x==3){
            gameOver = true
        }
        if (o==3){
            gameOver = true
        }
        console.log("final", gameOver)
    return gameOver
    };

    const updateBoardDisplay = () => {
        for (row in gameBoard){
            for (col in gameBoard[row]){
                const htmlCell = document.querySelector(`div.column${col}.row${row} > a.fill-div > div.shape`)
                if (htmlCell != null) {

                    console.log(row, col)
                    console.log(htmlCell.classList)
    
                    if (gameBoard[row][col] == "o"){
                        htmlCell.classList.add("o-shape")
                    } else if (gameBoard[row][col] == "x") {
                        htmlCell.classList.add("x-shape")
                    } else {
                        continue
                    };
                }
            }
        }
    }

    const switchPlayerTurn = () => {
        if (currentPlayer[0] == "x") {
            currentPlayer[0] == "o";
        } else {
            currentPlayer[0] == "x";
        };
    };

    const playerFactory = (playerName, boardChoice) => {
        const sayName = () => console.log(`my name is ${playerName}`);
        const returnName = () => {
            return {playerName}
        }
        const sayBoardChoice = () => console.log(`I am playing ${boardChoice}`);
        const returnBoardChoice = () => {
            return {boardChoice}
        }
        const update = (row, column) => {
            gameBoard[row][column] = boardChoice,
            updateBoardDisplay(),
            switchPlayerTurn(); // switch active player
            // tell computer it is their turn
            
        };
        return {sayName, returnName, sayBoardChoice, returnBoardChoice, update}
    }

    const reset = () => {
                    for (let row = 0; row<3; row++){
                        for (let col = 0; col<3; col++){
                            gameBoard[row][col] = null
                        }
                    };

                    let xCells = document.querySelectorAll(".x-shape");
                    xCells.forEach((cell) => {
                        cell.classList.remove("x-shape")
                    });
                    let oCells = document.querySelectorAll(".o-shape");
                    oCells.forEach((cell) => {
                        cell.classList.remove("o-shape")
                    });
                    updateBoardDisplay();
                }

    function computerOptions(){
        currentOptions = []
        for (let row = 0; row<3; row++){
            for (let col = 0; col<3; col++){
                if (gameBoard[row][col] == null){
                    currentOptions.push([row, col])
                }
            }
         }
         return currentOptions
    }

    const computerTurn = () => {
        console.log(computerOptions())
        const currentOptions = computerOptions();


        randomChoice = Math.floor(Math.random() * currentOptions.length)
        
        computer.update(currentOptions[randomChoice][0],currentOptions[randomChoice][1])

    }

    return {
        gameBoard,
        currentPlayer,
        playerFactory,
        gameStatus,
        reset,
        computerTurn
    };
})();

const gb = gameBoard
let player = gb.playerFactory("player", "x")
let computer = gb.playerFactory("computer", "o")

function removeButtonSelection(){
    const buttons = document.querySelectorAll("button.player-option")
    buttons.forEach((button) => {
        button.classList.remove("selection");
        gb.reset();
    })
}

function buttonListeners(){
    const buttons = document.querySelectorAll("button.player-option")
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // remove selection class from buttons
            removeButtonSelection(),
            // add selection class to current button
            button.classList.add("selection");
            // set player
            let buttonText = button.textContent
            buttonText = buttonText.toLowerCase()
            player = gb.playerFactory("player", buttonText)
            // for the opposite token, create a computer to play against
            if (buttonText =="x") {
                computerToken = "o"
            } else{
                computerToken = "x"
            }
            computer = gb.playerFactory("computer", computerToken)
            // gb.currentPlayer[0] = buttonText // this needs to be on move, not player pick
        })
    }
    )
}

function boardSpaceListeners(){
    const boardSpaces = document.querySelectorAll("a.fill-div")
    boardSpaces.forEach((boardSpace) => {
        boardSpace.addEventListener('click', () => {
            let shape = gb.currentPlayer[0]

            if (shape = "x"){
                gb.currentPlayer[0] = "0"
            } else {
                gb.currentPlayer[0] = "x"
            }

            column = boardSpace.parentNode.classList[1].slice(-1)
            row = boardSpace.parentNode.classList[2].slice(-1)
            console.log(column, row)
            player.update(row,column)
            // wait
            gb.computerTurn()
        })
    })
}

boardSpaceListeners()

buttonListeners()

// player.update(0,0)
// kevin.update(1,1)
// computer.update(1,1)

// kevin = gb.playerFactory("kevin", "x")
// computer = gb.playerFactory("computer", "o")

// console.log("computer", computer)


 
// for (let i = 0; i<3; i++){
//     console.log(gb.gameBoard[i])    
// }