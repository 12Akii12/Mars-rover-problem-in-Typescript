const arguments1 = process.argv;
// const sum = arguments1.reduce((sum, arg) => sum + parseInt(arg), 0);

// console.log("sum of two numbers", sum);

// const mul = arguments1.reduce((mul, arg) => mul * parseInt(arg), 1);

// console.log("mul of two numbers", mul);

//mars-rover problem

let posVal = arguments1.slice(2, 4);
let roverDir = arguments1.slice(6, 7);

var rover = {
  dir: roverDir[0],
  pos: { x: posVal[0], y: posVal[1] },
};

console.log("input", rover.pos);

enum ROVER {
  L = "L",
  R = "R",
  M = "M",
}

const roverTurnLeft = (rover: any) => {
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
  return console.log(`rover current direction ${rover.dir}`);
};

const roverTurnRight = (rover: any) => {
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
  return console.log(`rover current direction ${rover.dir}`);
};

const moveRover = (roverMove: any) => {
  let posX = roverMove.pos.x;
  let posY = roverMove.pos.y;
  let moveDir = roverMove.dir;

  if (
    (moveDir === "N" && posY <= 0) ||
    (moveDir === "E" && posX >= 5) ||
    (moveDir === "S" && posY >= 5) ||
    (moveDir === "W" && posX <= 0)
  ) {
    return console.log("rover position");
  } else if (moveDir === "N" && posY <= 5) {
    posY = posY - 1;
    return console.log(`Rover position x :${posX} and y :${posY} Rover direction: ${moveDir}`);
  } else if (moveDir === "E" && posX < 5) {
    posX = posX + 1;
    return console.log(`rover position x :${posX} and y :${posY} Rover direction: ${moveDir}`);
  } else if (moveDir === "S" && posY < 5) {
    posY = posY + 1;
    return console.log(`rover position x :${posX} and y :${posY} Rover direction: ${moveDir}`);
  } else if (moveDir === "W" && posX < 0) {
    posX = posX - 1;
    return console.log(`rover position x :${posX} and y :${posY} rover direction: ${moveDir}`);
  }
};

console.log(roverTurnLeft(rover));
console.log(roverTurnRight(rover));
console.log(moveRover(rover));
