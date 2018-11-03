// Javacript file for patatap project

var circles = [];
var keyData = {
  a: {
    color: "#ca67e5",
    sound: new Howl({
      src: ['assets/sounds/bubbles.mp3']
    })
  },
  s: {
    color: "#34ead7",
    sound: new Howl({
      src: ['assets/sounds/clay.mp3']
    })
  },
  d: {
    color: "#7ad660",
    sound: new Howl({
      src: ['assets/sounds/confetti.mp3']
    })
  },
  f: {
    color: "#0a25aa",
    sound: new Howl({
      src: ['assets/sounds/corona.mp3']
    })
  },
  g: {
    color: "#2790c0",
    sound: new Howl({
      src: ['assets/sounds/dotted-spiral.mp3']
    })
  },
  h: {
    color: "#8f9a41",
    sound: new Howl({
      src: ['assets/sounds/flash-1.mp3']
    })
  },
  j: {
    color: "#2f8862",
    sound: new Howl({
      src: ['assets/sounds/flash-2.mp3']
    })
  },
  k: {
    color: "#26469d",
    sound: new Howl({
      src: ['assets/sounds/flash-3.mp3']
    })
  },
  l: {
    color: "#998d48",
    sound: new Howl({
      src: ['assets/sounds/glimmer.mp3']
    })
  },
  q: {
    color: "#ea0588",
    sound: new Howl({
      src: ['assets/sounds/moon.mp3']
    })
  },
  w: {
    color: "#22b5c8",
    sound: new Howl({
      src: ['assets/sounds/pinwheel.mp3']
    })
  },
  e: {
    color: "#218d4e",
    sound: new Howl({
      src: ['assets/sounds/piston-1.mp3']
    })
  },
  r: {
    color: "#ed6623",
    sound: new Howl({
      src: ['assets/sounds/piston-2.mp3']
    })
  },
  t: {
    color: "#d9b8b3",
    sound: new Howl({
      src: ['assets/sounds/piston-3.mp3']
    })
  },
  y: {
    color: "#eeb771",
    sound: new Howl({
      src: ['assets/sounds/prism-1.mp3']
    })
  },
  u: {
    color: "#e8d9f5",
    sound: new Howl({
      src: ['assets/sounds/prism-2.mp3']
    })
  },
  i: {
    color: "#f038f0",
    sound: new Howl({
      src: ['assets/sounds/prism-3.mp3']
    })
  },
  o: {
    color: "#34762f",
    sound: new Howl({
      src: ['assets/sounds/splits.mp3']
    })
  },
  p: {
    color: "#6ca193",
    sound: new Howl({
      src: ['assets/sounds/squiggle.mp3']
    })
  },
  z: {
    color: "#a1483e",
    sound: new Howl({
      src: ['assets/sounds/strike.mp3']
    })
  },
  x: {
    color: "#ef23ee",
    sound: new Howl({
      src: ['assets/sounds/suspension.mp3']
    })
  },
  c: {
    color: "#dcec82",
    sound: new Howl({
      src: ['assets/sounds/timer.mp3']
    })
  },
  v: {
    color: "#e8c23d",
    sound: new Howl({
      src: ['assets/sounds/ufo.mp3']
    })
  },
  b: {
    color: "#78f75f",
    sound: new Howl({
      src: ['assets/sounds/veil.mp3']
    })
  },
  n: {
    color: "#1284fc",
    sound: new Howl({
      src: ['assets/sounds/wipe.mp3']
    })
  },
  m: {
    color: "#cd2f35",
    sound: new Howl({
      src: ['assets/sounds/zig-zag.mp3']
    })
  }
}

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var circle = new Path.Circle(point, 300);
  if (keyData[event.key]) {
    circle.fillColor = keyData[event.key].color
    keyData[event.key].sound.play();
    circles.push(circle);
  }

}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(.9);
    if (circles[i].area < 1) {
      circles[i].remove();
      circles.splice(i, 1);
    }
  }
}