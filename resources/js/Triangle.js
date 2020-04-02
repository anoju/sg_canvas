/**************************************************
 * Triangle
***************************************************/

function Triangle($dir, $dir2, $color, $color2, $scene){
	
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.delays = 0;
	this.delays2 = 0;
	this.delays3 = 0;

	this.spped = 0.5;
	this.dir = $dir;
	this.dir2 = $dir2;
	this.parent;
	this.child;
	this.child2;
	this.child3;

	this.width = 145;
	this.height = 126;
	this.color = $color2 == null ? 0xff5000 : $color2;
	this.color2 = $color == null ? 0xff5000 : $color;
	this.gapX = 0;
	this.gapY = 0;
	this.gapZ = 0;
	this.scene = $scene == null ? scene : $scene
	//this.init();

}

Triangle.prototype.init = function (){
	var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe:false , opacity:0} );
	var shape = new THREE.Shape();
	  shape.moveTo(this.width, 0);
	  shape.lineTo(this.width/2, this.height );
	  shape.lineTo(0, 0);
	  var geometry = new THREE.ShapeGeometry( shape );
	  this.parent = new THREE.Mesh( geometry, material ) ;
	  this.scene.add(this.parent);

	
	var material = new THREE.MeshBasicMaterial( { color: this.color2 } );
	var shape = new THREE.Shape();
	  shape.moveTo(this.width , 0);
	  shape.lineTo(this.width/2, this.height );
	  shape.lineTo(0, 0);
	  var geometry = new THREE.ShapeGeometry( shape );
	  this.child = new THREE.Mesh( geometry, material );
	  this.parent.add(this.child);


	var material = new THREE.MeshBasicMaterial( { color: this.color } );
	var shape = new THREE.Shape();
	  shape.moveTo(this.width , 0);
	  shape.lineTo(this.width/2, this.height );
	  shape.lineTo(0, 0);
	  var geometry = new THREE.ShapeGeometry( shape );
	  this.child2 = new THREE.Mesh( geometry, material );
	  this.parent.add(this.child2);

	var material = new THREE.MeshBasicMaterial( { color: this.color , opacity:0} );
	var shape = new THREE.Shape();
	  shape.moveTo(this.width , 0);
	  shape.lineTo(this.width/2, this.height );
	  shape.lineTo(0, 0);
	  var geometry = new THREE.ShapeGeometry( shape );
	  this.child3 = new THREE.Mesh( geometry, material );
	  this.parent.add(this.child3);

	
}




Triangle.prototype.open_child1_Dir1 = function (){
	//TweenMax.to(this.parent.position, 0, {x:this.x + Math.random()*20000 - 10000, y:this.y  + Math.random()*20000-10000, z:this.y  + Math.random()*-10000 });
	//TweenMax.to(this.parent.rotation, 0, {x:Math.PI/180*Math.random()*360, y:Math.PI/180*Math.random()*360, z:Math.PI/180*Math.random()*360 });

	if(this.dir2 == 0){
		this.parent.rotation.z = Math.PI/180*180;
		TweenMax.to(this.parent.position, 0, {x:this.x, y:this.y, z:0, ease:Sine.easeInOut});
		TweenMax.to(this.parent.position, 0, {x:this.x, y:this.y, z:0, ease:Sine.easeInOut});
		//TweenMax.to(this.parent.rotation, 0, {x:0, y:0, z:0, ease:Sine.easeInOut});

		TweenMax.to(this.child.rotation, 0, {x:Math.PI/180*-90, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, this.spped, {delay:this.delays, x:0, x:Math.PI/180*1, ease:Sine.easeInOut});
	}

	if(this.dir2 == 1){
		TweenMax.to(this.parent.position, 0, {x:this.x -this.width/2, y:this.y - this.height,  z:0, ease:Sine.easeInOut});
		TweenMax.to(this.parent.rotation, 0, {x:0, z:Math.PI/180*60, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, 0, {x:0, x:Math.PI/180*-90, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, this.spped, {delay:this.delays, x:0, x:Math.PI/180*1, ease:Sine.easeInOut});
	}

	if(this.dir2 == 2){
		TweenMax.to(this.parent.position, 0, {x:this.x - this.width , y:this.y,  z:0,ease:Sine.easeInOut});
		TweenMax.to(this.parent.rotation, 0, {x:0, z:Math.PI/180*300, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, 0, { x:0, x:Math.PI/180*-90, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, this.spped, {delay:this.delays, x:0, x:Math.PI/180*1, ease:Sine.easeInOut});
	}
}

Triangle.prototype.open_child1_Dir2 = function (){
	//TweenMax.to(this.parent.position, 0, {x:this.x + Math.random()*20000 - 10000, y:this.y  + Math.random()*20000-10000, z:this.y  + Math.random()*-10000 });

	if(this.dir2 == 0){
		TweenMax.to(this.parent.position, 0, {x:this.x, y:this.y,  z:0,ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, 0, {x:0, x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, this.spped, {delay:this.delays, x:0, x:Math.PI/180*1, ease:Sine.easeInOut});
	}

	if(this.dir2 == 1){
		TweenMax.to(this.parent.position, 0, {x:this.x+ this.width, y:this.y,  z:0, ease:Sine.easeInOut});
		TweenMax.to(this.parent.rotation, 0, {x:0, z:Math.PI/180*120, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, 0, {x:0, x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, this.spped, {delay:this.delays, x:0, x:Math.PI/180*1, ease:Sine.easeInOut});
	}

	if(this.dir2 == 2){
		
		TweenMax.to(this.parent.position, 0, {x:this.x + this.width/2, y:this.y + this.height,  z:0,ease:Sine.easeInOut});
		TweenMax.to(this.parent.rotation, 0, {x:0, z:Math.PI/180*240, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, 0, { x:0, x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child.rotation, this.spped, {delay:this.delays, x:0, x:Math.PI/180*1, ease:Sine.easeInOut});
	}
}

Triangle.prototype.open_child2_Dir2 = function (){
	if(this.dir2 == 0){
		TweenMax.to(this.child2.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child2.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 1){
		TweenMax.to(this.child2.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child2.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 2){
		TweenMax.to(this.child2.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child2.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}
}

Triangle.prototype.open_child2_Dir1 = function (){

	if(this.dir2 == 0){
		TweenMax.to(this.child2.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child2.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 1){
		TweenMax.to(this.child2.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child2.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 2){
		TweenMax.to(this.child2.rotation, 0, { x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child2.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}
}



Triangle.prototype.open_child3_Dir2 = function (){
	if(this.dir2 == 0){
		TweenMax.to(this.child3.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child3.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 1){
		TweenMax.to(this.child3.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child3.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 2){
		TweenMax.to(this.child3.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child3.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}
}

Triangle.prototype.open_child3_Dir1 = function (){

	if(this.dir2 == 0){
		TweenMax.to(this.child3.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child3.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 1){
		TweenMax.to(this.child3.rotation, 0, {x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child3.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}

	if(this.dir2 == 2){
		TweenMax.to(this.child3.rotation, 0, { x:Math.PI/180*90, ease:Sine.easeInOut});
		TweenMax.to(this.child3.rotation, this.spped, {delay:this.delays2, x:Math.PI/180*0, ease:Sine.easeInOut});
	}
}