var img;
function preload() {
  createCanvas(700,700);
  img = loadImage('IMG_0463.JPG');
}
function setup() {
  image(img, 0, 0);
}