// Example code from Function Scope in MDN

// Comparing a while loop to recursion

var x = 0;
while (x < 10) { // "x < 10" is the loop condition
   // do stuff
   console.log(x);    
   x++;
}

function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  console.log(x);    
  loop(x + 1); // the recursive call
}
loop(0);

// Recursion is necessary sometimes - for example getting all the nodes of a tree structure (e.g. the DOM) is more easily done using recursion:

function walkTree(node) {
  if (node == null) // 
    return;
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}

/*
It is possible to convert any recursive algorithm to a non-recursive one, but often the logic is much more complex and 
doing so requires the use of a stack. In fact, recursion itself uses a stack: the function stack.

The stack-like behavior can be seen in the following example:
*/

function foo(i) {
  if (i < 0)
    return;
  console.log('begin:' + i);
  foo(i - 1);
  console.log('end:' + i);
}
foo(3);

// Output:

// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3