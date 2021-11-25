var arguments1 = process.argv;
// const sum = arguments1.reduce((sum, arg) => sum + parseInt(arg), 0);
// console.log("sum of two numbers", sum);
// const mul = arguments1.reduce((mul, arg) => mul * parseInt(arg), 1);
// console.log("mul of two numbers", mul);
//mars-rover problem
var posVal = arguments1.slice(2, 4);
var roverDir = arguments1.slice(6, 7);
var rover = {
    dir: roverDir[0],
    pos: { x: posVal[0], y: posVal[1] }
};
console.log("input", rover.pos);
var ROVER;
(function (ROVER) {
    ROVER["L"] = "L";
    ROVER["R"] = "R";
    ROVER["M"] = "M";
})(ROVER || (ROVER = {}));
var roverTurnLeft = function (rover) {
    switch (rover.dir) {
        case "N":
            rover.dir = "W";
            break;
        case "W":
            rover.dir = "S";
            break;
        case "S":
            rover.dir = "E";
            break;
        case "E":
            rover.dir = "N";
            break;
    }
    return console.log("rover current direction ".concat(rover.dir));
};
var roverTurnRight = function (rover) {
    switch (rover.dir) {
        case "N":
            rover.dir = "E";
            break;
        case "E":
            rover.dir = "S";
            break;
        case "S":
            rover.dir = "W";
            break;
        case "W":
            rover.dir = "N";
            break;
    }
    return console.log("rover current direction ".concat(rover.dir));
};
var moveRover = function (roverMove) {
    var posX = roverMove.pos.x;
    var posY = roverMove.pos.y;
    var moveDir = roverMove.dir;
    if ((moveDir === "N" && posY <= 0) ||
        (moveDir === "E" && posX >= 5) ||
        (moveDir === "S" && posY >= 5) ||
        (moveDir === "W" && posX <= 0)) {
        return console.log("rover position");
    }
    else if (moveDir === "N" && posY <= 5) {
        posY = posY - 1;
        return console.log("Rover position x :".concat(posX, " and y :").concat(posY, " Rover direction: ").concat(moveDir));
    }
    else if (moveDir === "E" && posX < 5) {
        posX = posX + 1;
        return console.log("rover position x :".concat(posX, " and y :").concat(posY, " Rover direction: ").concat(moveDir));
    }
    else if (moveDir === "S" && posY < 5) {
        posY = posY + 1;
        return console.log("rover position x :".concat(posX, " and y :").concat(posY, " Rover direction: ").concat(moveDir));
    }
    else if (moveDir === "W" && posX < 0) {
        posX = posX - 1;
        return console.log("rover position x :".concat(posX, " and y :").concat(posY, " rover direction: ").concat(moveDir));
    }
};
console.log(roverTurnLeft(rover));
console.log(roverTurnRight(rover));
console.log(moveRover(rover));
