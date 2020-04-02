

function subClick($idx){
	$(".img").find("img").attr({"src":"./resources/images/intro/ie8_paticle02.png"});
	//console.log($idx);
	if($idx == 0){
		$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name3.png"});
	}
	if($idx == 1){
		$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name2.png"});
	}
	if($idx == 2){
		$(".name").find("img").attr({"src":"./resources/images/intro/ie8_intro_name1.png"});
	}
	setTimeout(function (){		
		if($idx == 0) location.href="/wp/";
		if($idx == 1) location.href="/gnuboard4/";
		if($idx == 2) location.href="/portfolio/";
	}, 300)
}




var container, stats, _plane;
var camera, scene, sceneContainer, renderer, objects, projector, controls;
var _plans = [];
var _array = [];
var _textPaticles = [];
var _containers = [];
var _count = 1;
var _count2 = 10;
var _count3 = 10;
var _total = 3000;
var mouseX = 0, mouseY = 0;
var _inter = 0;
var _interCount = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var _texts = [];
var mouse = new THREE.Vector2(),
offset = new THREE.Vector3(),
INTERSECTED, SELECTED;


var _clickBtn = -1;
var _down = false;
var limit = 1000;
var sRate = 0.01;
var eRate = 0.95;
var _ball = new Ball();
var triContainer;
var _btn;
var _btns = [];
var plane;
var _tilePaticles = [];
var _copyArray = [];
var _next = false;
var _default = false;
var _btn_line;
var _btn_over = false;
var _moveIndex = 0;
var _introtxtArr = [];
var _introInterval;
var _out = false;
var _ready = false;
var _size = 0;
var colors = [0xff5000, 0x1cebc5, 0x9730a6, 0x73dcff];
var ca = [0xff5000, 0x1cebc5, 0x9730a6, 0x73dcff];
var tile = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
];
var tile = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
];
var tile2 = [
	{view:1,color:0x1cebc5, count:1}, {view:1,color:0xff5000, count:2}, {view:1,color:0x9730a6, count:3}, {view:1,color:0x9730a6, count:4}, {view:1,color:0xff5001, count:5}, 
	{view:1,color:0x1cebc5, count:6}, {view:1,color:0x1cebc5, count:7}, {view:1,color:0xff5001, count:8}, {view:1,color:0x9730a6, count:9}, {view:1,color:0x9730a6, count:10}, {view:1,color:0xff5000, count:11}, 


	0, {view:1,color:0xff5000, count:20}, {view:1,color:0x1cebc5, count:19}, {view:1,color:0x1cebc5, count:18}, {view:1,color:0xff5000, count:17}, {view:1,color:0x9730a6, count:16}, {view:1,color:0x9730a6, count:15}, {view:1,color:0xff5000, count:14}, {view:1,color:0x1cebc7, count:13}, {view:1,color:0x1cebc7, count:12}, 0,


	0, 0, {view:1,color:0x9730a6, count:21}, {view:1,color:0x9730a6, count:22}, {view:1,color:0xff5000, count:23}, {view:1,color:0x1cebc6, count:24}, {view:1,color:0x1cebc6, count:25}, {view:1,color:0xff5000, count:26}, {view:1,color:0x9730a7, count:27}, 0, 0,
	0, 0, 0, {view:1,color:0x1cebc5, count:32}, {view:1,color:0xff5000, count:31}, {view:1,color:0x9730a6, count:30}, {view:1,color:0x9730a6, count:29}, {view:1,color:0xff5000, count:28}, 0, 0, 0,
	0, 0, 0, 0, {view:1,color:0xff5000, count:33}, {view:1,color:0x1cebc5, count:34}, {view:1,color:0x1cebc5, count:35}, 0, 0, 0, 0,
	0, 0, 0, 0, 0, {view:1,color:0x9730a6, count:36}, 0, 0, 0, 0, 0,
]

  var tile3 = [
	{view:1,color:colors[0], count:1}, {view:1,color:colors[0], count:2}, {view:1,color:colors[0], count:3}, {view:1,color:colors[0], count:4}, {view:1,color:colors[1], count:5}, 
	{view:1,color:colors[0], count:6}, {view:1,color:colors[0], count:7}, {view:1,color:colors[3], count:8}, {view:1,color:colors[3], count:9}, {view:1,color:colors[2], count:10}, {view:1,color:colors[2], count:11}, 


	0, {view:1,color:colors[0], count:20}, {view:1,color:colors[3], count:19}, {view:1,color:colors[0], count:18}, {view:1,color:colors[2], count:17}, {view:1,color:colors[0], count:16}, {view:1,color:colors[0], count:15}, {view:1,color:colors[0], count:14}, {view:1,color:colors[0], count:13}, {view:1,color:colors[0], count:12}, 0,


	0, 0, {view:1,color:colors[0], count:21}, {view:1,color:colors[2], count:22}, {view:1,color:colors[0], count:23}, {view:1,color:colors[0], count:24}, {view:1,color:colors[1], count:25}, {view:1,color:colors[0], count:26}, {view:1,color:colors[0], count:27}, 0, 0,
	0, 0, 0, {view:1,color:colors[2], count:32}, {view:1,color:colors[0], count:31}, {view:1,color:colors[0], count:30}, {view:1,color:colors[0], count:29}, {view:1,color:colors[3], count:28}, 0, 0, 0,
	0, 0, 0, 0, {view:1,color:colors[3], count:33}, {view:1,color:colors[2], count:34}, {view:1,color:colors[2], count:35}, 0, 0, 0, 0,
	0, 0, 0, 0, 0, {view:1,color:colors[2], count:36}, 0, 0, 0, 0, 0,
];
var tile4 = [
	{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},

	{v:1,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},
	{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},

	{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},

	{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},

	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[1], n:1},
	{v:1,c:ca[1], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[1], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},
	{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},
];
var tile5 = [
	{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[1], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:1,c:ca[2], n:1},
	{v:0,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[3], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[2], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},
	{v:1,c:ca[3], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:1,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[3], n:1},
	{v:0,c:ca[0], n:1},{v:1,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[1], n:1},{v:1,c:ca[3], n:1},{v:1,c:ca[0], n:1},
	{v:1,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},

	{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[3], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[1], n:1},{v:0,c:ca[3], n:1},{v:1,c:ca[1], n:1},
	{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[2], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},{v:0,c:ca[0], n:1},
]

