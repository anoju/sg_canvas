





function Triangle (a, b, c, color) {

  this.pointA = a;
  this.pointB = b;
  this.pointC = c;
  this.color = (color === undefined) ? "#ff5000" : utils.parseColor(color);
  this.lineWidth = 1;
  this.alpha = 1;
  this.scale = 0.5
}

Triangle.prototype.draw = function (context) {
  context.save();
  context.scale(this.scale, this.scale);
  context.lineWidth = this.lineWidth;
  context.fillStyle = context.strokeStyle = utils.colorToRGB(this.color, this.alpha);
  context.beginPath();
try{
  context.moveTo(this.pointA.getScreenX(), this.pointA.getScreenY());
  context.lineTo(this.pointB.getScreenX(), this.pointB.getScreenY());
  context.lineTo(this.pointC.getScreenX(), this.pointC.getScreenY());
}catch(e){}
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
	context.stroke();
  }
  context.restore();
};



var _count = 0;
var vpX = 1;
var vpY = 1;
var _shape1;
var _shape2;
var _shape3;
var _loaded = false;

function ShapeAssets($canvas, $color, $rotate){
	this.points = [new Point3d( -50, -50, -1), new Point3d(  50, -50, -1), new Point3d(   0, 50, -1)];
	this.triangles = [];
	this.fl = 250;
	this.vpX = 1;
	this.vpY = 1;
	this.angleX = 0;
	this.angleY = 0;
	this._count = 0;
	this.canvas = $canvas;
	this.context = $canvas.getContext('2d')
	this.color = $color;
	this.rotate = $rotate;
}

ShapeAssets.prototype.move = function ($point){
	$point.rotateX(this.rotate);
	$point.rotateY(this.rotate);
	$point.rotateZ(this.rotate);
}
ShapeAssets.prototype.draw = function ($triangle){
	$triangle.draw(this.context);
}

ShapeAssets.prototype.render = function (){
	this.angleX = (this.vpY) * 0.00005;
	this.angleY = (this.vpX) * 0.00005;
	for(var i = 0;i<this.points.length;i++){
		this.move(this.points[i]);
	}
	for(var i = 0;i<this.triangles.length;i++){
		this.draw(this.triangles[i]);
	}
}

ShapeAssets.prototype.init = function (){
	var points = this.points;
	var triangles = this.triangles;

	this.points.forEach(function (point) {
		point.setVanishingPoint(this.vpX, this.vpY);
		point.setCenter(200, 200, 200);
	});
	triangles[0]  = new Triangle(points[0], points[1], points[2], this.color);
	//console.log(triangles[0]);
}

_shape1 = new ShapeAssets(document.getElementById('canvas5'), "#ff5000", 0.01);
_shape1.init();

_shape2 = new ShapeAssets(document.getElementById('canvas6'), "#1cebc5", 0.03);
_shape2.init();

_shape3 = new ShapeAssets(document.getElementById('canvas7'), "#9730a6", -0.005);
_shape3.init();

_shape4 = new ShapeAssets(document.getElementById('canvas8'), "#ffffff", -0.005);
_shape4.init();



function paticleInit(){
	_loaded = true;
	 (function drawFrame11 () {
		window.requestAnimationFrame(drawFrame11);
		if(!_loaded) return;
		_shape1.context.clearRect(0, 0, _shape1.canvas.width, _shape1.canvas.height);
		_shape1.render();

		_shape2.context.clearRect(0, 0, _shape2.canvas.width, _shape2.canvas.height);
		_shape2.render();

		_shape3.context.clearRect(0, 0, _shape3.canvas.width, _shape3.canvas.height);
		_shape3.render();

		_shape4.context.clearRect(0, 0, _shape4.canvas.width, _shape4.canvas.height);
		_shape4.render();

	  }());
}





function Ball3d (radius, color, $canvas) {
  if (radius === undefined) { radius = 40; }
  if (color === undefined) { color = "#ff0000"; }
  this.x = 0;
  this.y = 0;
  this.xpos = 0;
  this.ypos = 0;
  this.zpos = 0;
  this.radius = radius;
  this.vx = 0;
  this.vy = 0;
  this.vz = 0;
  this.mass = 1;
  this.rotation = 0;
  this.scaleX = 0.1;
  this.scaleY = 0.11;
  this.color = utils.parseColor(color);
  this.lineWidth = 1;
  this.visible = true;
  this.canvas = $canvas;
}

Ball3d.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  try{
  context.drawImage(this.canvas, 0, 0, 600, 600);
  }catch(e){}
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
	context.stroke();
  }
  context.restore();
};















