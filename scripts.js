const gameBoard = (() => {
    let gameBoard = [[null, null, null],
                    [null, null, null],
                    [null, null, null]]

    let gameOver = false

    // check if the board has three of the same symbol in a row
    const gameStatus = () => {
        let x = 0
        let o = 0
        console.log("what is the game board", gameBoard)
        // check the columns
        for (let col = 0; col <3; col++){
            x=0
            o=0
            for (let row = 0; row < 3; row++){
                if (gameBoard[row][col] == 1){
                    x++
                } else if (gameBoard[row][col] == 0) {
                    o++ 
                }  
            }
            if (x==3){
                gameOver = true
                console.log(gameOver)
                break
            } 

            if (o==3){
                gameOver = true
                console.log(gameOver)
                break
            } 
        }

        // check the rows
        for (let row = 0; row <3; row++){
            x=0
            o=0
            for (let col = 0; col < 3; col++){
                if (gameBoard[row][col] == 1){
                    x++
                } else if (gameBoard[row][col] == 0) {
                    o++ 
                }  
            }
            if (x==3){
                gameOver = true
                console.log(gameOver)
                break
            } 

            if (o==3){
                gameOver = true
                console.log(gameOver)
                break
            } 
        }
        // check left to right diagonal
        x=0
        o=0
        for (let i = 0; i <3; i++){
            if (gameBoard[i][i] == 1) {
                x++
            } else if (gameBoard[i][i]==0){
                o++
            }
        }

        if (x==3){
            gameOver = true
            console.log(gameOver)
        } 

        if (o==3){
            gameOver = true
            console.log(gameOver)
        } 
        // check right to left diagonal
        x=0
        o=0
        for (let i = 0; i <3; i++){
            if (gameBoard[i][2-i] == 1) {
                x++
            } else if (gameBoard[i][2-i]==0){
                o++
            }
        }
        
        if (x==3){
            gameOver = true
            console.log(gameOver)
        } 

        if (o==3){
            gameOver = true
            console.log(gameOver)
        } 

        
    }

    const update = (row, column, player) => {
        gameBoard[row][column] = player;
        gameStatus()
    };

    // console.log("board",gameBoard)

    return {
        gameBoard,
        update,
        gameOver,
        gameStatus
    }
})();

let a = gameBoard
// test wins
a.update(0,0,0)
a.update(1,1,0)
a.update(2,0,0)
// a.update(0,1,1)
// a.update(0,2,1)




// a.update(1,1,0)
// a.update(2,1,1)

// console.log(a.gameOver)
console.log(a.gameBoard)