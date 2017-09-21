export default function sketch2 (p) {

  var song;
  var button;
  var amp;

  p.setup = ()=>{
    p.createCanvas(500, 500);
    song = p.loadSound("Boom8081.wav", p.loaded);
    amp = new p.p5.Amplitude();
    p.background(51);

  }


  p.loaded = ()=>{
    button = p.createButton("play");
    button.mousePressed(togglePlaying);
  }

  p.draw = ()=> {
    p.background(70);

    var vol = amp.getLevel();
    var diam = p.map(vol, 0, 0.1, 20, 500);

    p.fill(255, 0, 255);
    p.ellipse(p.width / Math.floor(Math.random()*10), p.height / 2, diam, diam);

    p.fill(255, 60, 255);
    p.ellipse(p.width / 3, p.height / 3, diam, diam);

    p.fill(255, 60, 255);
    p.ellipse(p.width / 4, p.height / 5, diam, diam);
  }


  function togglePlaying() {
    if (!song.isPlaying()) {
      song.play();
      song.setVolume(0.3);
      button.html("pause");
    } else {
      song.stop();
      button.html("play");
    }
  }
}
