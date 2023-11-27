# Tic Tac Toe in Javascript

1. We start the game.
2. There are two players X and O [rules]
3. Let's say we store their names.
4. X plays first [rule]
5. They mark their spot : 

    X _ _
    _ _ _
    _ _ _ 
    display this output and validate whether the marking is in 3x3 grid
    when ui has a button it is easy to limit
    but when designing api for a program you are gonna receive info from perhaps another program 
    so we have to limit the user to specific symbols 
6. O, plays:
    X _ _
    _ O _
    _ _ _ 
7. The game continues until one of this things happen : 
8. X wins or 0 wins(each row,column,diagonal has same symbol of either o or x)

9. draw the grid is full nine turns are over ie. tie
10. more moves are left

so when we think of the actions there are some emerging requirements:
1. Store player names
2. turn is gonna cycle between players so currentPlayer, nextPlayer
3. store the board (display it to ig)
4. Game orchestration (something to stimulate turn by turn game)
5. 