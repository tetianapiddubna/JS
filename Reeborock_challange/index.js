//Hurdle 3 Challenge
function turnRight() {
    turn_left();
    turn_left();
    turn_left();
}

function jump() {
    turn_left();
    move();
    turnRight();
    move();
    turnRight();
    move();

    if (!at_goal()) {
        turn_left();
    }
}

while (!at_goal()) {
    while (front_is_clear()) {
        move();
    }
    jump();
    i++
}

//Hurdle 4 
function turnRight() {
    turn_left();
    turn_left();
    turn_left();
}

function variableJump() {
   turn_left();
   while (!wall_on_right()) {
       move();
   }
   turnRight();
   move();
   turnRight();
   while (!front_is_clear()) {
       move();
   }
   if (!at_goal()) {
        turn_left();
   }
   i++
}

while (!at_goal()) {
   while (!front_is_clear()) {
       move();
   }
   variableJump();
}


//Maze
function turnRight() {
    turn_left();
    turn_left();
    turn_left();
}

while (!at_goal()) {
    if (right_is_clear()) {
        turnRight();
        move();
    } else if (front_is_clear()) {
        move();
    } else {
        turn_left();
    }
}
