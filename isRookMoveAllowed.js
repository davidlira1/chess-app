const inSame = require("./inSame");
const nothingInBetween = require("./nothingInBetween");

var isRookMoveAllowed = (board, origin, dest, player) => {
    /*   IF IN SAME ROW AND NOTHING IN BETWEEN
         OR IN SAME COL AND NOTHING IN BETWEEN 
    */
    //we need to check the color of the piece. if same color, cant capture it.
    //isDestSameTeamPiece
    return (inSame.row(origin, dest) && nothingInBetween.row(board, origin, dest) ||
            inSame.col(origin, dest) && nothingInBetween.col(board, origin, dest))
}

