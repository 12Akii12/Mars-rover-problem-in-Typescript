const arguments1 = process.argv;

//mars-rover problem
enum ROVERDIR {
  N = 1,
  E = 2,
  S = 3,
  W = 4,
}

let x = 0;
let y = 0;
let roverFacing = ROVERDIR.N;

const roverDefaultPosition = (xPos: number, yPos: number, roverFacingDir: number) => {
  x = xPos;
  y = yPos;
  roverFacing = roverFacingDir;
};

const roverPositionDirction = () => {
  var dir = "N";
  if (roverFacing == 1) {
    dir = "N";
  } else if (roverFacing == 2) {
    dir = "E";
  } else if (roverFacing == 3) {
    dir = "S";
  } else if (roverFacing == 4) {
    dir = "W";
  }
  console.log(x + " " + y + " " + dir + " ");
};

const roverPossibleMove = (letters: string) => {
  for (let i = 0; i < letters.length; i++) {
    roverMoments(letters.charAt(i));
  }
};

const roverMoments = (letter: string) => {
  if (letter == "L") {
    turnLeft();
  } else if (letter == "R") {
    turnRight();
  } else if (letter == "M") {
    moveRover();
  }
};

const turnLeft = () => {
  if (roverFacing == ROVERDIR.N) {
    roverFacing = ROVERDIR.W;
  } else if (roverFacing == ROVERDIR.W) {
    roverFacing = ROVERDIR.S;
  } else if (roverFacing == ROVERDIR.S) {
    roverFacing = ROVERDIR.E;
  } else if (roverFacing == ROVERDIR.E) {
    roverFacing = ROVERDIR.N;
  }
};

const turnRight = () => {
  if (roverFacing == ROVERDIR.N) {
    roverFacing = ROVERDIR.E;
  } else if (roverFacing == ROVERDIR.E) {
    roverFacing = ROVERDIR.S;
  } else if (roverFacing == ROVERDIR.S) {
    roverFacing = ROVERDIR.W;
  } else if (roverFacing == ROVERDIR.W) {
    roverFacing = ROVERDIR.N;
  }
};

const moveRover = () => {
  if (roverFacing == ROVERDIR.N) {
    y = y + 1;
  } else if (roverFacing == ROVERDIR.E) {
    x = x + 1;
  } else if (roverFacing == ROVERDIR.S) {
    y = y - 1;
  } else if (roverFacing == ROVERDIR.W) {
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
