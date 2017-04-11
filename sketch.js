var x=50;
var y=50;
var newHeight= x+y;
var newWidth = 100;

function setup(){
    createCanvas(600,400);
  document.body.style.backgroundImage = "url('http://cdn.smosh.com/sites/default/files/2017/03/springbreak-01.jpg')";
}

function draw(){
      if(mouseIsPressed){
      strokeWeight(2);
      fill(242, 4, 111);
      ellipse(mouseX,mouseY,newWidth,newHeight);
      
      }
      for(var x = 0; x < 650; x= x + 50){
          fill(247, 248, 249);
          ellipse(x, 100, 25, 25);
      }
}
