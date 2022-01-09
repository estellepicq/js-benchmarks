function cloneWithSpreadOperator(obj) {
    return { ...obj };
}

function cloneWithJsonStringify(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function cloneDeepWithLodash(obj) {
    return _.cloneDeep(obj);
}