const ticTacToe(xname,oname) => {
    const X = "X";//snake
    const O = "O";//ladder
    const currentPlayer = X;
    const players = {
        X: xname,
        O: oname,   
    }
    //brute force approach is to if else curretplayer nextplayer till 9 times in for loop

    //concept: lookup table
    const nextPlayer = {
        X: O,
        O: X,
    }
// nextPlayer[passing the currentPlayer] //if X, then O else X
       
    //visual representation of data structure
    const board = {
        "ongoing",//ongoing,win-X,win-Y and draw 
        "","","",
        "","","",
        "","","",
        
    };
    
        return (player, move) => {
            // validate right player: return <error> if not
            // validate right move: return <error> if not
            // advance the game:
            // 1. update the board
            // 2. compute the game status // 3. next player turn
             } 

};