var inSame_row = (origin, dest) => {
    return  origin[0] === dest[0];
} 

var inSame_col = (origin, dest) => {
    return origin[1] === dest[1];
} 

//Capitalization of "l" or "r" represents coming from the top direction
//down to the lower case counterpart
var inSame_LrDiag = (origin, dest) => {
    return  (Math.abs(origin[0] - dest[0]) === Math.abs(origin[1] - dest[1]))
             &&
             ((origin[0] - dest[0] > 0 && origin[1] - dest[1] > 0) || 
             (origin[0] - dest[0] < 0 && origin[1] - dest[1] < 0)) 
}

var inSame_RlDiag = (origin, dest) => {
    return origin[0] + origin[1] === dest[0] + dest[1]
}


console.log(inSameDiagonal_Lr([
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
], [2, 2], [4, 2]));


//dont forget to put these through some vigorous tests.
//make sure to test them to make sure they don't return
//true when being in the other diagonal