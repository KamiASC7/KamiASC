<script src="../p5.min.js"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.js"></script>

<html>
  <head>
    <script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
  </body>
</html>

function setup() {

}

function draw() {
  ellipse(50, 50, 80, 80);
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
