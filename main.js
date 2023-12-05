function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	mario_gameover=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose', gotposes);
}
function gotposes(results){
if (results.length> 0){
console.log(results);
console.log('muñeca derecha x:'+ results[0].pose.rightWrist.x);
console.log('muñeca derecha y:'+ results[0].pose.rightWrist.y);	
M_derecha_x=results[0].pose.rightWrist.x;
M_derecha_y=results[0].pose.rightWrist.y;
}
}
function modelLoaded(){
console.log("modelo cargado");	
}
function draw() {
	game()
}
