var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color;
var line_width;
var current_mouse_x;
var current_mouse_y;
var last_mouse_x;
var last_mouse_y;
var last_touch_x;
var last_touch_y;
var current_touch_x;
var current_touch_y;
var mouseEvent;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
 color = document.getElementById("color").value;
 line_width = document.getElementById("line_width").value;
   mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
    }
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
    }



canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_mouse_x, last_mouse_y);
        ctx.lineTo(current_mouse_x, current_mouse_y);
        ctx.stroke();

        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_mouse_x + "y = " + current_mouse_y);
    }

     last_mouse_x = current_mouse_x;
     last_mouse_y = current_mouse_y;
    }

    canvas.addEventListener("touchstart", my_touchstart)
    function my_touchstart(e){
        color = document.getElementById("color").value;
        line_width = document.getElementById("line_width").value;
        last_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_touch_y = e.touches[0].clientY - canvas.offsetTop;
        //ctx.moveTo(last_touch_x, last_touch_y);       
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_touch_x, last_touch_y);
        ctx.lineTo(current_touch_x, current_touch_y);
        ctx.stroke();
     last_touch_x = current_touch_x;
     last_touch_y = current_touch_y;
    }