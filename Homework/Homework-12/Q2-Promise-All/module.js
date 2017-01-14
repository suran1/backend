module.exports = {
  getName: function (cb) {
    setTimeout(function () {
      cb(null, 'Fluffykins');
    }, 500);
  },
  getBreed: function (name, cb) {
    setTimeout(function () {
      cb(null, name + ' is a Dalmatian');
    }, 400);
  },
  getCoatColor: function (breed, cb) {
    setTimeout(function () {
      cb(null, breed + ' with spots!');
    }, 550);
  },
  getRandomNumber: function (cb) {
    setTimeout(function () {
      cb(null, Math.random() * 10);
    }, Math.random() * 500);
  }
};