//////////////////////////////////////////////////
var _active2 = false;
  var canvas = document.getElementById('intro_canvas_ie99'),
	  context = canvas.getContext('2d'),
	  mouse = utils.captureMouse(document.getElementById('intro_canvas_ie9')),
	  balls = [],
	  numBalls = 300,
	  fl = 250,
	  vpX = canvas.width / 2,
	  vpY = canvas.height / 2,
	  angleX, angleY;
var canvasArr = [_shape1.canvas, _shape2.canvas, _shape3.canvas, _shape4.canvas]

  for (var ball, i = 0; i < 30; i++) {
	ball = new Ball3d();
	var c = Math.floor(Math.random()*4)
	ball.canvas = canvasArr[c]
	ball.xpos = Math.random() * 5000 - 2500;
	ball.ypos = Math.random() * 1000 - 500;
	ball.zpos = Math.random() * 4000 - 2000;
	balls.push(ball);
  }

function addPaticle9(){
	  for (var ball, i = 0; i < numBalls; i++) {
		ball = new Ball3d();
		var c = Math.floor(Math.random()*4)
		ball.canvas = canvasArr[c]
		ball.xpos = Math.random() * 2000 - 1000;
		ball.ypos = Math.random() * 1000 - 500;
		ball.zpos = Math.random() * 4000 - 2000;
		balls.push(ball);
	  }
}



  function rotateX (ball, angle) {                      
	var position = [ball.xpos, ball.ypos, ball.zpos],
		sin = Math.sin(angle),
		cos = Math.cos(angle),
		xRotMatrix = [];
	
	xRotMatrix[0] = [1,    0,   0];
	xRotMatrix[1] = [0,  cos, sin];
	xRotMatrix[2] = [0, -sin, cos];
	
	var result = matrixMultiply(position, xRotMatrix);
	ball.xpos = result[0];
	ball.ypos = result[1];
	ball.zpos = result[2];
  }
  
  function rotateY (ball, angle) {
	var position = [ball.xpos, ball.ypos, ball.zpos],
		sin = Math.sin(angle),
		cos = Math.cos(angle),
		yRotMatrix = [];
	
	yRotMatrix[0] = [ cos, 0, sin];
	yRotMatrix[1] = [   0, 1,   0];
	yRotMatrix[2] = [-sin, 0, cos];
	
	var result = matrixMultiply(position, yRotMatrix);
	ball.xpos = result[0];
	ball.ypos = result[1];
	ball.zpos = result[2];
  }

  function matrixMultiply (matrixA, matrixB) {
	var result = [];
	result[0] = matrixA[0] * matrixB[0][0] +
				matrixA[1] * matrixB[1][0] +
				matrixA[2] * matrixB[2][0];

	result[1] = matrixA[0] * matrixB[0][1] +
				matrixA[1] * matrixB[1][1] +
				matrixA[2] * matrixB[2][1];

	result[2] = matrixA[0] * matrixB[0][2] +
				matrixA[1] * matrixB[1][2] +
				matrixA[2] * matrixB[2][2];
	return result;
  }

  function setPerspective (ball) {
	if (ball.zpos > -fl) {
	  var scale = fl / (fl + ball.zpos);
	  ball.scaleX = ball.scaleY = scale;
	  ball.x = vpX + ball.xpos * scale;
	  ball.y = vpY + ball.ypos * scale;
	  ball.visible = true;
	} else {
	  ball.visible = false;
	}
  }

  function move (ball) {
	rotateX(ball, angleX);
	rotateY(ball, angleY);
	setPerspective(ball);
  }

  function zSort (a, b) {
	return (b.zpos - a.zpos);
  }
  
  function draw (ball) {
	if (ball.visible) {
	  ball.draw(context);
	}
  }

  (function drawFrame3 () {
	window.requestAnimationFrame(drawFrame3, canvas);
	context.clearRect(0, 0, canvas.width, canvas.height);
	//console.log(mouse.x, mouse.y);
	
	var v = vpY;
	try{
		if(_active2){
			vpX += 50
			vpY += 50
		}
	}catch(e){}
	
	angleY = (mouse.y - vpY) * 0.00003;
	angleX = (0 - vpX) * 0.00002;
	balls.forEach(move);
	balls.sort(zSort);
	balls.forEach(draw);
  }());



























