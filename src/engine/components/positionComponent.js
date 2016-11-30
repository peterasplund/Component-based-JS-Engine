import Component from '../Component';

export default class PositionComponent extends Component {
	ID = "POSITION";

	constructor(pos) {
		Component.call(this);
		this.pos = pos || {x:0,y:0};
	}

	exec() {}
}