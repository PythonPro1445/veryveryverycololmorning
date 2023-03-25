
var canvas = document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color = "red"; 
var current_position_of_mouse_x;
var current_position_of_mouse_y;
var lastpositionofx;
var lastpositionofy; 
var width_of_the_line;
var MouseEvent;



ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("widthofline").value;

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    MouseEvent = "mouseUP"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;

        console.log("lAST POSITION OF THE X AND Y COORDINATES = ");
        console.log("x = " + lastpositionofx + "Y = " + lastpositionofy);
        ctx.moveTo(lastpositionofx, lastpositionofy);

        console.log("CURRENT POSITION OF THE X AND Y COORDINATES = ");
        console.log("x = " + current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    lastpositionofx = current_position_of_mouse_x;
    lastpositionofy = current_position_of_mouse_y;
}