/************************************************************************************************
 * Ball
*************************************************************************************************/
function Ball (color, $index, $kIndex) {
  this.x = 0;
  this.y = 0;
  this.tx = 0;
  this.ty = 0;
  this.v = 0;
  this.width = 0;
  this.height = 0;
  this.size = 100;
  this.stop = false;
  this.vx = 0;
  this.vy = 0;
  this.mass = 1;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = utils.parseColor(color);
 // this.color =  utils.colorToRGB(color, 1);
  this.lineWidth = 1;
  this.down = false;
  this.box = null;
  this.box_x = 0;
  this.box_y = 0;
  this.blend = "normal";
  this.shape = $index;
  this.draws = true;
  this.opacity = 1;
  this.index = $kIndex;
  this.scale = 1;
}

Ball.prototype.draw = function (context) {
	//context.clearRect ( 0 , 0 , this.width , this.height );
	if(this.draws == false) return;
	
	context.save();
	context.globalCompositeOperation = this.blend;
	context.translate(this.x, this.y);
	context.rotate(this.rotation)
	context.scale(this.scale, this.scale);
	context.beginPath();

	if(this.shape == 1){
		context.moveTo(this.width/2, 0);
		context.lineTo(this.width, this.height);
		context.lineTo(0, this.height);
	}

	if(this.shape == 0){
		context.moveTo(0, 0);
		context.lineTo(this.width/2, this.height);
		context.lineTo(this.width, 0);
	}

	context.globalAlpha = this.opacity;
	context.closePath();
	
	//console.log(this.color);
	//if(this.color){
	context.fillStyle = this.color;
	context.fill();
	//this.opacitys(this.opacity);
	//}
	context.restore();
	
	//context.lineWidth = this.lineWidth;
	//context.fillStyle = this.color;
	//context.stroke();
};

Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};

Ball.prototype.opacitys = function (alpha) {
	color = this.color;
	if (typeof color === 'string' && color[0] === '#') {
		color = window.parseInt(color.slice(1), 16);
	  }
	  alpha = (alpha === undefined) ? 1 : alpha;
	  var r = color >> 16 & 0xff,
		  g = color >> 8 & 0xff,
		  b = color & 0xff,
		  a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha);
	  if (a === 1) {
		return "rgb("+ r +","+ g +","+ b +")";
	  } else {
		return "rgba("+ r +","+ g +","+ b +","+ a +")";
	  }
 };
 ///////////////////////////////////////////////////////////////////////////////////////////
 var ca = [0xff5000, 0x1cebc5, 0x9730a6, 0x73dcff];
var mapList2  = [
	{v:0,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},
	{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[1], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},

	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[1], n:1},
	{v:1,c:ca[1], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},

	{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},

	{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},

	{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:1,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},
	{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},

	{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},
	
];
var mapList1 = [
	{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},
	{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[3], n:2},{v:1,c:ca[0], n:3},
	{v:1,c:ca[0], n:4},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:6},{v:1,c:ca[3], n:6},{v:0,c:ca[3], n:1},
	{v:0,c:ca[0], n:1},{v:1,c:ca[3], n:2},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},

	{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},
	{v:1,c:ca[3], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},
	{v:0,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},
]

// clearInterval(_interval);
var _interval = setInterval(auto, 3000)
var _autoindex = 0;
function auto(){
	_autoindex++;
	var idx = _autoindex%2;
	if(idx == 0){
		ani1();
	}else{
		ani2();
	}
}

function ani1(){
	var k = 0;
	_sw = $(window).width();

	if(_mobile){
		try{
		$(".log").text("ani1 : "+_sw)
		}catch(e){}
	}

	for(var i = 0;i<9;i++){
		var gap = i%19 == 0 ? 0 : -48;
		for(var j = 0;j<19;j++){
			if(mapList1[k] == null) continue;
			var ball = k%2 == 0 ? new Ball( mapList1[k].c, 0, k) : new Ball( mapList1[k].c, 1, k);
			ball.draws = mapList1[k].v > 0 ? true : false;
			ball.width = _width;
			ball.height = _height;
			ball.tx = j*(_width/2-1) + gap + 1320;
			ball.ty = i*(_height-1) + 100;
			ball.opacity = 0;

			var dir = k%2 == 0 ? 10 : -10;
			ball.x = j*(_width/2) + gap + 1320;
			ball.y = i*_height + 100 + dir;
			TweenMax.to(ball, 0.5, {delay:Math.random()*1 + 0.0, y:ball.ty, opacity:1,  ease:Sine.easeInOut});
			_balls[k] = ball;
			k++;
		}
	}
}

