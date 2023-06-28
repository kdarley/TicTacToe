const gameBoard = (() => {
    let gameBoard = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];
            
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
                        htmlCell.className = "o-shape"
                    } else if (gameBoard[row][col] == "x") {
                        htmlCell.className = "x-shape"
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
        const sayBoardChoice = () => console.log(`I am playing ${boardChoice}`);
        const update = (row, column) => {
            gameBoard[row][column] = boardChoice,
            updateBoardDisplay();
        };
        return {sayName, sayBoardChoice, update}
    }

    return {
        gameBoard,
        playerFactory,
        gameStatus
    }
})();

const a = gameBoard

kevin = a.playerFactory("kevin", "x")
computer = a.playerFactory("computer", "o")

console.log("computer", computer)

kevin.update(0,0)
// kevin.update(1,1)
computer.update(1,1)

for (let i = 0; i<3; i++){
    console.log(a.gameBoard[i])    
}

