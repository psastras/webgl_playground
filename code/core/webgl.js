function mat4x4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	this.data = [a || 0, b || 0, c || 0, d || 0, e || 0, f || 0, g || 0, h || 0, i || 0, 
				 j || 0, k || 0, l || 0, m || 0, n || 0, o || 0, p || 0];
}

mat4x4.prototype = {
	transpose : function() {

	},
	add : function(m) {
		
	},
	sub : function(m) {

	},
	mul : function(m) {

	},
	div : function(m) {

	},
	det : function() {

	},
	inv : function() {

	},
}

// Defines a four element vector class with common math operations
function vec4(x, y, z, w) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w || 1;
}

vec4.prototype = {
	// Homogenizes (sets the fourth element to 1) the current vector and returns a reference
	homogenize : function() {
		this.w = 1;
		return this;
	},
	// Unhomogenizes (sets the fourth element to 0) the current vector and returns a reference
	unhomogenize : function() {
		this.w = 0;
		return this;
	},
	homogenized : function() {
		return new vec4(this.x, this.y, this.z, 1);
	},
	unhomogenized : function() {
		return new vec4(this.x, this.y, this.z, 0);
	},
	add : function(v) {
		if (v instanceof vec4) return new vec4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
		else return new vec4(this.x + v, this.y + v, this.z + v, this.w + v);
	}, 
	sub : function(v) {
		if (v instanceof vec4) return new vec4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
		else return new vec4(this.x - v, this.y - v, this.z - v, this.w - w);
	},
	dot : function(v) {
		return new vec4(this.x * v.x, this.y * v.y, this.z * v.z, this.w * v.w);
	},
	mul : function(v) {
		return new vec4(this.x * v, this.y * v, this.z * v, this.w * v);
	},
	div : function(v) {
		return new vec4(this.x / v, this.y / v, this.z / v, this.w / v);
	},
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	magnitude2 : function() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	},
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	distance2 : function(v) {
		return (v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y) + (v.z - this.z) * (v.z - this.z) 
			+ (v.w - this.w) * (v.w - this.w);
	},
	cross : function(v) {
		return new vec4(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x, 0);
	},
	equals : function(v) {
		return this.x == v.x && this.y == v.y && this.z == v.z;
	},
	// reflect this vector around normal, assuming this vector is incident to surface
	reflect : function(n) {
		return this.sub(normal.dot(this.dot(normal).mul(2)));
	}
}

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
	sub : function(v) {
		if (v instanceof vec3) return new vec3(this.x - v.x, this.y - v.y, this.z - v.z);
		else return new vec3(this.x - v, this.y - v, this.z - v);
	},
	dot : function(v) {
		return new vec3(this.x * v.x, this.y * v.y, this.z * v.z);
	},
	mul : function(v) {
		return new vec3(this.x * v, this.y * v, this.z * v);
	},
	div : function(v) {
		return new vec3(this.x / v, this.y / v, this.z / v);
	},
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	magnitude2 : function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	},
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	distance2 : function(v) {
		return (v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y) + (v.z - this.z) * (v.z - this.z);
	},
	cross : function(v) {
		return new vec3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
	},
	equals : function(v) {
		return this.x == v.x && this.y == v.y && this.z == v.z;
	},
	// reflect this vector around normal, assuming this vector is incident to surface
	reflect : function(n) {
		return this.sub(normal.dot(this.dot(normal).mul(2)));
	}
}

function vec2(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

vec2.prototype = {
	add : function(v) {
		if (v instanceof vec2) return new vec2(this.x + v.x, this.y + v.y);
		else return new vec2(this.x + v, this.y + v);
	}, 
	sub : function(v) {
		if (v instanceof vec2) return new vec2(this.x - v.x, this.y - v.y);
		else return new vec2(this.x - v, this.y - v);
	},
	dot : function(v) {
		return new vec2(this.x * v.x, this.y * v.y);
	},
	mul : function(v) {
		return new vec2(this.x * v, this.y * v);
	},
	div : function(v) {
		return new vec2(this.x / v, this.y / v);
	},
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	magnitude2 : function() {
		return this.x * this.x + this.y * this.y;
	},
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	distance2 : function(v) {
		return (v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y);
	},
	equals : function(v) {
		return this.x == v.x && this.y == v.y;
	},
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

