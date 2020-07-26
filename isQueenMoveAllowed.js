const inSame = require("./inSame");
const nothingInBetween = require("./nothingInBetween");

var isQueenMoveAllowed = (board, origin, dest) => {
    
    return (inSame.row(origin, dest) && nothingInBetween.row(board, origin, dest) ||
            inSame.col(origin, dest) && nothingInBetween.col(board, origin, dest) ||
            inSame.LrDiag(origin, dest) && nothingInBetween.LrDiag(board, origin, dest) ||
            inSame.RlDiag(origin, dest) && nothingInBetween.RlDiag(board, origin, dest))
}