var emoji = require('node-emoji');
// emoji.get('coffee') // returns the emoji code for coffee (displays emoji on terminals that support it)
// emoji.which(emoji.get('coffee')) // returns the string "coffee"
// emoji.get(':fast_forward:') // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/)
// emoji.emojify('I :heart: :coffee:!') // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!"
//emoji.random() // returns a random emoji + key, e.g. `{ emoji: '❤️', key: 'heart' }`


(function printEmoji () {

  var emojiArray = [];

  for (var i = 0; i <= 20; i++) {
    emojiArray.push(emoji.random().emoji);   //emoji.random() returns an object with two key / value pairs
                                             // so use the property name 'emoji' to just print the emoji
  }

  for (var i = 0; i < emojiArray.length; i++) {
    console.log(emojiArray[i]);
  }
})();
