var arr = new Array(5)

function fillArray(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.floor(Math.random() * (100 - (-100) + 1) + (-100))
	}
	return array
}

function replaceFromArray(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] < 0) array[i] = 0
	}
	return array
}

function addToArray(array) {
	var k = 0
	for (var i = 0; i < array.length; i++) {
		if (array[i] == 0) k++
		if (k != 2) continue
	    array.splice(i+1, 0, -1)
		k = 0
	}
	return array
}
