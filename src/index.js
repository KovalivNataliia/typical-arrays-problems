
exports.min = function min (array) {
  console.log(array)
  return array === undefined || array.length === 0 ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  console.log(array)
  return array === undefined || array.length === 0 ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
  console.log(array)
  return array === undefined || array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length;
}
