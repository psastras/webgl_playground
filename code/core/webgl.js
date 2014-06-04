// Errors
// ----------
// Not yet implemented error, thrown when a method is yet to be implemented.
function NotImplementedError(message) {
    this.name = "NotImplementedError";
    this.message = (message || "");
}
NotImplementedError.prototype = Error.prototype;

// GL error, thrown when a open gl ecounters an error
function GLError(message) {
    this.name = "GLError";
    this.message = (message || "");
}
GLError.prototype = Error.prototype;

// Mat4x4
// ----------
// Constructs a 4 x 4 matrix with common math operations
function Mat4x4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	this.data = [a || 0, b || 0, c || 0, d || 0, e || 0, f || 0, g || 0, h || 0, i || 0, 
				 j || 0, k || 0, l || 0, m || 0, n || 0, o || 0, p || 0];
}

Mat4x4.prototype = {

	// Applies the input function to each element of the matrix and returns a reference to this matrix
	map : function(func) {
		for (var i = data.length - 1; i >= 0; i--) {
			func(this.data[i]);
		};
		return this;
	},

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
		if (m instanceof Mat4x4) return new Mat4x4(this.data[0] + m.data[0], this.data[1] + m.data[1], this.data[2] + m.data[2], this.data[3] + m.data[3],
													this.data[4] + m.data[4], this.data[5] + m.data[5], this.data[6] + m.data[6], this.data[7] + m.data[7],
													this.data[8] + m.data[8], this.data[9] + m.data[9], this.data[10] + m.data[10], this.data[11] + m.data[11],
													this.data[12] + m.data[12], this.data[13] + m.data[13], this.data[14] + m.data[14], this.data[15] + m.data[15]);
		else return new Mat4x4(this.data[0] + m, this.data[1] + m, this.data[2] + m, this.data[3] + m,
													this.data[4] + m, this.data[5] + m, this.data[6] + m, this.data[7] + m,
													this.data[8] + m, this.data[9] + m, this.data[10] + m, this.data[11] + m,
													this.data[12] + m, this.data[13] + m, this.data[14] + m, this.data[15] + m);
	},
	// If m is a matrix, returns a new matrix equal to an element by element difference of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix minus the scalar
	sub : function(m) {
		if (m instanceof Mat4x4) return new Mat4x4(this.data[0] - m.data[0], this.data[1] - m.data[1], this.data[2] - m.data[2], this.data[3] - m.data[3],
													this.data[4] - m.data[4], this.data[5] - m.data[5], this.data[6] - m.data[6], this.data[7] - m.data[7],
													this.data[8] - m.data[8], this.data[9] - m.data[9], this.data[10] - m.data[10], this.data[11] - m.data[11],
													this.data[12] - m.data[12], this.data[13] - m.data[13], this.data[14] - m.data[14], this.data[15] - m.data[15]);
		else return new Mat4x4(this.data[0] - m, this.data[1] - m, this.data[2] - m, this.data[3] - m,
								this.data[4] - m, this.data[5] - m, this.data[6] - m, this.data[7] - m,
								this.data[8] - m, this.data[9] - m, this.data[10] - m, this.data[11] - m,
								this.data[12] - m, this.data[13] - m, this.data[14] - m, this.data[15] - m);
	},
	// If m is a matrix, returns a new matrix equal to the matrix multiplication of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the elmement wise matrix multiplication with the scalar
	mul : function(m) {
		if (m instanceof Mat4x4) throw {name : "NotImplementedError", message : "todo"};
		else return new Mat4x4(this.data[0] * m, this.data[1] * m, this.data[2] * m, this.data[3] * m,
								this.data[4] * m, this.data[5] * m, this.data[6] * m, this.data[7] * m,
								this.data[8] * m, this.data[9] * m, this.data[10] * m, this.data[11] * m,
								this.data[12] * m, this.data[13] * m, this.data[14] * m, this.data[15] * m);
	},
	// Returns a new matrix equal to the elmement wise matrix division with the scalar
	div : function(m) {
		return new Mat4x4(this.data[0] / m, this.data[1] / m, this.data[2] / m, this.data[3] / m,
							this.data[4] / m, this.data[5] / m, this.data[6] / m, this.data[7] / m,
							this.data[8] / m, this.data[9] / m, this.data[10] / m, this.data[11] / m,
							this.data[12] / m, this.data[13] / m, this.data[14] / m, this.data[15] / m);
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

// Vec4
// ----------
// Constructs a four element vector class with common math operations
function Vec4(x, y, z, w) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w || 1;
}

