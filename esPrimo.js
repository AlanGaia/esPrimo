function esPrimo(num) {
  // 1 no se considera primo por lo tanto el numero debe ser 2 o mayor
  if (num <= 1) {
    return false;
  }

  //siempre que i sea menor(2) que el numero elegido ir dividiendo desde (2) hasta (num-1)
  for (let i = 2; i < num; i++) {
    //si en esas divisiones consigo un resto 0, ese numero no es primo.
    if (num % i === 0) {
      return false;
    }
  }
  //En caso contrario es primo
  return true;
}

console.log(esPrimo(4));
