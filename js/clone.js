function cloneWithSpreadOperator(obj) {
    return { ...obj };
}

function cloneWithJsonStringify(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function cloneDeepWithLodash(obj) {
    return _.cloneDeep(obj);
}

const object1 = { id: 1, value: 'simpleObject', age: 24, name: 'Im just a simple objects with strings and numbers' };
const object2 = { value: 'mediumObject', date: new Date(), nestedObject: { hello: 'prop1', hi: new Date() }, cb: () => console.log('hello') };
const object3 = { value: 'bigObject', bigArray: [
    object2, object2, object2, object2, object2, object2, object2, object2,
    object2, object2, object2, object2, object2, object2, object2, object2,
    object2, object2, object2, object2, object2, object2, object2, object2
] };

// Create 3 objects arrays with different objects
const objectsArray = [
    randomArray(1000, () => object1),
    randomArray(1000, () => object2),
    randomArray(1000, () => object3),
];