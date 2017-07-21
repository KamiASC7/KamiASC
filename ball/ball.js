<script>
var x = 50;
var y = 50;
var vx = 0;
var vy = 0;

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,10);
function setup(){
    createCanvas(200, 200);
}

function draw()
{
  context.clearRect(0,0, 300,300);
  context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  // Boundary Logic
if( x<0 || x>300) dx=-dx; 
if( y<0 || y>300) dy=-dy; 
x+=dx; 
y+=dy;
}

</script>
<body onLoad="init();">
  <canvas id="myCanvas" width="300" height="300" >
  </canvas>
</body>