if(_version < 10){
	_total = 10;
}

if(_version == 10){
	_total = 500;
}

if(_version > 9){
	init();
	animate();
}else{
	$(document).ready(function (){
		$(".ie8_wrap").show();
		$(".main_btn").mouseenter(function (){
			$(".main_btn").find("img").attr({"src":"./resources/images/intro/ie8_intro_skip_on.png"});
		}).mouseleave(function (){
			$(".main_btn").find("img").attr({"src":"./resources/images/intro/ie8_intro_skip_off.png"});
		})
	});
	$("body").css({"overflow-y":"scroll"})
}
function init() {
	container = document.createElement('div');
	document.body.appendChild(container);
	camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 5000 );
	camera.position.set( 0, 0, 600 );
	scene = new THREE.Scene();

	var material = new THREE.MeshBasicMaterial({
			side:THREE.DoubleSide,
			shading: THREE.SmoothShading,
			transparent : true
		  });
		var sceneContainer = new THREE.Mesh(new THREE.PlaneGeometry(window.innerWidth , window.innerHeight, 1), material);
		sceneContainer.position.x = -500;
		sceneContainer.position.y = 0;
		sceneContainer.position.z = 0;
		//scene.add(sceneContainer );

	try{
	controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	}catch(e){}

	for(var i = 0;i<_total;i++){
		var color = Math.floor(Math.random() * 40);
			colors = 0xffffff;
			//colors = 0xff641e;
			if(color > 0 && color < 10) colors = 0x1cebc5;
			if(color > 11 && color < 20) colors = 0xff641e;
			if(color == 21) colors = 0x9730a6;

		if(i < _total-0){
			var geometry = new THREE.Geometry();
				 geometry.vertices.push( new THREE.Vector3( -Math.random()*40,  Math.random()*20, 0 ) );
				 geometry.vertices.push( new THREE.Vector3( -Math.random()*20, -Math.random()*30, 0 ) );
				 geometry.vertices.push( new THREE.Vector3(  Math.random()*30, 0, 0 ) );
				 geometry.vertices.push( new THREE.Vector3( -10,  10, 0 ) );
				 geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) );
				 geometry.vertices.push( new THREE.Vector3(  10, 0, 0 ) );
				 geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
				 geometry.computeBoundingSphere();
			

			var material = new THREE.MeshBasicMaterial( { color: colors, overdraw:1,  wireframe: false,side:THREE.DoubleSide, opacity:1} );
			var plane = new THREE.Mesh( geometry, material );
			plane.position.x = Math.random()*2000 - 1000;
			plane.position.y = Math.random()*2000 - 1000;
			plane.position.z = Math.random()*100 - 50;
			
			plane.position.x = Math.random()*300 - 150;
			plane.position.y = Math.random()*100 - 50;
			plane.position.z = Math.random()*100 - 50;
		}else{
			if(color > 0 && color < 15) colors = 0x1cebc5;
			if(color > 16 && color < 30) colors = 0xff641e;
			
			var wire =  false;
			if(color > 32 && color < 40) wire = true;
			
			//var material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide, wireframe:false } );
			//var plane = new THREE.Mesh(  new THREE.TetrahedronGeometry(Math.random()*20 + 20, 0 ), material);
			var geometry = new THREE.CylinderGeometry( 20, 20, 20, 20, 1 );
			var material =  new THREE.MeshLambertMaterial( { color:0xffffff, wireframe:wire } );
			var plane = new THREE.Mesh( geometry, material );
		}
		plane.scale.x = plane.scale.y = 0.7
		_plans[i] = plane;
		_array[i] = new Ball(Math.random() * 1000, Math.random() * 1000);

		_array[i].ro_x = Math.random() * 0.03;
		_array[i].ro_y = Math.random() * 0.05;
		_array[i].ro_z = Math.random() * 0.07;
	}


	var light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1, 1, 1 );
	scene.add( light );

	var light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( -1, -1, -1 );
	scene.add( light );

	var light = new THREE.AmbientLight( 0xffffff );
	scene.add( light );
	
	_plane = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.25, transparent: true, wireframe: true } ) );
	_plane.visible = false;
	scene.add( _plane );


	setObj();
	setObj2();
	addBtn();

	projector = new THREE.Projector();
	renderer = new THREE.CanvasRenderer();
	//renderer = new THREE.WebGLRenderer({alpha:true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	
