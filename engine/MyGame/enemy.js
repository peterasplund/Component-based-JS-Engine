var Enemy = function(img, pos) {
	Entity.call(this);

	

	var size = { width: 16, height: 16}
	var scaleSize = { width: 120, height: 120 };

	this.addComponent(new PositionComponent({ x: pos.x, y: pos.y }));
	this.addComponent(new RectangleComponent(scaleSize));
	this.addComponent(new SpriteComponent(img, size));
	this.addComponent(new PhysicsComponent());
	this.addComponent(new AnimationComponent(10));

	this.getComponent("PHYSICS").friction = 0.5;

	this.getComponent("ANIMATION").addAnimation("run-down", [0,2]);
	this.getComponent("ANIMATION").addAnimation("run-up", [6,8]);
	this.getComponent("ANIMATION").addAnimation("run-left", [3,5]);
	this.getComponent("ANIMATION").addAnimation("run-right", [9,11]);
	this.getComponent("ANIMATION").setAnimation("run-down");
};


Enemy.prototype = new Entity();