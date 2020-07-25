var nothingInBetween = require("nothingInBetween.js");
var inSameDiagonal = require("inSameDiagonal.js");

var isBishopMoveAllowed = (board, origin, dest) => {

    /*1. IF IN SAME LR DIAGONAL AND NOTHING IN BETWEEN
         OR IN SAME RL DIAGONAL AND NOTHING IN BETWEEN 
    */
    if (inSameDiagonal.lr(board, origin, dest) && nothingInBetween.lrDiag(board, origin, dest) ||
        inSameDiagonal.rl(board, origin, dest) && nothingInBetween.rlDiag(board, origin, dest)) {
        return true;
    } 

    
}