if(_version > 9){
	renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove2, false );
	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}
	window.addEventListener( 'resize', onWindowResize, false );


	for(var i = 0;i<30;i++){
		addPaticle();
		_interCount++;
	}
}

if(_version > 9){
	var btn3 = document.getElementById("btnsaa");
	document.addEventListener( 'mousemove', onDocumentMouseMove3, false );
	btn3.addEventListener( 'mousedown', onDocumentMouseDown3, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp3, false );
}else{
	$(document).ready(function (){
		$("#btnsaa").find("a").hide();
	});
	var btn3 = document.getElementById("btnsaa");
	//btn3.style.display = "none;"
}

function onDocumentMouseMove3(event){
	_moveIndex++;
	if(_clickBtn < 0){
		if(mouseX > -200 && mouseX < 200 && mouseY > -100 && mouseY < 400  ) {
			$("#btnsaa").hide();
		}else{
			$("#btnsaa").show();
		}
	}

	event.preventDefault();
	btn3.style.top = mouseY + windowHalfY - 50 + "px";
	btn3.style.left = mouseX + windowHalfX - 50 + "px";
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	if(_down && _clickBtn >-1){
		var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
		projector.unprojectVector( vector, camera );
		var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
		if ( _btns[_clickBtn] ) {
			var intersects = raycaster.intersectObject( plane );
			_btns[_clickBtn].position.copy( intersects[ 0 ].point.sub( offset ) );
			return;
		}

		var intersects = raycaster.intersectObjects( _btns );
		if ( intersects.length > 0 ) {
			if ( INTERSECTED != intersects[ 0 ].object ) {
				if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
				INTERSECTED = intersects[ 0 ].object;
				INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				plane.position.copy( INTERSECTED.position );
				plane.lookAt( camera.position );
			}
			container.style.cursor = 'pointer';

		} else {
			if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			INTERSECTED = null;
			container.style.cursor = 'auto';
		}
	}
}

