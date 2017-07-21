

var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(720, 360);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = [];
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
}  
  spacer = 10;
  noLoop();  

function draw() {
  background(0);
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}
var rows = 10;
var cols = 10;
var squareSize = 50;


for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    
		square.id = 's' + j + i;			
		
		var leftPosition = i * squareSize;			
		
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}



var layout = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				];

				
	function mouseClicked(){	
        if (gameBoard[row][col] === 0) {
			e.target.style.background = 'blue';

			gameBoard[row][col] = 3;
			
		} else if (gameBoard[row][col] === 1) {
			e.target.style.background = 'red';
			
			gameBoard[row][col] = 2;
			
			hitCount++;
	 }		
}