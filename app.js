var arguments1 = process.argv;
//mars-rover problem
var ROVERDIR;
(function (ROVERDIR) {
    ROVERDIR[ROVERDIR["N"] = 1] = "N";
    ROVERDIR[ROVERDIR["E"] = 2] = "E";
    ROVERDIR[ROVERDIR["S"] = 3] = "S";
    ROVERDIR[ROVERDIR["W"] = 4] = "W";
})(ROVERDIR || (ROVERDIR = {}));
var x = 0;
var y = 0;
var roverFacing = ROVERDIR.N;
var roverDefaultPosition = function (xPos, yPos, roverFacingDir) {
    x = xPos;
    y = yPos;
    roverFacing = roverFacingDir;
};
var roverPositionDirction = function () {
    var dir = "N";
    if (roverFacing == 1) {
        dir = "N";
    }
    else if (roverFacing == 2) {
        dir = "E";
    }
    else if (roverFacing == 3) {
        dir = "S";
    }
    else if (roverFacing == 4) {
        dir = "W";
    }
    console.log(x + " " + y + " " + dir + " ");
};
var roverPossibleMove = function (letters) {
    for (var i = 0; i < letters.length; i++) {
        roverMoments(letters.charAt(i));
    }
};
var roverMoments = function (letter) {
    if (letter == "L") {
        turnLeft();
    }
    else if (letter == "R") {
        turnRight();
    }
    else if (letter == "M") {
        moveRover();
    }
};
var turnLeft = function () {
    if (roverFacing == ROVERDIR.N) {
        roverFacing = ROVERDIR.W;
    }
    else if (roverFacing == ROVERDIR.W) {
        roverFacing = ROVERDIR.S;
    }
    else if (roverFacing == ROVERDIR.S) {
        roverFacing = ROVERDIR.E;
    }
    else if (roverFacing == ROVERDIR.E) {
        roverFacing = ROVERDIR.N;
    }
};
var turnRight = function () {
    if (roverFacing == ROVERDIR.N) {
        roverFacing = ROVERDIR.E;
    }
    else if (roverFacing == ROVERDIR.E) {
        roverFacing = ROVERDIR.S;
    }
    else if (roverFacing == ROVERDIR.S) {
        roverFacing = ROVERDIR.W;
    }
    else if (roverFacing == ROVERDIR.W) {
        roverFacing = ROVERDIR.N;
    }
};
var moveRover = function () {
    if (roverFacing == ROVERDIR.N) {
        y = y + 1;
    }
    else if (roverFacing == ROVERDIR.E) {
        x = x + 1;
    }
    else if (roverFacing == ROVERDIR.S) {
        y = y - 1;
    }
    else if (roverFacing == ROVERDIR.W) {
        x = x - 1;
    }
    console.log("x y dir values", x + " " + y + " " + roverFacing);
};
roverDefaultPosition(1, 2, ROVERDIR.N);
roverPossibleMove("LMLMLMLMM");
roverPositionDirction();
roverDefaultPosition(3, 3, ROVERDIR.E);
roverPossibleMove("MMRMMRMRRM");
roverPositionDirction();
