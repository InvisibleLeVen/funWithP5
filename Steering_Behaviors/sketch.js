var font;
var vehicles = [];
var vehicles1 = [];
function preload(){
	font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup(){
	createCanvas(1200,300);
	background(51);
	//textFont(font);
	textSize(128);
	//fill(255);
	//noStroke();
	//text('VX-CLAY',120,200);
	var points = font.textToPoints('merry christmas',120,200);
	console.log(points);
	for(var i = 0;i <points.length;i++){
		var pt = points[i];
		/*stroke(255);
		strokeWeight(8);
		point(pt.x,pt.y);*/
		var vehicle = new Vehicle(pt.x,pt.y);
		vehicles.push(vehicle);
	}
}
function draw(){
	background(51);
	for(var i = 0; i <vehicles.length;i++){
		var v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}
}