function Planet(r,d,o){
	this.radius = r;
	this.angle = random(TWO_PI);
	this.disdance = d;
	this.planets = [];
	this.orbitSpeed = o;
	this.spwanMoon = function(num,level){
		for(var i = 0;i< num;i ++){
			this.planets[i] = new Planet(this.radius*0.5,random(75,150/level),random(-0.02,0.02));
			if(level < 5){
				this.planets[i].spwanMoon(5,++level);
			}
		}
	}

	this.orbit = function(){
		this.angle += this.orbitSpeed;
		for(var i = 0;i< this.planets.length;i ++){
			this.planets[i].orbit();
		}
	}

	this.show = function(){
		push();
		rotate(this.angle);
		translate(this.disdance,0);
		fill(255,100);
		ellipse(0,0,this.radius,this.radius);
		for(var i = 0;i< this.planets.length;i ++){
			this.planets[i].show();
		}
		pop();
	}
}