import Component from './component';

/**
* The main entity object
*/
export default class Entity extends Component {
	constructor() {
		super();
		this.components = {};
	}
	
	addComponent(component) {
		this.components[component.ID] = component;
	}

	removeComponent(component) {
		delete this.components[component.ID];
	}

	removeComponentByID(componentId) {
		delete this.components[componentId];
	}

	getComponents() {
		return this.components;
	}

	getPos() {
		return this.getComponent("POSITION").pos;
	}

	getSize() {
		return this.getComponent("RECTANGLE").size;
	}

	getImage() {
		return this.getComponent("SPRITE");
	}

	intersects (other) {
		return this.getComponent("RECTANGLE").intersects(this, other);
	}

	getComponent(componentId) {
		return this.components[componentId] || null;
	}
	update() {
		for (let comp in this.components) {
			this.components[comp].exec(this);
		}
	}
}