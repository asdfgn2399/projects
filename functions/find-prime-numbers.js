var findPrimeNumbers = function (numToStop) {
  var primeNumbers = [];
  for (var i = 2; i < numToStop; i++) {
    var isPrime = true;
    var newContent = "";
    for (var j = 0; j < primeNumbers.length; j++) {
      if (i % primeNumbers[j] === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}
