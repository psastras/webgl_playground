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
	this.data = new Float32Array(16);
	if(a instanceof Mat4x4) this.data.set(a.data);
	else if(a instanceof Array) this.data.set(a);
	else this.data.set([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p]);
}

// Returns a Mat4x4 equal to the identity matrix (1s on the diagonal)
Mat4x4.Identity = function() {
	return new Mat4x4([1, 0, 0, 0,
					   0, 1, 0, 0,
					   0, 0, 1, 0,
					   0, 0, 0, 1]);
}

Mat4x4.prototype = {

	// Applies the input function to each element of the matrix and returns a reference to this matrix
	map : function(func) {
		for (var i = 15; i >= 0; i--) this.data[i] = func(this.data[i], i);
		return this;
	},

	// Returns a new matrix equal to the transpose of the current matrix
	transpose : function() {
		return new Mat4x4([this.data[0], this.data[4], this.data[8], this.data[12],
						   this.data[1], this.data[5], this.data[9], this.data[13],
						   this.data[2], this.data[6], this.data[10], this.data[14],
						   this.data[3], this.data[7], this.data[11], this.data[15]]);
	},
	// If m is a matrix, returns a reference to this matrix equal to an element by element sum of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix summed with that scalar
	addeq : function(m) {
		if (m instanceof Mat4x4) return this.map(function(x, i) { return x + m[i]; });
		else return this.map(function(x, i) { return x + m; });
	},
	// If m is a matrix, returns a new matrix equal to an element by element sum of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix summed with that scalar
	add : function(m) {
		return new Mat4x4(this).addeq(m);
	},
	// If m is a matrix, returns a reference to this matrix equal to an element by element difference of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix minus the scalar
	subeq : function(m) {
		if (m instanceof Mat4x4) return this.map(function(x, i) { return x - m[i]; });
		else return this.map(function(x, i) { return x - m; });
	},
	// If m is a matrix, returns a new matrix equal to an element by element difference of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the matrix minus the scalar
	sub : function(m) {
		return new Mat4x4(this).subeq(m);
	},
	// If m is a matrix, returns a reference to this matrix equal to the matrix multiplication of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the element wise matrix multiplication with the scalar
	muleq : function(m) {
		if (m instanceof Mat4x4) {
			this.data.set([this.data[0]  * m.data[0] + this.data[1]  * m.data[4] + this.data[2]  * m.data[8]  + this.data[3]  * m.data[12],
						   this.data[0]  * m.data[1] + this.data[1]  * m.data[5] + this.data[2]  * m.data[9]  + this.data[3]  * m.data[13],
						   this.data[0]  * m.data[2] + this.data[1]  * m.data[6] + this.data[2]  * m.data[10] + this.data[3]  * m.data[14],
						   this.data[0]  * m.data[3] + this.data[1]  * m.data[7] + this.data[2]  * m.data[11] + this.data[3]  * m.data[15],
						   this.data[4]  * m.data[0] + this.data[5]  * m.data[4] + this.data[6]  * m.data[8]  + this.data[7]  * m.data[12],
						   this.data[4]  * m.data[1] + this.data[5]  * m.data[5] + this.data[6]  * m.data[9]  + this.data[7]  * m.data[13],
						   this.data[4]  * m.data[2] + this.data[5]  * m.data[6] + this.data[6]  * m.data[10] + this.data[7]  * m.data[14],
						   this.data[4]  * m.data[3] + this.data[5]  * m.data[7] + this.data[6]  * m.data[11] + this.data[7]  * m.data[15],
						   this.data[8]  * m.data[0] + this.data[9]  * m.data[4] + this.data[10] * m.data[8]  + this.data[11] * m.data[12],
						   this.data[8]  * m.data[1] + this.data[9]  * m.data[5] + this.data[10] * m.data[9]  + this.data[11] * m.data[13],
						   this.data[8]  * m.data[2] + this.data[9]  * m.data[6] + this.data[10] * m.data[10] + this.data[11] * m.data[14],
						   this.data[8]  * m.data[3] + this.data[9]  * m.data[7] + this.data[10] * m.data[11] + this.data[11] * m.data[15],
						   this.data[12] * m.data[0] + this.data[13] * m.data[4] + this.data[14] * m.data[8]  + this.data[15] * m.data[12],
						   this.data[12] * m.data[1] + this.data[13] * m.data[5] + this.data[14] * m.data[9]  + this.data[15] * m.data[13],
						   this.data[12] * m.data[2] + this.data[13] * m.data[6] + this.data[14] * m.data[10] + this.data[15] * m.data[14],
						   this.data[12] * m.data[3] + this.data[13] * m.data[7] + this.data[14] * m.data[11] + this.data[15] * m.data[15]]);
			return this;
		}
		else return this.map(function(x, i) { return x * m; });
	},
	// If m is a matrix, returns a new matrix equal to the matrix multiplication of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the element wise matrix multiplication with the scalar
	mul : function(m) {
		if (m instanceof Vec4) {
			return new Vec4(this.data[0] * m.data[0] + this.data[1] * m.data[1] + this.data[2] * m.data[2] + this.data[3] * m.data[3],
							this.data[4] * m.data[0] + this.data[5] * m.data[1] + this.data[6] * m.data[2] + this.data[7] * m.data[3],
							this.data[8] * m.data[0] + this.data[9] * m.data[1] + this.data[10] * m.data[2] + this.data[11] * m.data[3],
							this.data[12] * m.data[0] + this.data[13] * m.data[1] + this.data[14] * m.data[2] + this.data[15] * m.data[3]);
		}
		return new Mat4x4(this).muleq(m);
	},
	// If m is a matrix, returns a reference to this matrix equal to the matrix division of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the element wise matrix division with the scalar
	diveq : function(m) {
		if (m instanceof Mat4x4) return this.map(function(x, i) { return x / m[i]; });
		else return this.map(function(x, i) { return x / m; });
	},
	// If m is a matrix, returns a new matrix equal to the matrix division of the two matrices.  Else if m is 
	// a scalar, returns a new matrix equal to the element wise matrix division with the scalar
	div : function(m) {
		return new Mat4x4(this).diveq(m);
	},
	// Returns the determinant of the matrix
	det : function() {
		return this.data[0]*this.data[5]*this.data[10]*this.data[15]-this.data[0]*this.data[5]*this.data[11]*this.data[14]-this.data[0]*this.data[6]*this.data[9]*this.data[15]+this.data[0]*this.data[6]*this.data[11]*this.data[13]+this.data[0]*this.data[7]*this.data[9]*this.data[14]-this.data[0]*this.data[7]*this.data[10]*this.data[13]-this.data[1]*this.data[4]*this.data[10]*this.data[15]+this.data[1]*this.data[4]*this.data[11]*this.data[14]+this.data[1]*this.data[6]*this.data[8]*this.data[15]-this.data[1]*this.data[6]*this.data[11]*this.data[12]-this.data[1]*this.data[7]*this.data[8]*this.data[14]+this.data[1]*this.data[7]*this.data[10]*this.data[12]+this.data[2]*this.data[4]*this.data[9]*this.data[15]-this.data[2]*this.data[4]*this.data[11]*this.data[13]-this.data[2]*this.data[5]*this.data[8]*this.data[15]+this.data[2]*this.data[5]*this.data[11]*this.data[12]+this.data[2]*this.data[7]*this.data[8]*this.data[13]-this.data[2]*this.data[7]*this.data[9]*this.data[12]-this.data[3]*this.data[4]*this.data[9]*this.data[14]+this.data[3]*this.data[4]*this.data[10]*this.data[13]+this.data[3]*this.data[5]*this.data[8]*this.data[14]-this.data[3]*this.data[5]*this.data[10]*this.data[12]-this.data[3]*this.data[6]*this.data[8]*this.data[13]+this.data[3]*this.data[6]*this.data[9]*this.data[12];
	},
	// Returns a new matrix equal to the inverse of the current matrix
	inv : function() {
		var d = this.det();
		return new Mat4x4([
			(this.data[5]*this.data[10]*this.data[15]+this.data[6]*this.data[11]*this.data[13]+this.data[7]*this.data[9]*this.data[14]-this.data[5]*this.data[11]*this.data[14]-this.data[6]*this.data[9]*this.data[15]-this.data[7]*this.data[10]*this.data[13])/d,
			(this.data[1]*this.data[11]*this.data[14]+this.data[2]*this.data[9]*this.data[15]+this.data[3]*this.data[10]*this.data[13]-this.data[1]*this.data[10]*this.data[15]-this.data[2]*this.data[11]*this.data[13]-this.data[3]*this.data[9]*this.data[14])/d,
			(this.data[1]*this.data[6]*this.data[15]+this.data[2]*this.data[7]*this.data[13]+this.data[3]*this.data[5]*this.data[14]-this.data[1]*this.data[7]*this.data[14]-this.data[2]*this.data[5]*this.data[15]-this.data[3]*this.data[6]*this.data[13])/d,
			(this.data[1]*this.data[7]*this.data[10]+this.data[2]*this.data[5]*this.data[11]+this.data[3]*this.data[6]*this.data[9]-this.data[1]*this.data[6]*this.data[11]-this.data[2]*this.data[7]*this.data[9]-this.data[3]*this.data[5]*this.data[10])/d,
			(this.data[4]*this.data[11]*this.data[14]+this.data[7]*this.data[10]*this.data[12]+this.data[6]*this.data[8]*this.data[15]-this.data[4]*this.data[10]*this.data[15]-this.data[6]*this.data[11]*this.data[12]-this.data[7]*this.data[8]*this.data[14])/d,
			(this.data[0]*this.data[10]*this.data[15]+this.data[2]*this.data[11]*this.data[12]+this.data[3]*this.data[8]*this.data[14]-this.data[0]*this.data[11]*this.data[14]-this.data[2]*this.data[8]*this.data[15]-this.data[3]*this.data[10]*this.data[12])/d,
			(this.data[0]*this.data[7]*this.data[14]+this.data[2]*this.data[4]*this.data[15]+this.data[3]*this.data[6]*this.data[12]-this.data[0]*this.data[6]*this.data[15]-this.data[2]*this.data[7]*this.data[12]-this.data[3]*this.data[4]*this.data[14])/d,
			(this.data[0]*this.data[6]*this.data[11]+this.data[2]*this.data[7]*this.data[8]+this.data[3]*this.data[4]*this.data[10]-this.data[0]*this.data[7]*this.data[10]-this.data[2]*this.data[4]*this.data[11]-this.data[3]*this.data[6]*this.data[8])/d,
			(this.data[4]*this.data[9]*this.data[15]+this.data[5]*this.data[11]*this.data[12]+this.data[7]*this.data[8]*this.data[13]-this.data[4]*this.data[11]*this.data[13]-this.data[5]*this.data[8]*this.data[15]-this.data[7]*this.data[9]*this.data[12])/d,
			(this.data[0]*this.data[11]*this.data[13]+this.data[1]*this.data[8]*this.data[15]+this.data[3]*this.data[9]*this.data[12]-this.data[0]*this.data[9]*this.data[15]-this.data[1]*this.data[11]*this.data[12]-this.data[3]*this.data[8]*this.data[13])/d,
			(this.data[0]*this.data[5]*this.data[15]+this.data[1]*this.data[7]*this.data[12]+this.data[3]*this.data[4]*this.data[13]-this.data[0]*this.data[7]*this.data[13]-this.data[1]*this.data[4]*this.data[15]-this.data[3]*this.data[5]*this.data[12])/d,
			(this.data[0]*this.data[7]*this.data[9]+this.data[1]*this.data[4]*this.data[11]+this.data[3]*this.data[5]*this.data[8]-this.data[0]*this.data[5]*this.data[11]-this.data[1]*this.data[7]*this.data[8]-this.data[3]*this.data[4]*this.data[9])/d,
			(this.data[4]*this.data[10]*this.data[13]+this.data[5]*this.data[8]*this.data[14]+this.data[6]*this.data[9]*this.data[12]-this.data[4]*this.data[9]*this.data[14]-this.data[5]*this.data[10]*this.data[12]-this.data[6]*this.data[8]*this.data[13])/d,
			(this.data[0]*this.data[9]*this.data[14]+this.data[1]*this.data[10]*this.data[12]+this.data[2]*this.data[8]*this.data[13]-this.data[0]*this.data[10]*this.data[13]-this.data[1]*this.data[8]*this.data[14]-this.data[2]*this.data[9]*this.data[12])/d,
			(this.data[0]*this.data[6]*this.data[13]+this.data[1]*this.data[4]*this.data[14]+this.data[2]*this.data[5]*this.data[12]-this.data[0]*this.data[5]*this.data[14]-this.data[1]*this.data[6]*this.data[12]-this.data[2]*this.data[4]*this.data[13])/d,
			(this.data[0]*this.data[5]*this.data[10]+this.data[1]*this.data[6]*this.data[8]+this.data[2]*this.data[4]*this.data[9]-this.data[0]*this.data[6]*this.data[9]-this.data[1]*this.data[4]*this.data[10]-this.data[2]*this.data[5]*this.data[8])/d
		]);
	},
	// Returns true of the elements of this matrix and m are equal
	equals : function(m) {
		return this.map(function(x, i) { if(x != m.data[i]) return false; }) || true;
	},
}

