import Component from '../Component';

export default class PhysicsComponent extends Component {
	ID = "PHYSICS";

	constructor(vel, friction, maxspeed) {
		Component.call(this);
		this.vel = vel || {x:0,y:0};

		this.maxspeed = maxspeed || 10;

		this.friction = friction || 1;
	}

	PhysicsComponent(self) {
		if (!self.getComponent("POSITION"))
		{
			self.addComponent(new PositionComponent({ x:0, y:0}));
			console.warn("You need to add a PositionComponent to " + self);
		}

		if (this.friction < 1) {
			//Friction
			if (this.vel.x > 0)
				this.vel.x -= this.friction;
			if (this.vel.x < 0)
				this.vel.x += this.friction;
			if (this.vel.y > 0) 
				this.vel.y -= this.friction;
			if (this.vel.y < 0)
				this.vel.y += this.friction;
		} else {
			
		}

		//Limit velocity
		if (this.vel.x > this.maxspeed)
			this.vel.x = this.maxspeed;
		else if (this.vel.x < -this.maxspeed)
			this.vel.x = -this.maxspeed;
		if (this.vel.y > this.maxspeed)
			this.vel.y = this.maxspeed;
		else if (this.vel.y < -this.maxspeed)
			this.vel.y = -this.maxspeed;

		//entity.findComponent("POSITION_COMPONENT").pos.x = Math.round(entity.findComponent("POSITION_COMPONENT").pos.x);
		//entity.findComponent("POSITION_COMPONENT").pos.y = Math.round(entity.findComponent("POSITION_COMPONENT").pos.y);

		//Movement
		self.getPos().x += this.vel.x;
		self.getPos().y += this.vel.y;


		//Round velocity
		/*
		if (this.vel.x > -0.9 && this.vel.x  < 0.1)
			this.vel.x = 0;
		if (this.vel.y > -0.9 && this.vel.y  < 0.1)
			this.vel.y = 0;
		*/
	}
}