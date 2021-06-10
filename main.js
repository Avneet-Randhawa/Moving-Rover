canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
rover_image="rover.png";

Nasa_mars_images = ["Mars_2.jpg","Mars_4.jpg","mars.jpg","Mars_Best.jpg"];
Random_Number = Math.floor(Math.random() * 4);
console.log(Random_Number);
background_image = Nasa_mars_images[Random_Number];
function add() {
    background_img = new Image();
    background_img.onload = background_upload();
    background_img.src = background_image;
    
    rover_img = new Image();
    rover_img.onload = rover_upload();
    rover_img.src = rover_image;
}
function background_upload() {
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function rover_upload() {
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log("keypressed");

    if(keypressed == '40'){
        down();
        console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }if(keypressed == '38'){
        up();
        console.log("up");
    }if(keypressed == '39'){
        right();
        console.log("right");
    }

}
function up() {
    if(rover_y >=0){
        rover_y = rover_y - 10;
        console.log("X = "+ rover_x + "y = "+ rover_y);
        background_upload();
        rover_upload();
    }
}
function down() {
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("X = "+ rover_x + "y = "+ rover_y);
        background_upload();
        rover_upload();
    }
}
function left() {
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("X = "+ rover_x + "y = "+ rover_y);
        background_upload();
        rover_upload();
    }
}
function right() {
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("X = "+ rover_x + "y = "+ rover_y);
        background_upload();
        rover_upload();
    }
}
