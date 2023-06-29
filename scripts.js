const gameBoard = (() => {
    let gameBoard = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];    

    let currentPlayer = ["x"]
    
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
            x=0
            o=0
            for (let col = 0; col < 3; col++){
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
        // for each cell on the board
        // let gameBoard = this.gameBoard
        // console.log(gameBoard)
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
        // get the the cell val
    }

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
            updateBoardDisplay();
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

    return {
        gameBoard,
        currentPlayer,
        playerFactory,
        gameStatus,
        reset
    }
})();

const gb = gameBoard
let player = gb.playerFactory("player", "x")

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

            gb.currentPlayer[0] = buttonText
        })
    }
    )
}

function getCurrentPlayer(){
    const currentPlayer = gb.currentPlayer[0];
    console.log(currentPlayer)
    return {currentPlayer}
}

function boardSpaceListeners(){
    const boardSpaces = document.querySelectorAll("a.fill-div")
    boardSpaces.forEach((boardSpace) => {
        boardSpace.addEventListener('click', () => {
            console.log(boardSpace);
            console.log(boardSpace.querySelector("div.shape"));
            let shape = getCurrentPlayer();

            console.log()
            // parent = 
            column = boardSpace.parentNode.classList[1].slice(-1)
            row = boardSpace.parentNode.classList[2].slice(-1)
            console.log(column, row)
            player.update(row,column)



        })
    })
}

boardSpaceListeners()

buttonListeners()

player.update(0,0)
// kevin.update(1,1)
// computer.update(1,1)

// kevin = gb.playerFactory("kevin", "x")
// computer = gb.playerFactory("computer", "o")

// console.log("computer", computer)



// for (let i = 0; i<3; i++){
//     console.log(gb.gameBoard[i])    
// }

