import Component from '../Component';

export default class extends Component {
	ID = "POSITION";

	constructor(pos) {
		super();
		this.pos = pos || {x:0,y:0};
	}

	exec() {}
}