// Vec4
// ----------
// Constructs a four element vector class with common math operations
function Vec4(x, y, z, w) {
	this.data = new Float32Array(4);
	if(x instanceof Vec4) {
		this.data.set(x.data);
	} else if(x instanceof Array || x instanceof Float32Array) {
		this.data.set(x);
	} else {
		this.data[0] = x || 0;
		this.data[1] = y || 0;
		this.data[2] = z || 0;
		this.data[3] = w || 0;
	}
}

Vec4.prototype = {
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		this.data[0] = func(this.data[0], 0);
		this.data[1] = func(this.data[1], 1);
		this.data[2] = func(this.data[2], 2);
		this.data[3] = func(this.data[3], 3);
		return this;
	},
	// Homogenizes (sets the fourth element to 1) the current vector and returns a reference
	homogenize : function() {
		this.data[3] = 1;
		return this;
	},
	// Unhomogenizes (sets the fourth element to 0) the current vector and returns a reference
	unhomogenize : function() {
		this.data[3] = 0;
		return this;
	},
	// Homogenizes (sets the fourth element to 1) a copy of the current vector and returns the new vector
	homogenized : function() {
		return new Vec4(this.data[0], this.data[1], this.data[2], 1);
	},
	// Unhomogenizes (sets the fourth element to 1) a copy of the current vector and returns the new vector
	unhomogenized : function() {
		return new Vec4(this.data[0], this.data[1], this.data[2], 0);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	addeq : function(v) {
		if (v instanceof Vec4) this.data[0] += v.data[0], this.data[1] += v.data[1], this.data[2] += v.data[2], this.data[3] += v.data[3];
		else this.data[0] += v, this.data[1] += v, this.data[2] += v, this.data[3] += v;
		return this;
	},
	// If v is a vector, returns a new vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	add : function(v) {
		return new Vec4(this).addeq(v);
	},  
	// If v is a vector, returns a reference to this vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus with that scalar
	subeq : function(v) {
		if (v instanceof Vec4) this.data[0] -= v.data[0], this.data[1] -= v.data[1], this.data[2] -= v.data[2], this.data[3] -= v.data[3];
		else this.data[0] -= v, this.data[1] -= v, this.data[2] -= v, this.data[3] -= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus that scalar
	sub : function(v) {
		return new Vec4(this).subeq(v);
	},
	// Returns a new vector equal to the dot product of this vector and v.
	dot : function(v) {
		return new Vec4(this.data[0] * v.data[0], this.data[1] * v.data[1], this.data[2] * v.data[2], this.data[3] * v.data[3]);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element multiplication of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector multiplied with that scalar
	muleq : function(v) {
		if (v instanceof Vec4) this.data[0] *= v.data[0], this.data[1] *= v.data[1], this.data[2] *= v.data[2], this.data[3] *= v.data[3];
		else this.data[0] *= v, this.data[1] *= v, this.data[2] *= v, this.data[3] *= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element multiplication of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector multiplied with that scalar
	mul : function(v) {
		return new Vec4(this).muleq(v);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element dvision of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector divided with that scalar
	diveq : function(v) {
		if (v instanceof Vec4) this.data[0] /= v.data[0], this.data[1] /= v.data[1], this.data[2] /= v.data[2], this.data[3] /= v.data[3];
		else this.data[0] /= v, this.data[1] /= v, this.data[2] /= v, this.data[3] /= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element dvision of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector divided with that scalar
	div : function(v) {
		return new Vec4(this).diveq(v);
	},
	// Returns a reference to this vector equal to the normalized (unit length) of this vector
	normalize : function() {
		return this.diveq(this.magnitude());
	},
	// Returns a new vector equal to the normalized (unit length) of this vector
	normalized : function() {
		return new Vec4(this).normalize();
	},
	// Returns the square root of the squared sum of elements of this vector (Euclidean length)
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	// Returns the squared sum of elements of this vector (Euclidean length squared)
	magnitude2 : function() {
		return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3];
	},
	// Returns the Euclidean distance between this vector and the vector v
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	// Returns the Euclidean distance squared between this vector and the vector v
	distance2 : function(v) {
		return (v.data[0] - this.data[0]) * (v.data[0] - this.data[0]) + (v.data[1] - this.data[1]) * (v.data[1] - this.data[1]) + (v.data[2] - this.data[2]) * (v.data[2] - this.data[2]) 
			+ (v.data[3] - this.data[3]) * (v.data[3] - this.data[3]);
	},
	// Returns a new vector equal to the cross product this vector and the vector v
	cross : function(v) {
		return new Vec4(this.data[1] * v.data[2] - this.data[2] * v.data[1], this.data[2] * v.data[0] - this.data[0] * v.data[2], this.data[0] * v.data[1] - this.data[1] * v.data[0], 0);
	},
	// Returns true of the elements of this vector and v are equal
	equals : function(v) {
		return this.data[0] == v.data[0] && this.data[1] == v.data[1] && this.data[2] == v.data[2];
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
	this.data = new Float32Array(3);
	if(x instanceof Vec3) {
		this.data.set(x.data);
	} else if(x instanceof Array || x instanceof Float32Array) {
		this.data.set(x);
	} else {
		this.data[0] = x || 0;
		this.data[1] = y || 0;
		this.data[2] = z || 0;
	}
}

Vec3.prototype = {
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		this.data[0] = func(this.data[0], 0);
		this.data[1] = func(this.data[1], 1);
		this.data[2] = func(this.data[2], 2);
		return this;
	},
	// If v is a vector, returns a reference to this vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	addeq : function(v) {
		if (v instanceof Vec3) this.data[0] += v.data[0], this.data[1] += v.data[1], this.data[2] += v.data[2];
		else this.data[0] += v, this.data[1] += v, this.data[2] += v;
		return this;
	},
	// If v is a vector, returns a new vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	add : function(v) {
		return new Vec3(this).addeq(v);
	},  
	// If v is a vector, returns a reference to this vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus with that scalar
	subeq : function(v) {
		if (v instanceof Vec3) this.data[0] -= v.data[0], this.data[1] -= v.data[1], this.data[2] -= v.data[2];
		else this.data[0] -= v, this.data[1] -= v, this.data[2] -= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus that scalar
	sub : function(v) {
		return new Vec3(this).subeq(v);
	},
	// Returns a new vector equal to the dot product of this vector and v.
	dot : function(v) {
		return new Vec3(this.data[0] * v.data[0], this.data[1] * v.data[1], this.data[2] * v.data[2]);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element multiplication of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector multiplied with that scalar
	muleq : function(v) {
		if (v instanceof Vec3) this.data[0] *= v.data[0], this.data[1] *= v.data[1], this.data[2] *= v.data[2];
		else this.data[0] *= v, this.data[1] *= v, this.data[2] *= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element multiplication of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector multiplied with that scalar
	mul : function(v) {
		return new Vec3(this).muleq(v);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element dvision of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector divided with that scalar
	diveq : function(v) {
		if (v instanceof Vec3) this.data[0] /= v.data[0], this.data[1] /= v.data[1], this.data[2] /= v.data[2];
		else this.data[0] /= v, this.data[1] /= v, this.data[2] /= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element dvision of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector divided with that scalar
	div : function(v) {
		return new Vec3(this).diveq(v);
	},
	// Returns a reference to this vector equal to the normalized (unit length) of this vector
	normalize : function() {
		return this.diveq(this.magnitude());
	},
	// Returns a new vector equal to the normalized (unit length) of this vector
	normalized : function() {
		return new Vec3(this).normalize();
	},
	// Returns the square root of the squared sum of elements of this vector (Euclidean length)
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	// Returns the squared sum of elements of this vector (Euclidean length squared)
	magnitude2 : function() {
		return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2];
	},
	// Returns the Euclidean distance between this vector and the vector v
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	// Returns the Euclidean distance squared between this vector and the vector v
	distance2 : function(v) {
		return (v.data[0] - this.data[0]) * (v.data[0] - this.data[0]) + (v.data[1] - this.data[1]) * (v.data[1] - this.data[1]) + (v.data[2] - this.data[2]) * (v.data[2] - this.data[2]);
	},
	// Returns a new vector equal to the cross product this vector and the vector v
	cross : function(v) {
		return new Vec3(this.data[1] * v.data[2] - this.data[2] * v.data[1], this.data[2] * v.data[0] - this.data[0] * v.data[2], this.data[0] * v.data[1] - this.data[1] * v.data[0]);
	},
	// Returns true of the elements of this vector and v are equal
	equals : function(v) {
		return this.data[0] == v.data[0] && this.data[1] == v.data[1] && this.data[2] == v.data[2];
	},
	// Reflect this vector around normal, assuming this vector is incident to surface
	reflect : function(n) {
		return this.sub(normal.dot(this.dot(normal).mul(2)));
	}
}

// Vec2
// ----------
// Constructs a three element vector class with common math operations
function Vec2(x, y) {
	this.data = new Float32Array(2);
	if(x instanceof Vec2) {
		this.data.set(x.data);
	} else if(x instanceof Array || x instanceof Float32Array) {
		this.data.set(x);
	} else {
		this.data[0] = x || 0;
		this.data[1] = y || 0;
	}
}

Vec2.prototype = {
	// Applies the input function to each element of the vector and returns a reference to this vector
	map : function(func) {
		this.data[0] = func(this.data[0], 0);
		this.data[1] = func(this.data[1], 1);
		return this;
	},
	// If v is a vector, returns a reference to this vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	addeq : function(v) {
		if (v instanceof Vec2) this.data[0] += v.data[0], this.data[1] += v.data[1];
		else this.data[0] += v, this.data[1] += v;
		return this;
	},
	// If v is a vector, returns a new vector equal to an element by element sum of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector summed with that scalar
	add : function(v) {
		return new Vec2(this).addeq(v);
	},  
	// If v is a vector, returns a reference to this vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus with that scalar
	subeq : function(v) {
		if (v instanceof Vec2) this.data[0] -= v.data[0], this.data[1] -= v.data[1];
		else this.data[0] -= v, this.data[1] -= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element difference of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector minus that scalar
	sub : function(v) {
		return new Vec2(this).subeq(v);
	},
	// Returns a new vector equal to the dot product of this vector and v.
	dot : function(v) {
		return new Vec2(this.data[0] * v.data[0], this.data[1] * v.data[1]);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element multiplication of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector multiplied with that scalar
	muleq : function(v) {
		if (v instanceof Vec2) this.data[0] *= v.data[0], this.data[1] *= v.data[1];
		else this.data[0] *= v, this.data[1] *= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element multiplication of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector multiplied with that scalar
	mul : function(v) {
		return new Vec2(this).muleq(v);
	},
	// If v is a vector, returns a reference to this vector equal to an element by element dvision of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector divided with that scalar
	diveq : function(v) {
		if (v instanceof Vec2) this.data[0] /= v.data[0], this.data[1] /= v.data[1];
		else this.data[0] /= v, this.data[1] /= v;
		return this;
	}, 
	// If v is a vector, returns a new vector equal to an element by element dvision of the two vectors.  Else if v is 
	// a scalar, returns a new vector equal to the vector divided with that scalar
	div : function(v) {
		return new Vec2(this).diveq(v);
	},
	// Returns a reference to this vector equal to the normalized (unit length) of this vector
	normalize : function() {
		return this.diveq(this.magnitude());
	},
	// Returns a new vector equal to the normalized (unit length) of this vector
	normalized : function() {
		return new Vec2(this).normalize();
	},
	// Returns the square root of the squared sum of elements of this vector (Euclidean length)
	magnitude : function() {
		return Math.sqrt(this.magnitude2());
	},
	// Returns the squared sum of elements of this vector (Euclidean length squared)
	magnitude2 : function() {
		return this.data[0] * this.data[0] + this.data[1] * this.data[1];
	},
	// Returns the Euclidean distance between this vector and the vector v
	distance : function(v) {
		return Math.sqrt(this.distance2(v));
	},
	// Returns the Euclidean distance squared between this vector and the vector v
	distance2 : function(v) {
		return (v.data[0] - this.data[0]) * (v.data[0] - this.data[0]) + (v.data[1] - this.data[1]) * (v.data[1] - this.data[1]);
	},
	// Returns true of the elements of this vector and v are equal
	equals : function(v) {
		return this.data[0] == v.data[0] && this.data[1] == v.data[1];
	},
}

// Quaternion
// ----------
function Quaternion(x, y, z, w) {
	if(x instanceof Quaternion)	Vec4.call(this, x.data);
	else Vec4.call(this, x, y, z, w);
}

Quaternion.prototype = new Vec4();
Quaternion.prototype.constructor = Quaternion;
Quaternion.prototype.conjugated = function() {
	this.data[0] = -this.data[0];
	this.data[1] = -this.data[1];
	this.data[2] = -this.data[2];
	return this;
}
Quaternion.prototype.conjugate = function() {
	return new Quaternion(this).conjugated();
}
Quaternion.prototype.inverted = function() {
	return this.conjugated().diveq(this.magnitude());
}
Quaternion.prototype.inverse = function() {
	return new Quaternion(this).inverted();
}
Quaternion.prototype.muleq = function(q) {
	if (q instanceof Quaternion) {
		return this.data.set(new Quaternion(
				this.data[1] * q.data[2] - this.data[2] * q.data[1] + this.data[0] * q.data[3] + this.data[3] * q.data[0],
				this.data[2] * q.data[0] - this.data[0] * q.data[2] + this.data[1] * q.data[3] + this.data[3] * q.data[1],
				this.data[0] * q.data[1] - this.data[1] * q.data[0] + this.data[2] * q.data[3] + this.data[3] * q.data[2],
				this.data[3] * q.data[3] - this.data[0] * q.data[0] - this.data[1] * q.data[1] - this.data[2] * q.data[2]
			).data);
	}
	return Vec4.prototype.muleq.call(this, q);
}
Quaternion.prototype.mul = function(q) {
	return new Quaternion(this).muleq(q);
}
Quaternion.prototype.rotMat = function () {
	var n = this.normalized();
	return new Mat4x4([
			1-2*n.data[1]*n.data[1] - 2*n.data[2]*n.data[2], 
			2*n.data[0]*n.data[1] - 2*n.data[2]*n.data[3],
			2*n.data[0]*n.data[2] + 2*n.data[1]*n.data[3],
			0,
			2*n.data[0]*n.data[1] + 2*n.data[2]*n.data[3],
			1-2*n.data[0]*n.data[0] - 2*n.data[2]*n.data[2], 
			2*n.data[1]*n.data[2] - 2*n.data[0]*n.data[3], 
			0,
			2*n.data[0]*n.data[2] - 2*n.data[1]*n.data[3],
			2*n.data[1]*n.data[2] + 2*n.data[0]*n.data[3],
			1-2*n.data[0]*n.data[0] - 2*n.data[1]*n.data[1], 0,
			0, 0, 0, 1
		]);
}
Quaternion.prototype.complex = function() {
	return new Vec4(this.data.subarray(0, 3));
}
Quaternion.prototype.rotatedVector = function(v) {
	return (this.mul(new Quaternion(v.data.subarray(0, 3)))).mul(this.conjugate()).complex();
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

	this.gl.clearColor(1.0, 1.0, 1.0, 1.0);  	// Clear to black, fully opaque
    this.gl.clearDepth(1.0);                 	// Clear everything
    this.gl.enable(this.gl.DEPTH_TEST);           // Enable depth testing
    this.gl.depthFunc(this.gl.LEQUAL);            // Near things obscure far things
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
}

GL.prototype = {
	// Sets the draw loop function to repeat at the specified interval in milliseconds
	drawLoop : function(func, interval) {
		interval = interval || 30;
		setInterval(func(), interval);
	},
	// Resizes the canvas to the specified dimenion (vec2)
	resize : function(dim) {
		this.canvas.width = dim.data[0];
		this.canvas.height = dim.data[1];
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
	},
	// Binds a uniform value to the current shader, infers the value type
	bindUniform : function(name, value) {
		throw {name : "NotImplementedError", message : "todo"};
	}

}