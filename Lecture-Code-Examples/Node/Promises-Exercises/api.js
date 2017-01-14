/*

  - create a new folder for tonight's exercises
  - In this folder, create a file named 'api.js'

    - In this file, paste:

    ''' js

    module.exports = {

  }

*/

module.exports = {
  getName: function (cb) {
    setTimeout(function () {
      cb(null, 'Fluffykins');
    }, 500);
  }
};
