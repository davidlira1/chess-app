var chessLogic = (board, player, piece, origin, destination) => {

    var typeOfPiece = piece[1];

    switch(typeOfPiece) {
        case "p":
            isPawnMoveAllowed(player, origin, destination);
            break;
        case "r":
            isRookMoveAllowed(player, origin, destination);
            break;
        case "n":
            isKnightMoveAllowed(player, origin, destination);
            break;
        case "b":
            isBishopMoveAllowed(player, origin, destination);
            break;
        case "q":
            isQueenMoveAllowed(player, origin, destination);
            break;
        case "k":
            isKingMoveAllowed(player, origin, destination);
            break;

    }

}

var board = 
[
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"],
    ["2r1","2r1","2r1","2r1","2r1","2r1","2r1","2r1"]
];