var isDestSameTeamPiece = (player, destValue) => {
    if (destValue === "") {
        return false;
    } else {
        return Number(destValue[0]) === player;
    }
}