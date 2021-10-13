function Stack(array) {
  this.array = array ? array : [];
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Stack.prototype.push = function (element) {
  return this.array.push(element);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

export { Stack };
