const inSame = require("./inSame");
const nothingInBetween = require("./nothingInBetween");


var isBishopMoveAllowed = (board, origin, dest) => {
    /*1. IF IN SAME LR DIAGONAL AND NOTHING IN BETWEEN
         OR IN SAME RL DIAGONAL AND NOTHING IN BETWEEN 
    */
    if (inSame.LrDiag(origin, dest) && nothingInBetween.LrDiag(board, origin, dest) ||
        inSame.RlDiag(origin, dest) && nothingInBetween.RlDiag(board, origin, dest)) {
        return true;
    } 

}