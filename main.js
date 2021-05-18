canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "Car_1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car_2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if ( key_pressed == "38"){
        Car1_up();
        console.log("up");
    }
    if ( key_pressed == "40"){
        Car1_down();
        console.log("down");
    }
    if ( key_pressed == "37"){
        Car1_left();
        console.log("left");
    
    }
    if ( key_pressed == "39"){
        Car1_right();
        console.log("right");}
    }

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if ( key_pressed == "87"){
        Car2_up();
            console.log("w");
        }
        if ( key_pressed == "83"){
            Car2_down();
            console.log("s");
        }
        if ( key_pressed == "65"){
            Car2_left();
            console.log("a");
        
        }
        if ( key_pressed == "68"){
            Car2_right();
            console.log("d");}
        }
