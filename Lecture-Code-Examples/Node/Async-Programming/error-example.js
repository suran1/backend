console.log('BEFORE ASYNC CALL');
fs.readFile(__dirname + '/text.txt', 'utf-8', function (err, data){
  console.log('READ FILE CALLBACK');
  console.log(data);
});
console.log('AFTER ASYNC CALL');


// Error Example
console.log ('\nError example');
console.log('BEFORE ASYNC CALL');
fs.readFile(__dirname + '/doesnotexist.txt', 'utf-8', function (err, data){
  if (err) {
    console.error('this file does not exist', err);
  }
  console.log('READ FILE CALLBACK');
  console.log(data);
});
console.log('AFTER ASYNC CALL');
