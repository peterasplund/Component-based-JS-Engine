import Entity from '../engine/entity';

export default class Player extends Entity {
	constructor(img) {
		super();
		
		const size = { width: 32, height: 50}
		const scaleSize = { width: 60, height: 60 };
		const self = this;

		this.addComponent(new PositionComponent({ x: 50, y: 50 }));
		this.addComponent(new RectangleComponent(scaleSize));
		this.addComponent(new SpriteComponent(img, size));
		this.addComponent(new PhysicsComponent());
		this.addComponent(new MovableComponent());
		this.addComponent(new AnimationComponent(10));

		this.getComponent("PHYSICS").friction = 1;
		this.getComponent("PHYSICS").maxspeed = 5;

		this.getComponent("ANIMATION").addAnimation("run-down", [4,7]);
		this.getComponent("ANIMATION").addAnimation("run-up", [28,31]);
		this.getComponent("ANIMATION").addAnimation("run-left", [12,15]);
		this.getComponent("ANIMATION").addAnimation("run-right", [20,23]);

		this.getComponent("ANIMATION").setAnimation("run-down");

		setTimeout(() => {
			self.getComponent("ANIMATION").setAnimation("run-right");
		}, 1500);
	}

	update(entities) {
		parent.update(this);

		if (this.getComponent("PHYSICS").vel.x < 0.1 && this.getComponent("PHYSICS").vel.x > -0.1 &&
			this.getComponent("PHYSICS").vel.y < 0.1 && this.getComponent("PHYSICS").vel.y > -0.1) {

			this.getComponent("ANIMATION").stop();
			this.getComponent("ANIMATION").resetFrame();
		} else {
			this.getComponent("ANIMATION").play();
		}

		if (this.getComponent("PHYSICS").vel.x > 0) {
			this.getComponent("ANIMATION").setAnimation("run-right");
		}
		if (this.getComponent("PHYSICS").vel.x < 0) {
			this.getComponent("ANIMATION").setAnimation("run-left");
		}
		if (this.getComponent("PHYSICS").vel.y < 0) {
			this.getComponent("ANIMATION").setAnimation("run-up");
		}
		if (this.getComponent("PHYSICS").vel.y > 0) {
			this.getComponent("ANIMATION").setAnimation("run-down");
		}

		for (var i = 0; i < entities.length; i++) {
			r = this.getComponent("RECTANGLE").IntersectDepthVector(this, entities[i]);
			if (r.x != 0 || r.y != 0) {
				if (r.x > r.y) {
					//Y axis
					var newpos = { x: this.getPos().x, y: this.getPos().y + r.y };
					this.getComponent("PHYSICS").vel.y = 0;
				}
				else {
					//X axis
					var newpos = { x: this.getPos().x + r.x, y: this.getPos().y };
					this.getComponent("PHYSICS").vel.x = 0;
				}
				this.getPos().x = newpos.x;
				this.getPos().y = newpos.y;
			}
		}
	}
}
