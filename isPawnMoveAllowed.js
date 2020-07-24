var isPawnMoveAllowed = (player, origin, destination) => {
    //so let's just write. but i do think this will need to know the value at the destination.

    //player 1, player 2
    //1p2
    //2p8

    //if player1
        //if board is normal
            //we are moving up
            //if destination column is the same as origin
                //if origin row is 6 AND destination row is 2 less AND Nothing in between AND Nothing at destination
                    //return true
                //else if destination row is 1 less AND Nothing at destination
                    //return true
            //else if destination col is (col-1) or (col+1) and row is -1 
                //if there is a piece at that destination
                    //return true
                //else if en passant (will have to keep track of the row)
                    //

                    //return true
        //else
            //we are moving down
    //else (it's player 2)
        //if board is normal
            //we are moving down
        //else
            //we are moving up
}