function onDocumentMouseDown3(event){
	_down = true;
	_moveIndex = 0;
	event.preventDefault();
	_btn_line.material.opacity = 1;
	SELECTED = _btns[0];
	var idx = -1;
	if(mouseX < -300 && mouseY < 0) {
		idx = 0;
	}else 	if(mouseX > 300 && mouseY < 0) {
		idx = 4;
	}else 	if(mouseX > -600 && mouseX < 600 && mouseY > 0) {
		idx = 3;
	}
	//console.log(mouseY);

	if(idx == 0){
		TweenMax.to(_copyArray[0].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[2].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[3].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[4].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[1].material, 0, { opacity:1,  ease:Sine.easeInOut});
	}

	if(idx == 3){

		TweenMax.to(_copyArray[1].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[3].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[4].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[0].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[3].material, 0, { opacity:1,  ease:Sine.easeInOut});
	}

	if(idx == 4){
		TweenMax.to(_copyArray[1].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[3].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[2].material, 0, {opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(_copyArray[0].material, 0, {opacity:0,  ease:Sine.easeInOut});

		TweenMax.to(_copyArray[4].material, 0, { opacity:1,  ease:Sine.easeInOut});
	}
	
	setartPaticle();
	_clickBtn = idx;
}

function onDocumentMouseUp3(event){
	//console.log("onDocumentMouseUp3");
	//console.log(_clickBtn);

	if(_clickBtn == -1 ){
		goMain();
		return;
	}

	_down = false;
	event.preventDefault();
	_btn_line.material.opacity = 0;
	onDocumentMouseUp(event);
	INTERSECTED = null;
	SELECTED = null;
	_clickBtn = -1;

	if(_out) return;
	TweenMax.to(_copyArray[0].material, 0, {opacity:1,  ease:Sine.easeInOut});
	TweenMax.to(_copyArray[1].material, 0, {opacity:0,  ease:Sine.easeInOut});
	TweenMax.to(_copyArray[3].material, 0, {opacity:0,  ease:Sine.easeInOut});
	TweenMax.to(_copyArray[4].material, 0, {opacity:0,  ease:Sine.easeInOut});
	

}


function setartPaticle(){
	_inter = setInterval(function (){
		////console.log(_interCount);
		if(_interCount < 30){
			//_interCount++;
		}else if(_interCount > 30){
			for(var i = 0;i<100;i++){
				addPaticle();
				_interCount++;
			}
		}else{
			_interCount++;
		}
	}, 10)
}

function onDocumentMouseMove2( event ) {
	if(_down) return;
	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	
	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	if ( _btns[_clickBtn] ) {
		var intersects = raycaster.intersectObject( plane );
		_btns[_clickBtn].position.copy( intersects[ 0 ].point.sub( offset ) );
		return;
	}

	var intersects = raycaster.intersectObjects( _btns );
	if ( intersects.length > 0 ) {
		if ( INTERSECTED != intersects[ 0 ].object ) {
			if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
			plane.position.copy( INTERSECTED.position );
			plane.lookAt( camera.position );
		}
		container.style.cursor = 'pointer';
	} else {
		if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
		INTERSECTED = null;
		//_btn_over = false;
		container.style.cursor = 'auto';
	}
}

function onDocumentMouseDown( event ) {
	event.preventDefault();
	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
	projector.unprojectVector( vector, camera );

	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	var intersects = raycaster.intersectObjects(_btns);
	if (intersects.length > 0) {
		controls.enabled = false;
		SELECTED = intersects[ 0 ].object;
		var intersects = raycaster.intersectObject( plane );
		offset.copy( intersects[ 0 ].point ).sub( plane.position );
		container.style.cursor = 'cursor';
		if(SELECTED.name == "btn0"){
			_btn_line.material.opacity = 1;
			TweenMax.to(_copyArray[0].material, 0, { opacity:0,  ease:Sine.easeInOut});
			TweenMax.to(_copyArray[2].material, 0, { opacity:1,  ease:Sine.easeInOut});
		}
		view3();
		_btns[0].material.wireframe = false;
	}
}

function goMain(){
	TweenMax.to( $("#btnsaa") , 0, { x:10000,  ease:Sine.easeInOut});
	_out = true;
	_btns[0].position.x = 100000;
	_btns[3].position.x = 100000;
	_btns[4].position.x = 100000;
	TweenMax.to(_copyArray[0].position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	TweenMax.to(triContainer.position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	TweenMax.to(_copyArray[1].position, 0, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	TweenMax.to(_copyArray[2].position, 0, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	TweenMax.to(_copyArray[3].position, 0, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	TweenMax.to(_copyArray[4].position, 0, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	setTimeout(function (){
		location.href = "main.html";
	}, 1000)
}


function onDocumentMouseUp( event ) {

	event.preventDefault();
	controls.enabled = true;
	if(mouseX > -200  &&  mouseX < 200){
		if(mouseY > -500  &&  mouseY < 0){
				view4(SELECTED);
				TweenMax.to( $("#btnsaa") , 0, { x:10000,  ease:Sine.easeInOut});
				_out = true;
				_btns[0].position.x = 100000;
				_btns[3].position.x = 100000;
				_btns[4].position.x = 100000;

				if(_moveIndex <  0 ){
					goMain();
					return;
				}
				if(_clickBtn == -1 ){
					goMain();
					return;
				}
				if(_clickBtn == 0){
					setTimeout(function (){location.href = "/wp/";_intro = true;}, 1000);
					_btns[0].position.x = 10000;
					TweenMax.to(_copyArray[1].position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
					TweenMax.to(triContainer.position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
				}

				if(_clickBtn == 3){
					setTimeout(function (){location.href = "/portfolio/";}, 1000)
					_btns[3].position.x = 10000;
					TweenMax.to(_copyArray[3].material, 0.5, { opacity:0,  ease:Sine.easeInOut});
					TweenMax.to(_copyArray[3].position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
					TweenMax.to(triContainer.position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
				}
				if(_clickBtn == 4){
					setTimeout(function (){location.href = "/gnuboard4/";}, 1000)
					_btns[4].position.x = 10000;
					TweenMax.to(_copyArray[4].material, 0.5, { opacity:0,  ease:Sine.easeInOut});
					TweenMax.to(_copyArray[4].position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
					TweenMax.to(triContainer.position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
				}
				TweenMax.to(_copyArray[1].material, 0, {x:20000,  ease:Sine.easeInOut});
				TweenMax.to(_copyArray[0].material, 0.1, {opacity:0, x:20000, y:0, z:2000, ease:Sine.easeInOut});
				if(SELECTED != null) SELECTED.material.opacity = 0;
		}
	}
	
	if(SELECTED != null){
		if(SELECTED.name == "index"){
			TweenMax.to( $("#btnsaa") , 0, { x:10000,  ease:Sine.easeInOut});
			_out = true;
			_btns[0].position.x = 100000;
			_btns[3].position.x = 100000;
			_btns[4].position.x = 100000;

			TweenMax.to(_copyArray[0].position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
			TweenMax.to(triContainer.position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});

			setTimeout(function (){
				location.href = "main.html";
			}, 1000)
		}
	}

	if ( INTERSECTED ) {
		plane.position.copy( INTERSECTED.position );
		SELECTED = null;
	}
	container.style.cursor = 'auto';
}


function addBtn(){
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 4000, 2000, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.25, transparent: true, wireframe: true } ) );
	plane.visible = false;
	scene.add( plane );
	
	var wire =  false;
	var geometry = new THREE.CylinderGeometry( 0, 10, 20, 4, 1 );
	var material =  new THREE.MeshLambertMaterial( { color:0xffffff, wireframe:false, wireframeLinewidth:0.5 } );
	var btn = new THREE.Mesh( geometry, material );
	btn.position.x = -600;
	btn.position.y = 200;
	btn.scale.x = btn.scale.y = btn.scale.z =  3
	//btn.name = "btn0";
	//scene.add( btn );
	//_btns[0] = btn;

	
	var arr = [0,3,4];
	
	var pos = [[-450, 200], [400, 0], [500, 400]]
	var ca = [0xff5000,0x9730a6,  0x1cebc5, 0xb8b8b8, 0x73dcff, 0xb8b8b8];
	var ca = [0xff5000,0x9730a6,  0x73dcff, 0xb8b8b8, 0x73dcff, 0xb8b8b8];

	for(var i = 0; i <3;i++){
		var geometry = new THREE.IcosahedronGeometry( 5, 0 );
		var material = new THREE.MeshLambertMaterial( { color: ca[i], shading: THREE.FlatShading } );
		smallSphere = new THREE.Mesh( geometry, material );
		smallSphere.name = "btn0";
		smallSphere.position.x = pos[i][0];
		smallSphere.position.y = pos[i][1];
		smallSphere.scale.x = smallSphere.scale.y = smallSphere.scale.z =  10
		scene.add( smallSphere );
		_btns[arr[i]] = smallSphere;
	}

	var loader = new THREE.TextureLoader();
		loader.load( './resources/images/txt_wordpress.png', function ( texture ) {
				texture.needsUpdate = true;
				var material = new THREE.MeshBasicMaterial({
					map: texture,
					shading: THREE.SmoothShading,
					transparent : true,
					//overdraw:0.5
				  });
				var plane = new THREE.Mesh(new THREE.PlaneGeometry(142, 16, 100), material);
				scene.add(plane );
				plane.scale.x = plane.scale.y = plane.scale.z =  0.9
				_introtxtArr[0] = plane;
		} );

		var loader = new THREE.TextureLoader();
		loader.load( './resources/images/txt_portfolio.png', function ( texture ) {
				texture.needsUpdate = true;
				var material = new THREE.MeshBasicMaterial({
					map: texture,
					shading: THREE.SmoothShading,
					transparent : true,
					//overdraw:0.5
				  });
				var plane = new THREE.Mesh(new THREE.PlaneGeometry(65, 15, 100), material);
				scene.add(plane );
				plane.scale.x = plane.scale.y = plane.scale.z =  0.9
				_introtxtArr[1] = plane;
		} );

	var loader = new THREE.TextureLoader();
		loader.load( './resources/images/txt_gnuboard.png', function ( texture ) {
				texture.needsUpdate = true;
				var material = new THREE.MeshBasicMaterial({
					map: texture,
					shading: THREE.SmoothShading,
					transparent : true,
					//overdraw:0.5
				  });
				var plane = new THREE.Mesh(new THREE.PlaneGeometry(156, 20, 100), material);
				scene.add(plane );
				plane.scale.x = plane.scale.y = plane.scale.z =  0.9
				_introtxtArr[2] = plane;
				$("#btnsaa").show();
		} );
	var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 130, 0) ) ); 
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 300, 0) ) ); 
		geometry.computeBoundingSphere();
	_btn_line = new THREE.Line( geometry, new THREE.LineDashedMaterial( { color: 0xff5000, linewidth:1, gapSize:10, dashSize:3} ) );
	scene.add( _btn_line );
	_btn_line.geometry.computeFaceNormals();
	_btn_line.geometry.verticesNeedUpdate = true;
	_btn_line.geometry.normalsNeedUpdate = true;
	_btn_line.material.opacity = 0;
}

function view1(){
	var delayCount = 0;
	for(var i = 0;i<tile4.length;i++){
		var view = tile4[i].v;
		var view2 = tile5[i].v;
		if(view == 1) delayCount++;
		var ran = Math.floor(Math.random()*3);
		var gap = i%2;
		var tx = (i%19)*146/2 - 420;
		var ty = Math.floor(i/19)*126 - 280;
		var delays = Math.random()*1;
		var color = tile4[i].c == null ? null : tile4[i].c;
		var color2 = tile5[i].c == null ? null : tile5[i].c;
		if(gap == 1){
			if(_tilePaticles[i] == null){
				var tri = new Triangle(0, ran, color, color2);
				tri.delays = delays;
				tri.delays2 = tile4[i].n*0.1 + 8;
				tri.x = tx;
				tri.y = ty;
				tri.init();
			}else{
				var tri = _tilePaticles[i];
				tri.delays = delays;
			}

			tri.open_child1_Dir2();
		}else{
			if(_tilePaticles[i] == null){
				var tri = new Triangle(1, ran, color, color2);
				tri.delays = delays;
				tri.delays2 = tile4[i].n*0.1 + 8;
				tri.x = tx + 145 ;
				tri.y = ty + 126;
				tri.init();
			}else{
				var tri = _tilePaticles[i];
				tri.delays = delays;
			}
			tri.open_child1_Dir1();
		}
		if(_tilePaticles[i] == null ) {
			_tilePaticles[i] = tri;
			triContainer.add(tri.parent);
		}

		var alphas = view == 1 ? 1 : 0;
		TweenMax.to(tri.child.material, 0, { opacity:0,  ease:Sine.easeInOut});
		if(view == 1){
			TweenMax.to(tri.child.material, 0.5, {delay:delays, opacity:alphas,  ease:Sine.easeInOut});
		}else{
			TweenMax.to(tri.child.material, 0.5, { opacity:0,  ease:Sine.easeInOut});
		}
		TweenMax.to(tri.child2.material, 0.5, {delay:delays, opacity:0,  ease:Sine.easeInOut});
	}
}

function view2(){
	delayCount = 0;
	for(var i = 0;i<tile5.length;i++){
		var tri = _tilePaticles[i];
		var view = tile5[i].v;
		var delays = Math.random()*1;
		var ran = Math.floor(Math.random()*3);
		var gap = i%2;
		var tx = (i%15)*146/2 - 130;
		var ty = Math.floor(i/15)*126 - 300;
		tri.delays2 = delays ;
		if(gap == 0){
			tri.open_child2_Dir2();
		}else{
			tri.open_child2_Dir1();
		}
		TweenMax.to(tri.child2.material, 0, { opacity:0,  ease:Sine.easeInOut});
		
		if(view == 1){
			TweenMax.to(tri.child2.material, 0.5, {delay:delays, opacity:1,  ease:Sine.easeInOut});
		}else{
			TweenMax.to(tri.child2.material, 0.5, {delay:delays, opacity:0,  ease:Sine.easeInOut});
		}

		TweenMax.to(tri.child.material, 0.5, {delay:delays, opacity:0,  ease:Sine.easeInOut});
	}
}

function view3($btn){
	clearInterval(_introInterval);
	var delayCount = 0;
	for(var i = 0;i<tile4.length;i++){
		var view = tile4[i].v;
		var view2 = tile5[i].v;
		if(i == 10){
			TweenMax.to(_btns[0], 0, { delay:0,  ease:Sine.easeInOut, onComplete:function (){
				setartPaticle();
			}});
		}
		if(view == 1) delayCount++;
		var ran = Math.floor(Math.random()*3);
		var gap = i%2;
		var tx = (i%19)*146/2 - 300;
		var ty = Math.floor(i/19)*126 - 280;
		var delays = Math.random()*1;
		var color = tile4[i].c == null ? null : tile4[i].c;
		var color2 = tile5[i].c == null ? null : tile5[i].c;
		if(gap == 1){
			if(_tilePaticles[i] == null){
				var tri = new Triangle(0, ran, color, color2);
				tri.delays = delays;
				tri.delays2 = tile4[i].n*0.1 + 8;
				tri.x = tx;
				tri.y = ty;
				tri.init();
			}else{
				var tri = _tilePaticles[i];
				tri.delays = delays;
			}
			tri.open_child1_Dir2();
		}else{
			if(_tilePaticles[i] == null){
				var tri = new Triangle(1, ran, color, color2);
				tri.delays = delays;
				tri.delays2 = tile4[i].n*0.1 + 8;
				tri.x = tx + 145 ;
				tri.y = ty + 126;
				tri.init();
			}else{
				var tri = _tilePaticles[i];
				tri.delays = delays;
			}
			tri.open_child1_Dir1();
		}
		if(_tilePaticles[i] == null ) {
			_tilePaticles[i] = tri;
			triContainer.add(tri.parent);
		}
		var alphas = view == 1 ? 1 : 0;
		TweenMax.to(tri.child.material, 0, { opacity:0,  ease:Sine.easeInOut});
		TweenMax.to(tri.child.material, 0.5, {delay:delays, opacity:1,  ease:Sine.easeInOut});
		TweenMax.to(tri.child2.material, 0.5, {delay:delays, opacity:0,  ease:Sine.easeInOut});
	}
}

function view4($btn){
	clearInterval(_introInterval);
	delayCount = 0;
	for(var i = 0;i<tile4.length;i++){
		var tri = _tilePaticles[i];
		var view = tile[i];
		var view = tile4[i].v;
		if(view == 1) delayCount++;
		var delays = Math.random()*1;
		var ran = Math.floor(Math.random()*3);
		var gap = i%2;
		var tx = (i%11)*146/2;
		var ty = Math.floor(i/11)*126 - 300;
		tri.delays2 = delays ;
		if(gap == 0){
			tri.delays = delays;
			tri.open_child3_Dir2();
		}else{
			tri.delays = delays;
			tri.open_child3_Dir1();
		}
		TweenMax.to(tri.child3.material, 0, { opacity:0,  ease:Sine.easeInOut});
		if(view == 1){
			TweenMax.to(tri.child3.material, 0.5, {delay:delays, opacity:1,  ease:Sine.easeInOut});
		}else{
			TweenMax.to(tri.child3.material, 0.5, {delay:delays, opacity:0,  ease:Sine.easeInOut});
		}
		TweenMax.to(tri.child.material, 0.5, {delay:delays, opacity:1,  ease:Sine.easeInOut});
		TweenMax.to(tri.child2.material, 0.5, {delay:delays, opacity:1,  ease:Sine.easeInOut});
	}
}

function introOut($idx){
	_out = true;
	TweenMax.to(_copyArray[$idx].position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
	TweenMax.to(triContainer.position, 1, {x:0, y:0, z:2000,   ease:Sine.easeInOut});
}

function setObj(){
	var _images = new Image();
	_images.src = './resources/images/intro/sg3.png';
	_images.onload = function () {
		var asscanvas = document.createElement('canvas');
		asscanvas.width = "364";
		asscanvas.height = "614"
		var asscontext = asscanvas.getContext('2d');
		asscontext.drawImage(_images, 0, -300);

		

		var texture = new THREE.Texture( asscanvas );
		var material = new THREE.MeshBasicMaterial({
			map: texture,
			transparent : true
		  });
		var plane = new THREE.Mesh(new THREE.PlaneGeometry(344, 614, 100), material);
		plane.position.x = -20;
		plane.position.y = -240;
		plane.position.z = 0;
		scene.add(plane );
		_copyArray[0] = plane;
		plane.name = "index";
		_btns[1] = plane;

		var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe:true, wireframeLinewidth:10,wireframeLinejoin:"miter" , opacity:0} );
		var shape = new THREE.Shape();
			 shape.moveTo(145, 0);
			 shape.lineTo(73, 126);
			 shape.lineTo(0, 0);
		  var geometry = new THREE.ShapeGeometry( shape );
		  var black_bg = new THREE.Mesh( geometry, material ) ;
		  black_bg.scale.x = black_bg.scale.y = 2
		  black_bg.position.x = -145;
		  black_bg.position.y = 46;
		  black_bg.position.z = 0;
		  plane.add(black_bg);

		var material = new THREE.MeshBasicMaterial( {  } );
		var geometry = new THREE.PlaneGeometry(1, 1, 1)
		triContainer= new THREE.Mesh( geometry, material );
		triContainer.position.x = -135;
		triContainer.position.y = 145;
		triContainer.position.z = 0;
		scene.add(triContainer);
		triContainer.scale.x = triContainer.scale.y = 0.31;
		
		view1();
		var autocount = 0;
		_introInterval = setInterval(function (){
			autocount++;
			if(autocount > 1){
				autocount = 0;
			}

			if(autocount == 0) view1();

			if(autocount == 1) {
				if(_version > 9) view2();
			}
		}, 3000)
	}//end image load

	var loader = new THREE.TextureLoader();
	loader.load( './resources/images/intro/index_ov.png', function ( texture ) {
			texture.needsUpdate = true;
			var material = new THREE.MeshBasicMaterial({
				map: texture,
				shading: THREE.SmoothShading,
				transparent : true,
				opacity:0
			  });
			var plane = new THREE.Mesh(new THREE.PlaneGeometry(325, 719, 100), material);
			plane.position.x = 0;
			plane.position.y = 0;
			plane.position.z = 0;
			scene.add(plane );
			_copyArray[2] = plane;
			plane.name = "index_ov";
	} );
}

function setObj2(){
	var loader = new THREE.TextureLoader();
	loader.load( './resources/images/intro/wordpress_ov.png', function ( texture ) {
			texture.needsUpdate = true;
			var material = new THREE.MeshBasicMaterial({
				map: texture,
				shading: THREE.SmoothShading,
				transparent : true,
				opacity:0
			  });
			var plane = new THREE.Mesh(new THREE.PlaneGeometry(325, 719, 100), material);
			plane.position.x = 0;
			plane.position.y = 0;
			plane.position.z = 0;
			scene.add(plane );
			_copyArray[1] = plane;
			plane.name = "ci";
			_btns[2] = plane;
	} );

	var loader = new THREE.TextureLoader();
		loader.load( './resources/images/intro/portfolio_ov.png', function ( texture ) {
				texture.needsUpdate = true;
				var material = new THREE.MeshBasicMaterial({
					map: texture,
					shading: THREE.SmoothShading,
					transparent : true,
					opacity:0
				  });
				var plane = new THREE.Mesh(new THREE.PlaneGeometry(325, 719, 100), material);
				plane.position.x = 0;
				plane.position.y = 0;
				plane.position.z = 0;
				scene.add(plane );
				_copyArray[3] = plane;
				plane.name = "crossfire";
				_btns[5] = plane;
		} );

		var loader = new THREE.TextureLoader();
		loader.load( './resources/images/intro/gnuboard_ov.png', function ( texture ) {
				texture.needsUpdate = true;
				var material = new THREE.MeshBasicMaterial({
					map: texture,
					shading: THREE.SmoothShading,
					transparent : true,
					opacity:0
				  });
				var plane = new THREE.Mesh(new THREE.PlaneGeometry(325, 719, 100), material);
				plane.position.x = 0;
				plane.position.y = 0;
				plane.position.z = 0;
				scene.add(plane );
				_copyArray[4] = plane;

				plane.name = "sub";
				_btns[5] = plane;
		} );
}

function addPaticle(){
	if(_interCount >= _total){
		clearInterval(_inter);
	}
	var plane = _plans[_interCount]
	scene.add( plane );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	mouseX = ( event.clientX - windowHalfX );
	mouseY = ( event.clientY - windowHalfY );
}

function render() {
	var c = _count3*30;
	_ball.x = windowHalfX/2;
	if(c < 0) c = 0;
	_ball.y = Math.sin(c*Math.PI/180)*windowHalfY + 0;
	
	if(_version > 9){
		_out == true ? module_out() : module4();
	}

	if(_out == false){
		camera.position.x += ( mouseX - camera.position.x ) * 0.3;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.3;
		camera.lookAt( scene.position );
	}

	renderer.render( scene, camera );

	if(_version > 9){
	
		if(_clickBtn > -1){
			_btns[_clickBtn].rotation.z +=_count*0.01;
			_btns[_clickBtn].rotation.x +=_count*0.01;
			_btn_line.geometry.vertices[1].x = _btns[_clickBtn].position.x;
			_btn_line.geometry.vertices[1].y = _btns[_clickBtn].position.y;
			_btn_line.geometry.vertices[1].z = _btns[_clickBtn].position.z;
		}
		_btn_line.geometry.computeFaceNormals();
		_btn_line.geometry.verticesNeedUpdate = true;
		_btn_line.geometry.normalsNeedUpdate = true;
		
		try{
			_introtxtArr[0].position.x = _btns[0].position.x;
			_introtxtArr[0].position.y = _btns[0].position.y -100;
			_introtxtArr[0].position.z = _btns[0].position.z;

			_introtxtArr[1].position.x = _btns[3].position.x;
			_introtxtArr[1].position.y = _btns[3].position.y -100;
			_introtxtArr[1].position.z = _btns[3].position.z;

			_introtxtArr[2].position.x = _btns[4].position.x;
			_introtxtArr[2].position.y = _btns[4].position.y -100;
			_introtxtArr[2].position.z = _btns[4].position.z;
		}catch(e){
		
		}
		var arr = [0,3,4];
		for(var i = 0; i <3;i++){
			var mc = _btns[arr[i]];
			mc.rotation.x = _count2;
			mc.rotation.y = _count2;
			mc.rotation.z = _count2;
		}
	}
}

$(document).ready(function (){
	_ready = true;
})


function module_out(){
	var i = 0;
	for(var i =0;i<_total;i++){
		var ball = _array[i];
		ball.ran +=1;
		if(i > _total/2){
			var angle = ball.angle;
			var radian = angle*Math.PI/180;
			var tx =Math.sin(radian) * (500 + _size);
			var ty = Math.cos(radian) * (500 + _size);
		}else{	
			var angle = ball.angle;
			var radian = angle*Math.PI/180;
			var tx = Math.sin(radian) * (2000 + _size);
			var ty = Math.cos(radian) * (2000 + _size);
		}
		var dx = mouseX - ball.x0 + 0;
		var dy = mouseY - ball.y0 + 0;
		var dist = Math.sqrt((dx*dx)+(dy*dy));
		var angle = Math.atan2( dy, dx) + Math.PI;
		if(dist <= limit) {
			ball.xTarget = mouseX + (limit+_size) * Math.cos(angle) + 0;
			ball.yTarget = mouseY + (limit+_size) * Math.sin(angle) + 0;
		}else{
			ball.xTarget = ball.x0 + 0;
			ball.yTarget = ball.y0 + 0;
		}
		try{ball.change();}catch(e){}
		
		_plans[i].position.x = tx + ball.x + _size;
		_plans[i].position.y = ty + ball.y + 0;
		_plans[i].position.z = ty  + 0;
		_plans[i].rotation.x += _array[i].ro_x;
		_plans[i].rotation.y += -_array[i].ro_y;
		_plans[i].rotation.z += _array[i].ro_z;
	}

	_size += 500
	_count = 0;
	_count2 += 0;
	_count3 += 0;
}
function module4(){
	var i = 0;
	for(var i =0;i<_total;i++){
		var ball = _array[i];
		ball.ran +=1;
		if(i > _total/2){
			ball.angle += _count;		
			var angle = ball.angle;
			var radian = angle*Math.PI/180;
			var tx =Math.sin(radian) * 500;
			var ty = Math.cos(radian) * 500;
		}else{
			ball.angle += _count*0.5;		
			var angle = ball.angle;
			var radian = angle*Math.PI/180;
			var tx = Math.sin(radian) * 2000;
			var ty = Math.cos(radian) * 2000;
		}

		var dx = mouseX - ball.x0 + 0;
		var dy = mouseY - ball.y0 + 0;
		var dist = Math.sqrt((dx*dx)+(dy*dy));
		var angle = Math.atan2( dy, dx) + Math.PI;
		if(dist <= limit) {
			ball.xTarget = mouseX + limit * Math.cos(angle) + 0;
			ball.yTarget = mouseY + limit * Math.sin(angle) + 0;
		}else{
			ball.xTarget = ball.x0 + 0;
			ball.yTarget = ball.y0 + 0;
		}
		try{ball.change();}catch(e){}

		_plans[i].position.x = tx + ball.x - 0;
		_plans[i].position.y = ty + ball.y + 0;
		_plans[i].position.z = ty  + 0;

		_plans[i].rotation.x += _array[i].ro_x;
		_plans[i].rotation.y += -_array[i].ro_y;
		_plans[i].rotation.z += _array[i].ro_z;
	}
	_count = 4.5;
	_count2 += 0.05;
	_count3 += 0.02;
}

function Ball ($x, $y){
  this.x = $x;
  this.y = $y;
  this.ro_x = 0;
  this.ro_y = 0;
  this.ro_z = 0;


  this.x0 = this.x;
  this.y0 = this.y;
  this.xTarget = this.x;
  this.yTarget = this.y;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.angle = Math.random()*1000;
  this.ran = Math.random() * 100;
}

Ball.prototype.change = function () {
	this.xSpeed = this.xSpeed * eRate + (this.xTarget - this.x) *sRate;
	this.ySpeed = this.ySpeed * eRate + (this.yTarget - this.y) *sRate;
	this.x += this.xSpeed;
	this.y += this.ySpeed;
}	

Ball.prototype.change2 = function (sRate, eRate) {
	this.xSpeed = this.xSpeed * eRate + (this.xTarget - this.x) *sRate;
	this.ySpeed = this.ySpeed * eRate + (this.yTarget - this.y) *sRate;
	this.x += this.xSpeed;
	this.y += this.ySpeed;
}	