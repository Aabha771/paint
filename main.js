var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseEvent="empty";

var last_postion_of_x,last_postion_of_y;

var color = "black";
var width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){

    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e){

    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){

    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

   // mouseEvent="mouseDown";
   var current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
   var current_position_of_mouse_y= e.clientY-canvas.offsetTop;

   if (mouseEvent=="mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth=width_of_line;

       console.log last_postion_of_x,last_postion_of_y
   }
}

