var PositionComponent = function(pos) {
	Component.call(this);
	this.pos = pos || {x:0,y:0};
};

PositionComponent.prototype = new Component();

PositionComponent.prototype.ID = "POSITION";

PositionComponent.prototype.exec = function() {};