Vec4.prototype = {
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		func(this.x);
		func(this.y);
		func(this.z);
		func(this.w);
		return this;
	},
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
	// Homogenizes (sets the fourth element to 1) a copy of the current vector and returns the new vector
	homogenized : function() {
		return new Vec4(this.x, this.y, this.z, 1);
	},
	// Unhomogenizes (sets the fourth element to 1) a copy of the current vector and returns the new vector
	unhomogenized : function() {
		return new Vec4(this.x, this.y, this.z, 0);
	},
	// If v is a vector, returns a new vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	add : function(v) {
		if (v instanceof Vec4) return new Vec4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
		else return new Vec4(this.x + v, this.y + v, this.z + v, this.w + v);
	}, 
	// If v is a vector, returns a new vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus that scalar
	sub : function(v) {
		if (v instanceof Vec4) return new Vec4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
		else return new Vec4(this.x - v, this.y - v, this.z - v, this.w - w);
	},
	// Returns a new vector equal to the dot product of this vector and v.
	dot : function(v) {
		return new Vec4(this.x * v.x, this.y * v.y, this.z * v.z, this.w * v.w);
	},
	// Returns a new vector equal to the scalar multiplication of the vector and the scalar v
	mul : function(v) {
		return new Vec4(this.x * v, this.y * v, this.z * v, this.w * v);
	},
	// Returns a new vector equal to the scalar division of the vector and the scalar v
	div : function(v) {
		return new Vec4(this.x / v, this.y / v, this.z / v, this.w / v);
	},
	// Returns the square root of the squared sum of elements of this vector (Euclidean length)
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	// Returns the squared sum of elements of this vector (Euclidean length squared)
	magnitude2 : function() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	},
	// Returns the Euclidean distance between this vector and the vector v
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	// Returns the Euclidean distance squared between this vector and the vector v
	distance2 : function(v) {
		return (v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y) + (v.z - this.z) * (v.z - this.z) 
			+ (v.w - this.w) * (v.w - this.w);
	},
	// Returns the cross product this vector and the vector v
	cross : function(v) {
		return new Vec4(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x, 0);
	},
	// Returns true of the elements of this vector and v are equal
	equals : function(v) {
		return this.x == v.x && this.y == v.y && this.z == v.z;
	},
	// Reflect this vector around normal, assuming this vector is incident to surface and return the outgoing reflected vector
	reflect : function(n) {
		return this.sub(normal.dot(this.dot(normal).mul(2)));
	}
}

// Vec3
// ----------
// Constructs a three element vector class with common math operations
function Vec3(x, y, z) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
}

Vec3.prototype = {
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		func(this.x);
		func(this.y);
		func(this.z);
		return this;
	},
	add : function(v) {
		if (v instanceof Vec3) return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
		else return new Vec3(this.x + v, this.y + v, this.z + v);
	}, 
	sub : function(v) {
		if (v instanceof Vec3) return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
		else return new Vec3(this.x - v, this.y - v, this.z - v);
	},
	dot : function(v) {
		return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
	},
	mul : function(v) {
		return new Vec3(this.x * v, this.y * v, this.z * v);
	},
	div : function(v) {
		return new Vec3(this.x / v, this.y / v, this.z / v);
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
		return new Vec3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
	},
	equals : function(v) {
		return this.x == v.x && this.y == v.y && this.z == v.z;
	},
	// reflect this vector around normal, assuming this vector is incident to surface
	reflect : function(n) {
		return this.sub(normal.dot(this.dot(normal).mul(2)));
	}
}

