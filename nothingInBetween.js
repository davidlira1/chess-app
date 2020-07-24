var nothingInBetween_row = (board, origin, dest) => {
    //example:
    //origin:[3,3] 
    //destination[3,7]
    //will check [3, 4], [3,5], [3,6], 
    for (var col = origin[1] + 1; col < dest[1]; col++) {
        if (board[origin[0]][col] !== "") {
            return false;
        }
    }
    return true;
}

var nothingInBetween_col = (board, origin, dest) => {
    //example:
    //origin: [1, 4]
    //destination: [6, 4]
    //will check [2, 4], [3, 4], [4, 4], [5, 4]
    for (var row = origin[0] + 1; row < dest[0]; row++) {
        if (board[row][origin[1]] !== "") {
            return false
        }
    }
    return true;
}





module.exports = {
    row: nothingInBetween_row,
    col: nothingInBetween_col
}

console.log(nothingInBetween_row([
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
], [0, 3], [0, 7]));