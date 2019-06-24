// Rover Object Goes Here
// ======================
rover = {
  direction:"N",
  position:{x:0,y:0}
}

var comands = "rlrll";
var len = comands.length;
var right="r";
var left="l";
var foward="f";


// ======================
function tL(rover){
  console.log("previous direction  :  " + rover.direction);
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      console.log("turned west")
      rover.direction = "W"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y -= 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "W":
      console.log("turned south")
      rover.direction = "S"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y += 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "E":
      console.log("turned north")
      rover.direction = "N"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y -= 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "S":
      console.log("turned east")
      rover.direction = "E"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.x += 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
  }
}

function tR(rover){
  console.log("previous direction  :  " + rover.direction);
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      console.log("turned east")
      rover.direction = "E"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.x += 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "W":
      console.log("turned north")
      rover.direction = "N"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y -= 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "E":
      console.log("turned south")
      rover.direction = "W"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y += 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "S":
      console.log("turned west")
      rover.direction = "W"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.x -= 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
  }
}

function mF(rover){
  console.log("previous direction  :  " + rover.direction);
  console.log("moveForward was called");
  switch(rover.direction){
    case "N":
      console.log("continued foward north")
      rover.direction = "N"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y -= 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "W":
      console.log("continued foward west")
      rover.direction = "W"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.x -= 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "E":
      console.log("continued foward east")
      rover.direction = "E"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.x += 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
    case "S":
      console.log("continued foward south")
      rover.direction = "S"
      console.log("new direction: " + rover.direction)
      console.log("rover position before------> x: " + rover.position.x+",  y: " + rover.position.y)
      rover.position.y += 1;
      console.log("rover position after------> x: " + rover.position.x+",  y: " + rover.position.y)
      break;
  }
}







function moveCommands(comands){
  for(var i= 0; i <len; i++){
    var letter= comands[i];
    if(letter==foward){
      mF(rover);
    }
    else if(letter==right){
      tR(rover);
    }
    else if(letter==left){
      tL(rover);
    }
  }
}
