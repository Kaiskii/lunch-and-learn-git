// Cool Lunch & Learn Code

//
// Basic Fibonacci Sequence
//
let Fibonacci = (n) => {
  if (n <= 1)
    return n;

  return fib(n-1) + fib(n-2);
}

//
// Main Function
//
let Main = () => {
  Fibonacci(4);
}

Main();
