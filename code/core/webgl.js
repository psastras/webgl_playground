// Not yet implemented error, thrown when a method is yet to be implemented.
function NotImplementedError(message) {
    this.name = "NotImplementedError";
    this.message = (message || "");
}
NotImplementedError.prototype = Error.prototype;


// Definse a 4 x 4 matrix with common math operations
function mat4x4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	this.data = [a || 0, b || 0, c || 0, d || 0, e || 0, f || 0, g || 0, h || 0, i || 0, 
				 j || 0, k || 0, l || 0, m || 0, n || 0, o || 0, p || 0];
}

mat4x4.prototype = {

	// Applies the input function to each element of the matrix and returns a reference to this matrix
	map : function(func) {
		for (var i = data.length - 1; i >= 0; i--) {
			func(this.data[i]);
		};
		return this;
	}

	// Returns a new matrix equal to the transpose of the current matrix
	transposed : function() {
		throw {name : "NotImplementedError", message : "todo"};
	},
	// Returns a reference to the transposed version of the current matrix
	transposed : function() {
		throw {name : "NotImplementedError", message : "todo"};
	},
	// If m is a matrix, returns a new matrix equal to an element by element sum of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix summed with that scalar
	add : function(m) {
		if (m instanceof mat4x4) return new mat4x4(	this.data[0] + 	m.data[0], 	this.data[1] + m.data[1], 	this.data[2] + m.data[2], 	this.data[3] + m.data[3],
													this.data[4] + 	m.data[4], 	this.data[5] + m.data[5], 	this.data[6] + m.data[6], 	this.data[7] + m.data[7],
													this.data[8] + 	m.data[8], 	this.data[9] + m.data[9], 	this.data[10] + m.data[10], this.data[11] + m.data[11],
													this.data[12] + m.data[12], this.data[13] + m.data[13], this.data[14] + m.data[14], this.data[15] + m.data[15]);
		else return new mat4x4(	this.data[0] + m, 	this.data[1] + m, 	this.data[2] + m, 	this.data[3] + m,
								this.data[4] + m, 	this.data[5] + m, 	this.data[6] + m, 	this.data[7] + m,
								this.data[8] + m, 	this.data[9] + m, 	this.data[10] + m, 	this.data[11] + m,
								this.data[12] + m, 	this.data[13] + m, 	this.data[14] + m, 	this.data[15] + m);
	},
	// If m is a matrix, returns a new matrix equal to an element by element difference of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix minus the scalar
	sub : function(m) {
		if (m instanceof mat4x4) return new mat4x4(	this.data[0] - 	m.data[0], 	this.data[1] - m.data[1], 	this.data[2] - m.data[2], 	this.data[3] - m.data[3],
													this.data[4] - 	m.data[4], 	this.data[5] - m.data[5], 	this.data[6] - m.data[6], 	this.data[7] - m.data[7],
													this.data[8] - 	m.data[8], 	this.data[9] - m.data[9], 	this.data[10] - m.data[10], this.data[11] - m.data[11],
													this.data[12] - m.data[12], this.data[13] - m.data[13], this.data[14] - m.data[14], this.data[15] - m.data[15]);
		else return new mat4x4(	this.data[0] - m, 	this.data[1] - m, 	this.data[2] - m, 	this.data[3] - m,
								this.data[4] - m, 	this.data[5] - m, 	this.data[6] - m, 	this.data[7] - m,
								this.data[8] - m, 	this.data[9] - m, 	this.data[10] - m, 	this.data[11] - m,
								this.data[12] - m, 	this.data[13] - m, 	this.data[14] - m, 	this.data[15] - m);
	},
	// If m is a matrix, returns a new matrix equal to the matrix multiplication of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the elmement wise matrix multiplication with the scalar
	mul : function(m) {
		if (m instanceof mat4x4) throw {name : "NotImplementedError", message : "todo"};
		else return new mat4x4(	this.data[0] * m, 	this.data[1] * m, 	this.data[2] * m, 	this.data[3] * m,
								this.data[4] * m, 	this.data[5] * m, 	this.data[6] * m, 	this.data[7] * m,
								this.data[8] * m, 	this.data[9] * m, 	this.data[10] * m, 	this.data[11] * m,
								this.data[12] * m, 	this.data[13] * m, 	this.data[14] * m, 	this.data[15] * m);
	},
	// Returns a new matrix equal to the elmement wise matrix division with the scalar
	div : function(m) {
		return new mat4x4(	this.data[0] / m, 	this.data[1] / m, 	this.data[2] / m, 	this.data[3] / m,
							this.data[4] / m, 	this.data[5] / m, 	this.data[6] / m, 	this.data[7] / m,
							this.data[8] / m, 	this.data[9] / m, 	this.data[10] / m, 	this.data[11] / m,
							this.data[12] / m, 	this.data[13] / m, 	this.data[14] / m, 	this.data[15] / m);
	},
	// Returns the determinant of the matrix
	det : function() {
		throw {name : "NotImplementedError", message : "todo"};
	},
	// Returns a new matrix equal to the inverse of the current matrix
	inv : function() {
		throw {name : "NotImplementedError", message : "todo"};
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
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		func(this.x);
		func(this.y);
		func(this.z);
		func(this.w);
		return this;
	}

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

