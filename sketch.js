//let symmetry = 3;//change to alter number of reflections
let radial = false;

let strokeThickness = 2;
let saveButton;
let clearButton;
let rotSym;
let radSym;
let slider;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  angleMode(DEGREES);
  //strokeWeight(5);

  clearButton = createButton('Clear');
  clearButton.position(width / 10 - clearButton.width / 10, 970);
  clearButton.mousePressed(clearScreen);
  clearButton.class("clearButton");

  saveButton = createButton('Save');
  saveButton.position(width / 3 - saveButton.width / 3, 970);
  saveButton.mousePressed(saveImg);
  saveButton.class("saveButton");

  rotationalButton = createButton('Rotational');
  rotationalButton.position(width / 1.7 - rotationalButton.width / 1.7, 970);
  rotationalButton.mousePressed(rotateSymmetry);
  rotationalButton.class("rotationalButton");

  radialButton = createButton('Radial');
  radialButton.position(width / 1.12 - radialButton.width / 1.12, 970);
  radialButton.mousePressed(radialSymmetry);
  radialButton.class("radialButton");

  slider = createSlider(2, 15, 6, 1);
}

function draw() {

  let val = slider.value(); //
  let angle = 360 / val;
  
  translate(width / 2, height / 2);
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;


  //fill('red');
  //ellipse(0,0, mouseX);


  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (mouseIsPressed) {
      for (let i = 0; i < val; i++) {
        rotate(angle);
        strokeWeight(strokeThickness);
        line(mx, my, pmx, pmy);

        if (radial == true) {
          push();
          scale(1, -1);
          line(mx, my, pmx, pmy);
          pop();
        }
      }
    }
    if (key === '1') {
      strokeThickness = 1;
    } else if (key === '2') {
      strokeThickness = 2;
    } else if (key === '3') {
      strokeThickness = 3;
    } else if (key === '4') {
      strokeThickness = 4;
    } else if (key === '5') {
      strokeThickness = 5;
    }
  }
// if(radial == true) {
//   console.log('symmetry: radial');
// } else {
//   console.log('symmetry: rotational');
// }
  
}


function saveImg() {
  saveCanvas('fileName', 'png');
}

function clearScreen() {
  background(220);
}

function rotateSymmetry() {
  radial = false; //turns on rotational symmetry drawing
}

function radialSymmetry() {
  radial = true; //turns on radial symmetry drawing
}