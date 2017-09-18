
var cols, rows;
var scl = 20;
var w = 1400;
var h = 1500;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 1; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.05;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(50);
  translate(0, 50);
  rotateX(-PI/3);
  fill(700, 200, 80, 200);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+0.9)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}


// sketch2

// var song;
// var button;
// var amp;
//
// function setup() {
//   createCanvas(500, 500);
//   song = loadSound("Boom8081.wav", loaded);
//   amp = new p5.Amplitude();
//   background(51);
//
// }
//
// console.log();
//
// function loaded() {
//   button = createButton("play");
//   button.mousePressed(togglePlaying);
// }
//
// function draw() {
//   background(70);
//
//   var vol = amp.getLevel();
//   var diam = map(vol, 0, 0.1, 20, 500);
//
//   fill(255, 0, 255);
//   ellipse(width / Math.floor(Math.random()*10), height / 2, diam, diam);
//
//   fill(255, 60, 255);
//   ellipse(width / 3, height / 3, diam, diam);
//
//   fill(255, 60, 255);
//   ellipse(width / 4, height / 5, diam, diam);
// }
//
//
// function togglePlaying() {
//   if (!song.isPlaying()) {
//     song.play();
//     song.setVolume(0.3);
//     button.html("pause");
//   } else {
//     song.stop();
//     button.html("play");
//   }
// }
