const { anyInBetween_Row } = require("./nothingInBetween")

var nothingInBetween = require("nothingInBetween.js")

var isRookMoveAllowed = (board, origin, dest) => {
    if(origin[0] === destination[0] && nothingInBetween.row(board, origin, dest) ||
       origin[1] === destination[1] && nothingInBetween.col(board, origin, dest)) {
        return true;
    } 
}

