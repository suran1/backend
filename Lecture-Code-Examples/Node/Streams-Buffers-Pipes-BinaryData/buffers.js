var buf = Buffer.alloc(10);
console.log(buf);

var buf1 = Buffer.from('Buffer Demo');
console.log(buf1);
console.log(buf1);

var buf3 = Buffer.from(buf);


console.log(buf3);

console.log(buf1.toString());   // called stringification
console.log(buf1.toJSON());  // puts it into an array and converts from hex to decimal
console.log(buf1[2]);
buf1.write(' No 1', 'utf-8');
console.log(buf1);