function ani2(){
	_sw = $(window).width();
	var k = 0;
	for(var i = 0;i<9;i++){
		var gap = i%19 == 0 ? 0 : -48;
		for(var j = 0;j<19;j++){
			if(mapList2[k] == null) continue;
			var ball = k%2 == 0 ? new Ball(mapList2[k].c, 0, k) : new Ball(mapList2[k].c, 1, k);
			ball.draws = mapList2[k].v > 0 ? true : false;
			ball.width = _width;
			ball.height = _height;
			var dir = k%2 == 0 ? 10 : -10;
			var g = k < 19 ? -48 : 0;
			ball.tx = j*(_width/2-1) + gap + 110 + g  + 1200
			ball.ty = i*(_height-1) + 100;
			ball.x = j*(_width/2) + gap + 110 + g + 1200;
			ball.y = i*_height + 100 + dir;
			ball.opacity = 0;
			TweenMax.to(ball, 0.5, {delay:Math.random()*1 + 0.0, y:ball.ty, opacity:1,  ease:Sine.easeInOut});
			_balls[k] = ball;
			k++;
		}
	}
}

function paticleOut(){
	

	var k = 0;
	for(var i = 0;i<_balls.length;i++){
		var ball = _balls[i];
		var angle = 3*i;
		var radian = angle*Math.PI/180;
		var tx = Math.sin(radian)*4000;
		var ty = Math.cos(radian)*4000;

		TweenMax.to(ball, (Math.random()*1) + 0.01, {delay:0.2, x:tx, y:ty, ease:Sine.easeInOut});
	}


}



function onDocumentMouseUp(e){
	e.preventDefault();
	
	var idx = Number($(_tg).attr("idx"));
	
	 //
	 
	if(_active){
		_lineIndex = -1;
		_active2 = true;
		paticleOut();
		clearInterval(_interval);
		setTimeout(function (){	
			
				$(_tg).hide();
				if(idx == 0) location.href="/wp/";
				if(idx == 1) location.href="/gnuboard4/";
				if(idx == 2) location.href="/portfolio/";
		
		}, 500);
		return;
	}

	$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name.png"});

	_down = false;
	_tg = null;
}

function onDocumentMouseDown(e){
	e.preventDefault();
	var tg = e.currentTarget;
	_tg = tg;
	_down = true;

	_movePoint = {x:0, y:0}
	_startPoint.x = e.clientX;
	_startPoint.y = e.clientY;
	_tgPoint.x = $(_tg).offset().left - $(window).width()/2 + 300;
	_tgPoint.y = $(_tg).offset().top - 550;
	//console.log(_tgPoint);
	//console.log(_tg);
	if(!_paticleLoad){
		addPaticle9();
		_paticleLoad = true;
	}
	
	
	var idx = Number($(_tg).attr("idx"));
	if(idx == 0){
		$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name3.png"});
	}
	if(idx == 1){
		$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name2.png"});
	}
	if(idx == 2){
		$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name1.png"});
	}
}



try{
var image = document.getElementById('intro_canvas_ie9');
var imageContext = image.getContext( '2d' );
}catch(e){}
var _width = 16*3;
var _height = 14*3;
var _balls = [];


var line1 = new Image();
line1.src = "./resources/images/intro/va.png";
line1.onload = function () {
	//console.log("line1: "+line1);
}

var line2 = new Image();
line2.src = "./resources/images/intro/va1.png";
line2.onload = function () {
	//console.log("line1: "+line1);
}

var line3 = new Image();
line3.src = "./resources/images/intro/va2.png";
line3.onload = function () {
	//console.log("line1: "+line1);
}

var btn1 = new Image();
btn1.src = "./resources/images/intro/btn01.png";
btn1.onload = function () {
	//console.log("btn1: "+btn1);
}

var btn2 = new Image();
btn2.src = "./resources/images/intro/btn02.png";
btn2.onload = function () {
	//console.log("line1: "+line1);
}
var btn3 = new Image();
btn3.src = "./resources/images/intro/btn03.png";
btn3.onload = function () {
	//console.log("line1: "+line1);
}


$(document).ready(function (){
	paticleInit();

	$(".main_btn").mouseenter(function (){
		$(".main_btn").find("img").attr({"src":"./resources/images/intro/ie8_intro_skip_on.png"});
	}).mouseleave(function (){
		$(".main_btn").find("img").attr({"src":"./resources/images/intro/ie8_intro_skip_off.png"});
	});


	$("#btn_ci").mouseover(function (){
		lineover(0);
	}).mouseout(function (){
		lineover(-1);
	})

	$(window).resize(resize);
	resize();

	ani1();


	
});

var _sw = 0;
var _sh = 0;
function resize(){
	_sw = $(window).width();
	_sh = $(window).height();

	//$(image).width(_sw);
	//$(image).height(_sh);
}


function lineover($idx){
	if($idx == 0){
		
	}

	if($idx == -1){

	}
}

