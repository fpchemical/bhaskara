const toSquare = (n) => n * n
const toSquareRoot = (n) => {
  if (n>0) return Math.sqrt(n)  
} 

const delta = (a, b, c) => toSquare(b) - (4 * a * c)
const sqrtDelta = (a, b, c) =>
	toSquareRoot(delta(a, b, c))

const x1 = (a, b, c) => 
	(delta(a, b, c) >= 0) 
		? [	(sqrtDelta(a, b, c)-b) / (2 * a), 
				(-sqrtDelta(a, b, c)-b) / (2 * a)
			] 	
		: false

const resultadoBhaskara = x1(1, -3, 2)


console.log('resultadoBhaskara', resultadoBhaskara) 











