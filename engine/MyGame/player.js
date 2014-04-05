var Player = function(img) {

	var size = { width: 16, height: 16}
	var scaleSize = { width: 120, height: 120 };
	var self = this;


	this.addComponent(new PositionComponent({ x: 50, y: 50 }));
	this.addComponent(new RectangleComponent(scaleSize));
	this.addComponent(new SpriteComponent(img, size));
	this.addComponent(new PhysicsComponent());
	this.addComponent(new MovableComponent());
	this.addComponent(new AnimationComponent(10));
	this.getComponent("PHYSICS").friction = 0.5;

	this.getComponent("ANIMATION").addAnimation("run-down", [0,2]);
	this.getComponent("ANIMATION").addAnimation("run-up", [6,8]);
	this.getComponent("ANIMATION").addAnimation("run-left", [3,5]);
	this.getComponent("ANIMATION").addAnimation("run-right", [9,11]);
	this.getComponent("ANIMATION").setAnimation("run-down");

	setTimeout(function(){
		self.getComponent("ANIMATION").setAnimation("run-right");
	},1500)

};

Player.prototype = new Entity();


Player.prototype.update = function(entities) {
	
	Entity.prototype.update.call(this);

	for (var i = 0; i < entities.length; i++) {


		r = this.getComponent("RECTANGLE").IntersectDepthVector(this, entities[i]);
		if (r.x != 0 || r.y != 0)
		{
			if (r.x > r.y)
			{
				//Y axis
				var newpos = { x: this.getPos().x, y: this.getPos().y + r.y };
				this.getComponent("PHYSICS").vel.y = 0;
			}
			else
			{
				//X axis
				var newpos = { x: this.getPos().x + r.x, y: this.getPos().y };
				this.getComponent("PHYSICS").vel.x = 0;
			}
			this.getPos().x = newpos.x;
			this.getPos().y = newpos.y;
			
		}


	}

};