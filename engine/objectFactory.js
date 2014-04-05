var ObjectFactory = function() {
	
};

ObjectFactory.prototype.createStdObj = function(img, pos, size, imgSize, vel) {
	var obj = new Entity();

	obj.addComponent(new PositionComponent(pos));
	obj.addComponent(new RectangleComponent(size));
	obj.addComponent(new SpriteComponent(img, imgSize));
	obj.addComponent(new PhysicsComponent(vel));

	return obj;
};

ObjectFactory.prototype.createPlayer = function(img, pos, size, imgSize, vel) {
	var obj = this.createStdObj(img, pos, size, imgSize, vel);

	obj.addComponent(new MovableComponent());

	obj.addComponent(new AnimationComponent(10));

	obj.getComponent("PHYSICS").friction = 0.5;

	return obj;
};