/*The main entity object */
var Entity = function() {
	this.components = {};
};

Entity.prototype.addComponent = function(component) {
	this.components[component.ID] = component;
};

Entity.prototype.removeComponent = function(component) {
	delete this.components[component.ID];
};

Entity.prototype.removeComponentByID = function(componentId) {
	delete this.components[componentId];
};

Entity.prototype.getComponents = function() {
	return this.components;
}

Entity.prototype.getPos = function() {
	return this.getComponent("POSITION").pos;
}

Entity.prototype.getSize = function() {
	return this.getComponent("RECTANGLE").size;
}

Entity.prototype.getImage = function() {
	return this.getComponent("SPRITE");
}

Entity.prototype.intersects = function(other) {
	return this.getComponent("RECTANGLE").intersects(this, other);
}

Entity.prototype.getComponent = function(componentId) {
	return this.components[componentId] || null;
}

Entity.prototype.update = function() {
	for (var comp in this.components) {
		this.components[comp].exec(this);
	};
}