var tree = [];
var leaves = [];
var count = 0;
function setup(){
	createCanvas(400,400);
	var a = createVector(width/2,height);
	var b = createVector(width/2,height-100);
	var root = new Branch(a,b);
	tree[0] = root;
}
function mousePressed(){
	for(let i = tree.length-1;i>=0;i--){
		if(!tree[i].finish){
			tree.push(tree[i].branchA());
			tree.push(tree[i].branchB());
		}
		tree[i].finish = true;
	}
	if(count === 5){
		for(let i = tree.length-1;i>=0;i--){
			if(!tree[i].finish){
				leaves.push(tree[i].end.copy());
			}
		}
	}
	count++;
}
function draw(){
	background(51);
	for(let i = 0;i < tree.length;i++){
		tree[i].show();
		//tree[i].jitter();
	}
	for(let i = 0;i < leaves.length;i++){
		fill(255,0,100,100);
		ellipse(leaves[i].x,leaves[i].y,8,8);
		leaves[i].y +=random(0,2);
		leaves[i].x +=random(0,2);
	}
}