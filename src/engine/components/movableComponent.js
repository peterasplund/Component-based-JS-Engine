//This will need an input component

import Component from '../Component';

export default class MovableComponent extends Component {
	ID = "MOVABLE";

	constructor(speed) {
		this.speed = speed || 5;
		super(this);
	}

	exec(self) {
		//Dependencies
		if (self.getComponent("INPUT") === null)
			self.addComponent(new InputComponent());
		if (self.getComponent("PHYSICS") === null)
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
	}
}