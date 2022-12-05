img = "";
noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound = loadSound("coin.wav");
	jump_sound = loadSound("jump.wav");
	kick_sound = loadSound("kick.wav");
	die_sound = loadSound("mariodie.wav")
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("Your model is loaded!");
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}