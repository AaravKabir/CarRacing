canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "Car_1.png";
car1_x = 50;
car1_y = 50;

car2_width = 120;
car2_height = 70;
car2_image = "car_2.png";
car2_x = 50;
car2_y = 450;

background_image = "backgroundimg.jpeg";

window.addEventListener("keydown",my_keydown);

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_Background;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_Car1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_Car2;
    car2_imgTag.src = car2_image;
}
function upload_Background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function upload_Car1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y, car1_width, car1_height);
}
function upload_Car2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}window.addEventListener("keydown", my_keydown);
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
        console.log("right");
    }
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
            console.log("d");
    }
}


        function Car1_up()
        {
            if(car1_y >= 0){
                car1_y = car1_y-10;
                console.log("When up arrow key is pressed, x = " + car1_x + "and y =" + car1_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        
        function Car1_down(){
            if(car1_y <= 500){
                car1_y = car1_y + 10;
                console.log("When down arrow key is pressed, x = " + car1_x + "and y =" + car1_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        
        function Car1_left(){
            if(car1_x >= 0){
                car1_x = car1_x- 10;
                console.log("When left arrow key is pressed, x = " + car1_x + "and y =" + car1_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        
        function Car1_right(){
            if(car1_x <= 900){
                car1_x = car1_x + 10;
                console.log("When right arrow key is pressed, x = " + car1_x + "and y =" + car1_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }

        function Car2_up()
        {
            if(car2_y >= 0){
                car2_y = car2_y-10;
                console.log("When w key is pressed, x = " + car2_x + "and y =" + car2_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        
        function Car2_down(){
            if(car2_y <= 500){
                car2_y = car2_y + 10;
                console.log("When s key is pressed, x = " + car2_x + "and y =" + car2_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        
        function Car2_left(){
            if(car2_x >= 0){
                car2_x = car2_x- 10;
                console.log("When a key is pressed, x = " + car2_x + "and y =" + car2_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        
        function Car2_right(){
            if(car2_x <= 900){
                car2_x = car2_x + 10;
                console.log("When d key is pressed, x = " + car2_x + "and y =" + car2_y)
                upload_Background();
                upload_Car1();
                upload_Car2();
            }
        }
        if(car1_x == 700)
        {
            console.log("car1 Won");
            document.getElementById('game_status').innerHTML = "Car 1 Won!!!";
        }else if (car2_x == 700)
        {
            console.log("car2 won");
            document.getElementById('game_status').innerHTML = "Car 2 Won!!!"
        }
        
