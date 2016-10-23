// This function computes the factorial of a givin number

function factorial (num) {
  if ((num === 0) || (num === 1)) {
    return 1;
  }
  else {
    for (i = num; i >= 2; i--) {
      num *= (i - 1);
    }
    return num;
  }
}

factorial(5);
