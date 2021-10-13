function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

export { Queue };
