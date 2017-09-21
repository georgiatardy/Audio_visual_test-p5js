export default function sketch (p) {

var cols, rows;
var scl = 20;
var w = 1400;
var h = 1500;

var flying = 0;

var terrain = [];

p.setup = function(){
  p.createCanvas(600, 600, p.WEBGL);
  cols = w / scl;
  rows = h/ scl;p.ds

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 1; //specify a default value for now
    }
  }
}

p.draw = function(){

  flying -= 0.05;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  p.background(50);
  p.translate(0, 50);
  p.rotateX(-p.PI/3);
  p.fill(700, 200, 80, 200);
  p.translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    p.beginShape(p.TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      p.vertex(x*scl, y*scl, terrain[x][y]);
      p.vertex(x*scl, (y+0.9)*scl, terrain[x][y+1]);
    }
    p.endShape();
  }
}
};
