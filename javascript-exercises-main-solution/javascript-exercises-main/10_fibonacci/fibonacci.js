const fibonacci = function(countArg) {
    let count = typeof countArg === 'number' ? countArg : parseInt(countArg);
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
  
    let firstPrev = 1;
    let secondPrev = 0;
  
    for (let i = 2; i <= count; i++) {
      let current = firstPrev + secondPrev;
      secondPrev = firstPrev;
      firstPrev = current;
    }
    return firstPrev;
  };