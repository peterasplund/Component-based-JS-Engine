import Component from '../component';

export default class extends Component {
	ID = "INPUT";

	constructor() {
		super();
		this.renderer = renderer;

		var self = this;

		this.key = {
			LEFT: 37,
		  	UP: 38,
			RIGHT: 39,
			DOWN: 40
		};

		this.keyboard = {
	  		_pressed: {},
	  
	  		isDown: function(keyCode) {
	    		return this._pressed[keyCode];
	  		},
	  
	  		onKeydown: function(event) {
	    		this._pressed[event.keyCode] = true;
	  		},
	  
	  		onKeyup: function(event) {
	    		delete this._pressed[event.keyCode];
	  		}
		};

		window.addEventListener('keyup', function(event) { self.keyboard.onKeyup(event); }, false);
		window.addEventListener('keydown', function(event) { self.keyboard.onKeydown(event); }, false);
	}

	exec = function(entity) {}
}