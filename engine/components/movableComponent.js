//This will need an input component


var MovableComponent = function(speed) {

	this.speed = speed || 1;

	Component.call(this);
};

MovableComponent.prototype = new Component();

MovableComponent.prototype.ID = "MOVABLE";

MovableComponent.prototype.exec = function(self) {

	//Dependencies
	if (self.getComponent("INPUT") == null)
		self.addComponent(new InputComponent());
	if (self.getComponent("PHYSICS") == null)
		self.addComponent(new PhysicsComponent());


	if (self.getComponent("INPUT").keyboard.isDown(self.getComponent("INPUT").key.RIGHT)) {
		self.getComponent("PHYSICS").vel.x += this.speed;
	}
	if (self.getComponent("INPUT").keyboard.isDown(self.getComponent("INPUT").key.LEFT)) {
		self.getComponent("PHYSICS").vel.x += -this.speed;
	}
	if (self.getComponent("INPUT").keyboard.isDown(self.getComponent("INPUT").key.DOWN)) {
		self.getComponent("PHYSICS").vel.y += this.speed;
	}
	if (self.getComponent("INPUT").keyboard.isDown(self.getComponent("INPUT").key.UP)) {
		self.getComponent("PHYSICS").vel.y += -this.speed;
	}

	
};
