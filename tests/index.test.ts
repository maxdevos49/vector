import assert from 'node:assert';

import { Vector3 } from '../src/index.js';

describe('Vector3.create', () => {
	it('Should create an empty vector', () => {
		assert.deepEqual(Vector3.create(), { x: 0, y: 0, z: 0 });
	});

	it('Should create a vector with the given default value.', () => {
		assert.deepEqual(Vector3.create(10, 10.5, 3), { x: 10, y: 10.5, z: 3 });
		assert.deepEqual(Vector3.create(5, 3), { x: 5, y: 3, z: 0 });
		assert.deepEqual(Vector3.create(-1, 6, 2), { x: -1, y: 6, z: 2 });
		assert.deepEqual(Vector3.create(), { x: 0, y: 0, z: 0 });
	});
});

describe('Vector3.add', () => {
	it('Should add 2 zero vectors to the sum of a zero vector', () => {
		const vector1 = Vector3.create();
		const vector2 = Vector3.create();

		assert.deepEqual(Vector3.add(vector1, vector2), Vector3.create());
	});

	it('Should add two vectors correctly', () => {
		const vector1 = Vector3.create(10, -1, 5);
		const vector2 = Vector3.create(5, 7, 3);

		assert.deepEqual(Vector3.add(vector1, vector2), Vector3.create(15, 6, 8));
	});
});

describe('Vector3.sub', () => {
	it('Should sub 2 zero vectors to the difference of a zero vector', () => {
		const vector1 = Vector3.create();
		const vector2 = Vector3.create();

		assert.deepEqual(Vector3.sub(vector1, vector2), Vector3.create());
	});

	it('Should subtract vectors correctly', () => {
		const vector1 = Vector3.create(10, -1, 5);
		const vector2 = Vector3.create(5, 7, 3);

		assert.deepEqual(Vector3.sub(vector1, vector2), Vector3.create(5, -8, 2));
	});
});

describe('Vector3.mult', () => {
	it('Should mult/scale a zero vector to a zero vector', () => {
		const vector = Vector3.create();

		assert.deepEqual(Vector3.mult(vector, 10), Vector3.create());
	});

	it('Should mult/scale a vector correctly', () => {
		const vector = Vector3.create(10,10,10);

		assert.deepEqual(Vector3.mult(vector, 10), Vector3.create(100,100,100));
	});
});

describe('Vector3.mult', () => {
	it('Should div/scale a zero vector to a zero vector', () => {
		const vector = Vector3.create();

		assert.deepEqual(Vector3.div(vector, 10), Vector3.create(0,0,0));
	});

	it('Should div/scale a vector correctly', () => {
		const vector = Vector3.create(1000,100,10);

		assert.deepEqual(Vector3.div(vector, 10), Vector3.create(100,10,1));
	});
});

describe('Vector3.dot', () => {
	it('Should return a zero vector when operating on 2 zero vectors', () => {
		const vector1 = Vector3.create();
		const vector2 = Vector3.create();

		assert.equal(Vector3.dot(vector1, vector2), 0);
	});

	it('Should return the correct dot product', () => {
		const vector1 = Vector3.create(10, -1, 5);
		const vector2 = Vector3.create(5, 7, 3);

		assert.equal(Vector3.dot(vector1, vector2), 58);
	});
});