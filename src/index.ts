export interface Vector {
	x: number;
	y: number;
	z: number;
}

function create(x = 0, y = 0, z = 0): Vector {
	return {
		x,
		y,
		z
	};
}

/**
 * Gets the resultant vector of adding two vectors.
 */
function add(vector1: Vector, vector2: Vector): Vector {
	return {
		x: vector1.x + vector2.x,
		y: vector1.y + vector2.y,
		z: vector1.z + vector2.z
	};
}

/**
 * Gets the difference of two vectors. Subtracts the second vector from the first.
 */
function sub(vector1: Vector, vector2: Vector): Vector {
	return {
		x: vector1.x - vector2.x,
		y: vector1.y - vector2.y,
		z: vector1.z - vector2.z
	};
}

function mult(vector: Vector, scale: number): Vector {
	return {
		x: vector.x * scale,
		y: vector.y * scale,
		z: vector.z * scale
	};
}

function div(vector: Vector, scale: number): Vector {
	return {
		x: vector.x / scale,
		y: vector.y / scale,
		z: vector.z / scale
	};
}

function dot(vector1: Vector, vector2: Vector): number {
	const xComponent = vector1.x * vector2.x;
	const yComponent = vector1.y * vector2.y;
	const zComponent = vector1.z * vector2.z;

	return xComponent + yComponent + zComponent;
}

function cross(vector1: Vector, vector2: Vector): Vector {
	return {
		x: vector1.y * vector2.z - vector1.z * vector2.y,
		y: vector1.z * vector2.x - vector1.x * vector2.z,
		z: vector1.x * vector2.y - vector1.y * vector2.x
	};
}

function limit(vector: Vector, limit: number): Vector {
	const magnitude = mag(vector);
	if (magnitude <= limit) {
		return {
			x: vector.x,
			y: vector.y,
			z: vector.z
		};
	}

	const normalizedVector = normalize(vector);
	return mult(normalizedVector, limit);
}

function mag(vector: Vector): number {
	const xComponent = vector.x * vector.x;
	const yComponent = vector.y * vector.y;
	const zComponent = vector.z * vector.z;

	const magnitude = Math.sqrt(xComponent + yComponent + zComponent);

	return Math.abs(magnitude);
}

function normalize(vector: Vector): Vector {
	const magnitude = mag(vector);

	if (magnitude === 0) {
		return {
			x: vector.x,
			y: vector.y,
			z: vector.z
		};
	}

	const xComponent = vector.x / magnitude;
	const yComponent = vector.y / magnitude;
	const zComponent = vector.z / magnitude;

	return {
		x: xComponent,
		y: yComponent,
		z: zComponent
	};
}

function random(): Vector {
	return {
		x: Math.random() * 2 - 1,
		y: Math.random() * 2 - 1,
		z: Math.random() * 2 - 1
	};
}

export const Vector3 = {
	create,
	add,
	sub,
	mult,
	div,
	dot,
	cross,
	mag,
	normalize,
	limit,
	random
};
