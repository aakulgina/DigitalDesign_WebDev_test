var arr = new Array(5)

function fillArray() {
	var i = 0
	var max = 100
	var min = -100
	while (i < arr.length) {
		arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
		i ++
	}
}

function replaceFromArray() {
	var i = 0
	while (i < arr.length) {
		if (arr[i] < 0) {
			arr[i] = 0
		}
		i++
	}
}

function addToArray() {
	var indx = new Array(0)
	var i = 0
	var k = 0
	while (i < arr.length) {
		if (arr[i] == 0) {
			k++
			if (k == 2) {
				indx.push(i+1)
				k = 0
			}
		}
		i++
	}
	var i = 0
	while (i < indx.length) {
		arr.splice(indx[i]+i, 0, -1)
		i++
	}
}