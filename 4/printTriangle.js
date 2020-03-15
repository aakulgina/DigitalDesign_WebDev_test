function printTriangle(size) {
	for (var i = 0; i < (size + 1); i++) {
	   console.log(" ".repeat(size-i), " #".repeat(i))
	}
}
