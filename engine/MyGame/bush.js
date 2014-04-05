var Bush = function(img, pos) {
	Entity.call(this);


	var size = { width: 16, height: 16}
	var scaleSize = { width: 120, height: 120 };

	this.addComponent(new PositionComponent({ x: pos.x, y: pos.y }));
	this.addComponent(new RectangleComponent(scaleSize));
	this.addComponent(new SpriteComponent(img, size));
};


Bush.prototype = new Entity();