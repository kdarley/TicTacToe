const gameBoard = (() => {
    let gameBoard = [[null, null, null],
                    [null, null, null],
                    [null, null, null]]

    let gameOver = false

    // check if the board has three of the same symbol in a row
    const gameStatus = () => {
        let gameOver = false
        let x = 0
        let o = 0
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
                if (gameBoard[row][col] == 1){
                    x++
                } else if (gameBoard[row][col] == 0) {
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
            if (gameBoard[i][i] == 1) {
                x++
            } else if (gameBoard[i][i]==0){
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
            if (gameBoard[i][2-i] == 1) {
                x++
            } else if (gameBoard[i][2-i]==0){
                o++
            }
        }
        if (x==3){
            gameOver = true
        }
        if (o==3){
            gameOver = true
        }   
    return{
        gameOver
    }
    }

    const update = (row, column, player) => {
        gameBoard[row][column] = player;
        gameOver = gameStatus()
    };

    return {
        gameBoard,
        update,
        gameOver
    }
})();

let a = gameBoard
// test wins
a.update(0,0,1)
a.update(1,0,1)
a.update(2,0,1)

console.log(a.gameBoard)