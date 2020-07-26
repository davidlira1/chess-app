var isKnightMoveAllowed = (board, origin, dest) => {
    //There are 4 rows it can be in. 
    //And 2 different columns for each of those rows
    return ((origin[0] - 2 === dest[0] || origin[0] + 2 === dest[0]) && (origin[1] - 1 === dest[1] || origin[1] + 1 === dest[1]) ||
            (origin[0] - 1 === dest[0] || origin[0] + 1 === dest[0]) && (origin[1] - 2 === dest[1] || origin[1] + 2 === dest[1]))
}