var arr = ["btn_ci", "btn_recruit", "btn_group"]
for(var i = 0;i<3;i++){
	var domElement = document.getElementById(arr[i]);
	try{
	window.addEventListener( 'mousemove', onDocumentMouseMove, false );
	domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	window.addEventListener( 'mouseup', onDocumentMouseUp, false );
	domElement.addEventListener( 'mouseover', onDocumentMouseOver, false );
	domElement.addEventListener( 'mouseout', onDocumentMouseOut, false );
	}catch(e){}
}

var _down = false;
var _tg = null;
var _lineIndex = 0;
var _active = false;
var _over = false;
var _line_pointer = {x:0, y:0}
function onDocumentMouseOver(e){
	e.preventDefault();
	_over = true;
	//_down = true;

	var tg = e.currentTarget;
	_tg = tg;
	_lineIndex = Number($(_tg).attr("idx"));


	onDocumentMouseMove(e)
}
function onDocumentMouseOut(e){
	e.preventDefault();
	_over = false;
	
}
function onDocumentMouseMove(e){
	e.preventDefault();
	_active = false;

	
	if(_down){
		_line_pointer.x = e.clientX;
		_line_pointer.y = e.clientY;

		_movePoint.x = _line_pointer.x - _startPoint.x;
		_movePoint.y = _line_pointer.y - _startPoint.y;

		var harf = $(window).width()/2;
		var w = $(window).width()/2 - 600/2;
		var tw = $(_tg).width()/2;
		var tx = e.clientX-w - tw;
		var ty = e.clientY - 160;
		
		if(e.clientX > harf-200 && e.clientX < harf +200){
			if(e.clientY > 100 && e.clientY < 600){
				_active = true;
				var idx = Number($(_tg).attr("idx"));
				
			}
		}
		//$(_tg).css({"left":e.clientX-w - tw, "top":e.clientY - 660})
		
		var leftValue = e.clientX-w - tw;
		var topValue = e.clientY - 660;
		leftValue = _tgPoint.x + _movePoint.x;
		topValue = _tgPoint.y + _movePoint.y;

		$(_tg).css({"left":leftValue, "top":topValue})
	}
}

var _tgPoint = {x:0, y:0}
var _startPoint = {x:0, y:0}
var _movePoint = {x:0, y:0}
var _paticleLoad = false;



var _scale = 1;
(function drawFrame () {
///////////////////////////////////////////////////////
window.requestAnimationFrame(drawFrame);
if(imageContext == null) return;
for(var i = 0;i<_balls.length;i++){
	imageContext.clearRect (0 , 0 , 3000 , 2000);

	if(_active2){
		_scale +=0.0005;
		imageContext.scale(1.3,1.3);
		//imageContext.rotation(Math.PI/180*60)
		imageContext.translate(-355,-50);
	}

	for(var i = 0;i<_balls.length;i++){
		var ball = _balls[i];
			 ball.draw(imageContext);
	}

	if(_over){
		var sx = _line_pointer.x + 0;
		var sy = _line_pointer.y + 10;
		if(_tg == null) return;
		
		var gap = 0;
		if(_lineIndex == 0 ) gap = 180;
		if(_lineIndex == 1 ) gap = -60;
		if(_lineIndex == 2 ) gap = -60;


		sx = $(_tg).offset().left +  1500 -  $(window).width()/2;;
		sy = $(_tg).offset().top + 5;
		imageContext.save();
		imageContext.beginPath();
		imageContext.lineWidth = 2;
		imageContext.moveTo(sx + gap, sy);
		imageContext.lineTo( 1500, 300);
		

		
		if(_lineIndex == 0 ) {
			var gradient=imageContext.createPattern(line3, "repeat");
			imageContext.strokeStyle = gradient;
			imageContext.stroke();
			imageContext.restore();
			imageContext.save();
			imageContext.translate(sx+ 100, sy - 25);
			//imageContext.drawImage(btn3, 63, 14);
		}
		if(_lineIndex == 1 ) {
			var gradient=imageContext.createPattern(line1, "repeat");
			imageContext.strokeStyle = gradient;
			imageContext.stroke();
			imageContext.restore();
			imageContext.save();

			imageContext.translate(sx - 80, sy - 25);
			//imageContext.drawImage(btn2, 64, 14);
		}
		if(_lineIndex == 2 ) {
			var gradient=imageContext.createPattern(line2, "repeat");
			imageContext.strokeStyle = gradient;
			imageContext.stroke();
			imageContext.restore();
			imageContext.save();

			imageContext.translate(sx - 80, sy - 25);
		//	imageContext.drawImage(btn1, 63, 14);
		}
		
		imageContext.restore();
	}


	
}


///////////////////////////////////////////////////////
}());














