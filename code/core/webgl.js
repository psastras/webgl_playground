function vec3(x, y, z) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
}

vec3.prototype = {
	add : function(v) {
		if (v instanceof vec3) return new vec3(this.x + v.x, this.y + v.y, this.z + v.z);
		else return new vec3(this.x + v, this.y + v, this.z + v);
	}, 
	sub : function() {
		if (v instanceof vec3) return new vec3(this.x - v.x, this.y - v.y, this.z - v.z);
		else return new vec3(this.x - v, this.y - v, this.z - v);
	}
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


function Shader() {
	this.glshader = (function() {

		var _id;

		return {
			init : function() {

			}

			link : function() {

			}
		}

	} ());

	this.glshader.init();
}

