// logb a = x ↔ bx = a

// log3 9 =x
// a = logaritmando
// b = base do logarítmo
// x = logaritmo

const log = (a, b) => {
	// Qual valor da potência de b que seja igual a a?
	let result = b
	let x = 1
	while(result < a) {
		result *=  b
		x++
		console.log('x', x)
		console.log('result', result)
	}
	return x
}

// log(9, 3)
log(125, 5)