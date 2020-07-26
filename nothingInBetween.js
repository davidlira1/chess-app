var nothingInBetween_row = (board, origin, dest) => {
    /*   DETERMINE WHICH IS AT THE LEFTMOST AND RIGHTMOST
         SO WE CAN LOOP FROM LEFT TO RIGHT
    */
    var leftMost = origin[1] < dest[1] ? origin : dest;
    var rightMost = leftMost === origin ? dest : origin;
    var row = leftMost[0]

    for (var col = leftMost[1] + 1; col < rightMost[1]; col++) {
        if (board[row][col] !== "") {
            return false;
        }
    }
    return true;
}

var nothingInBetween_col = (board, origin, dest) => {
    /*   DETERMINE WHICH IS AT THE UPPERMOST AND LOWERMOST
         SO WE CAN LOOP FROM UP TO DOWN
    */
    var upperMost = origin[0] < dest[0] ? origin : dest;
    var lowerMost = upperMost === origin ? dest : origin;
    var col = upperMost[1]

    for (var row = upperMost[0] + 1; row < lowerMost[0]; row++) {
        if (board[row][col] !== "") {
            return false
        }
    }
    return true;
}

/*  THESE TWO FUNCTIONS ASSUME THAT 
    THE ORIGIN AND DESTINATION BEING PASSED IN ARE IN THE SPECIFIED DIAGONAL
*/
var nothingInBetween_LrDiag = (board, origin, dest) => {
    nothingInBetween_diag(board, origin, dest, 'Lr');
}

var nothingInBetween_RlDiag = (board, origin, dest) => {
    nothingInBetween_diag(board, origin, dest, 'Rl');
}

var nothingInBetween_diag = (board, origin, dest, direction) => {
    /*the most upper-left piece 
    will be placed in the upperLeft var
    that way we can use the same for loop */
    var upperMost = origin[0] < dest[0] ? origin : dest;
    var lowerMost = upperMost === origin ? dest : origin;
    
    var col = upperMost[1];

    for (var row = upperMost[0] + 1; row < lowerMost[0]; row++) {
        col = direction === 'Lr' ? ++col : --col;
        if (board[row][col] !== '') return false;
    }
    return true;
}

module.exports = {
    row: nothingInBetween_row,
    col: nothingInBetween_col,
    Lr: nothingInBetween_Lr,
    Rl: nothingInBetween_Rl
}

console.log(nothingInBetween_diag(
    [
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
], [0, 0], [5, 5]));