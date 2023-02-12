# Vector 3D library

A simple light weight vector library with vector utilities functions. Vectors are simple object literals and individual components can be. All utilities are immutable and return a new vector literal.

## Example
```ts

const vector1 = Vector3.create(5,5);
const vector2 = Vector3.create(10,10);

const sumVector = Vector3.add(vector1, vector2);
// sumVector === {x: 15, y: 15, z:0}

```