function vec3(x, y, z) {

	var self = {

		x: x || 0,
		y: y || 0,
		z: z || 0,

		add : function(v) {
			if (v instanceof vec3) return vec3(this.x + v.x, this.y + v.y, this.z + v.z);
			else return vec3(this.x + v, this.y + v, this.z + v);
		}, 
		sub : function(v) {
			if (v instanceof vec3) return vec3(this.x - v.x, this.y - v.y, this.z - v.z);
			else return vec3(this.x - v, this.y - v, this.z - v);
		},
		dot : function(v) {

		}
	}

	return self;
}

///

function gl(canvas) {
	var self = {

	}

	return self;
}

function WGL(canvas) {

	this.context = (function() {
		
		var _success = false;
		var _gl = null;
		
		return {

			init : function() {
				try {
				    _gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
				}
				catch(e) { }

				if(_gl) {
					_success = true;
				} else {}
			},

			success : function() {
				return _success;
			},

			gl : function() {
				return _gl;
			}
		}

	} ());

	// this.camera = (function() {

	// 	var vec3 _pos;

	// 	return {
	// 		init : function() {

	// 		}
	// 	}

	// } ());

	this.context.init(canvas);
	// this.camera.
};

WGL.prototype = {

	gl : function () {
		return this.context.gl();
	}

}


// function Shader() {
// 	this.glshader = (function() {

// 		var _id;

// 		return {
// 			init : function() {

// 			}

// 			link : function() {

// 			}
// 		}

// 	} ());

// 	this.glshader.init();
// }

