var nothingInBetween = require("nothingInBetween.js");
var inSameDiagonal = require("inSameDiagonal.js");

var isBishopMoveAllowed = (board, origin, dest) => {

    /*1. IF IN SAME LR DIAGONAL AND NOTHING IN BETWEEN
         OR IN SAME RL DIAGONAL AND NOTHING IN BETWEEN 
    */
    if (inSameDiagonal.Lr(board, origin, dest) && nothingInBetween.lrDiag(board, origin, dest) ||
        inSameDiagonal.Rl(board, origin, dest) && nothingInBetween.rlDiag(board, origin, dest)) {
        return true;
    } 

    
}