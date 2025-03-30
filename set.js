// const setA = new Set([1, 2, 3]);

// console.log(setA.has(1));
// console.log(setA.add(1));

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }

  return _union;
}

function intersect(setA, setB) {
  const _intersect = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersect.add(elem);
    }
  }

  return _intersect;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3, 5]);

console.log(union(setA, setB));
console.log(intersect(setA, setB));
