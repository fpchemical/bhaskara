const toSquare = (n) => n * n
const toSquareRoot = (n) => {
  if (n>0) return Math.sqrt(n)  
} 
const delta = (a, b, c) => toSquare(b) - (4 * a * c)

const x1 = (a, b, c) => {
	if (delta(a, b, c) >= 0) 
	  return (toSquareRoot(delta(a, b, c)) -b) / (2 * a)
	return false
}

const x2 = (a, b, c) => {

	console.log('delta', delta(a, b, c))

	if (delta(a, b, c) === false) {
		alert ('não existe raiz real')
		return false
	}
  return (- toSquareRoot(delta(a, b, c)) -b) / (2 * a)
}

const resultadoBhaskara = [x1(1, -3, 2), x2(1, -3, 2)]


console.log('resultadoBhaskara', resultadoBhaskara) 











