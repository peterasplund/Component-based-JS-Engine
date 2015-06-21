/*Parameter: DrawComponent*/
var RenderComponent = function(drawComp) {
	Component.call(this);

	this.drawComp = drawComp;
	this.entities = [];
};

RenderComponent.prototype = new Component();

RenderComponent.prototype.ID = "RENDER";

RenderComponent.prototype.exec = function() {

	this.drawComp.clear();
	
	//Calculate fps
	if(!this.lastCalledTime) {
	    this.lastCalledTime = new Date().getTime();
	    this.fps = 0;
	    return;
	}
	this.delta = (new Date().getTime() - this.lastCalledTime)/1000;
	this.lastCalledTime = new Date().getTime();
	this.fps = 1/this.delta;

	this.drawComp.drawText({ x: 10, y: 10 },"FPS: " + Math.round(this.fps));
	

	for (var i = 0; i < this.entities.length; i++) {
		this.drawComp.exec(this.entities[i]);

		var test = Object.create(this.entities).splice(i + 1,2);

		this.entities[i].update(test);

	}
	
};

RenderComponent.prototype.addEntity = function(entity) {
	entity.id = this.entities.length;
	this.entities.push(entity);
};