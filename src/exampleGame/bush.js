import Entity from '../engine/entity';

export default class Bush extends Entity {
	constructor(img, pos) {
		super();
		const size = { width: 16, height: 16}
		const scaleSize = { width: 120, height: 120 };

		this.addComponent(new PositionComponent({ x: pos.x, y: pos.y }));
		this.addComponent(new RectangleComponent(scaleSize));
		this.addComponent(new SpriteComponent(img, size));
	}
}