const inSame = require("./inSame");
const nothingInBetween = require("./nothingInBetween");

var isRookMoveAllowed = (board, origin, dest) => {
    /*1. IF IN SAME ROW AND NOTHING IN BETWEEN
         OR IN SAME COL AND NOTHING IN BETWEEN 
    */
    if(inSame.row(origin, dest) && nothingInBetween.row(board, origin, dest) ||
       inSame.col(origin, dest) && nothingInBetween.col(board, origin, dest)) {
        return true;
    } 
}