// Vec2
// ----------
// Constructs a three element vector class with common math operations
function Vec2(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vec2.prototype = {
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		func(this.x);
		func(this.y);
		return this;
	},
	add : function(v) {
		if (v instanceof Vec2) return new Vec2(this.x + v.x, this.y + v.y);
		else return new Vec2(this.x + v, this.y + v);
	}, 
	sub : function(v) {
		if (v instanceof Vec2) return new Vec2(this.x - v.x, this.y - v.y);
		else return new Vec2(this.x - v, this.y - v);
	},
	dot : function(v) {
		return new Vec2(this.x * v.x, this.y * v.y);
	},
	mul : function(v) {
		return new Vec2(this.x * v, this.y * v);
	},
	div : function(v) {
		return new Vec2(this.x / v, this.y / v);
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

// gl
// ----------
// Constructs a GL instance responsible for managing a context associated with a canvas
function GL(canvas) {
	
	this.canvas = canvas;

	try {
		this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	}
	catch(e) { 
		this.gl = null;
	}

	if(!this.gl) {
		throw {name : "GLError", message : "Error initializing GL context."};
	}

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);  	// Clear to black, fully opaque
    this.gl.clearDepth(1.0);                 	// Clear everything
    this.gl.enable(this.gl.DEPTH_TEST);           // Enable depth testing
    this.gl.depthFunc(this.gl.LEQUAL);            // Near things obscure far things
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
}

function Shader() {

}

GL.prototype = {
	// Sets the draw loop function to repeat at the specified interval in milliseconds
	drawLoop : function(func, interval) {
		interval = interval || 30;
		setInterval(func(), interval);
	},
	// Resizes the canvas to the specified dimenion (vec2)
	resize : function(dim) {
		this.canvas.width = dim.x;
		this.canvas.height = dim.y;
	},
	// Loads (compile, attach and links) a vertex and fragment shader from scripts with the given ids.  Returns the shader program.
	loadShaderFromScripts :  function(vertex_id, fragment_id) {
		var vertex_shader = this.gl.createShader(this.gl.VERTEX_SHADER);
		if(!vertex_shader) throw {name : "GLError", message : "Error creating vertex shader."};
		this.gl.shaderSource(vertex_shader, document.getElementById(vertex_id).innerHTML);
		
		this.gl.compileShader(vertex_shader);
	    if (!this.gl.getShaderParameter(vertex_shader, this.gl.COMPILE_STATUS)) {
			var error = this.gl.getShaderInfoLog(vertex_shader);
	        this.gl.deleteShader(vertex_shader);
	        throw {name : "GLError", message : "Error compiling vertex shader. " +  error };
	    }

		var fragment_shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
		if(!fragment_shader) throw {name : "GLError", message : "Error creating fragment shader."};
		this.gl.shaderSource(fragment_shader, document.getElementById(fragment_id).innerHTML);

		this.gl.compileShader(fragment_shader);
	    if (!this.gl.getShaderParameter(fragment_shader, this.gl.COMPILE_STATUS)) {
			var error = this.gl.getShaderInfoLog(fragment_shader);
	        this.gl.deleteShader(fragment_shader);
	        throw {name : "GLError", message : "Error compiling fragment shader. " +  error };
	    }

		var shader_program = this.gl.createProgram();
		if(!shader_program) throw {name : "GLError", message : "Error creating shader program."};

		this.gl.attachShader(shader_program, vertex_shader);
		this.gl.attachShader(shader_program, fragment_shader);
		this.gl.linkProgram(shader_program);
		if (!this.gl.getProgramParameter(shader_program, this.gl.LINK_STATUS)) {
			throw {name : "GLError", message : "Error linking shader program."};
		}

		var shader = {
			program : shader_program,
			bind : function() {
				this.gl.useProgram(program);
			}
		}

		return shader;
	}

}