var arr = new Array(5)

function fillArray() {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = Math.floor(Math.random() * (100 - (-100) + 1) + (-100))
	}
}

function replaceFromArray() {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) arr[i] = 0
	}
}

function addToArray() {
	var indx = new Array(0)
	var k = 0
	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			k++
			if (k == 2) {
				indx.push(i+1)
				k = 0
			}
		}
	}
		
		for (var i = 0; i < indx.length; i++) {
			arr.splice(indx[i]+i, 0, -1)
		}
}
