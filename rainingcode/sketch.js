var symbolSize = 30;
var streams = [];
function setup(){
	createCanvas(
		window.innerWidth,
		window.innerHeight);
	background(0);
	var x = 0;
	for(var i = 0;i <= width /symbolSize;i++){
		stream = new Stream();
		stream.generateSymbols(x,random(-1000,0));
		streams.push(stream);
		x+=symbolSize;
	}
	textSize(symbolSize);
}
function draw(){
	background(0);
	streams.forEach(function(stream){
		stream.render();
	})
}
function Symbol(x,y,speed,first){
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2,30));
	this.first = first;
	this.setToRandomSymbol = function(){
		if(frameCount % this.switchInterval == 0){
			this.value = String.fromCharCode(0x3190+round(random(0,15)));
		}
	}
	this.rain = function(){
		if(this.y >= height){
			this.y = 0;
		}else{
			this.y+=speed;
		}
	}
}

function Stream(){
	this.symbols = [];
	this.totalSymbols = round(random(5,20));
	this.speed = random(5,8);
	this.first = true;
	this.generateSymbols = function(x,y){
		for(var i = 0;i <=this.totalSymbols;i++){
			symbol = new Symbol(x,y,this.speed,this.first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			this.first = false;
		}
	}
	this.render = function(){
		this.symbols.forEach(function(symbol){
			if(symbol.first){
				fill(180,255,180);
			}else{
				fill(0,255,70);
			}
			text(symbol.value,symbol.x,symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		})
	}
}