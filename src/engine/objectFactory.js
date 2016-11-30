import {
	PositionComponent,
	RectangleComponent,
	SpriteComponent,
	PhysicsComponent,
	MovableComponent,
	AnimationComponent,
} from './components';

export default class ObjectFactory {
	createStdObj(img, pos, size, imgSize, vel) {
		const obj = new Entity();

		obj.addComponent(new PositionComponent(pos));
		obj.addComponent(new RectangleComponent(size));
		obj.addComponent(new SpriteComponent(img, imgSize));
		obj.addComponent(new PhysicsComponent(vel));

		return obj;
	}

	createPlayer(img, pos, size, imgSize, vel) {
		const obj = this.createStdObj(img, pos, size, imgSize, vel);

		obj.addComponent(new MovableComponent());
		obj.addComponent(new AnimationComponent(10));
		obj.getComponent("PHYSICS").friction = 0.5;

		return obj;
	}
};