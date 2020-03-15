function printTriangle(size) {
	for (var i = 1; i < (size + 1); i++) {
		console.log(" ".repeat(size-i), " #".repeat(i))
	}
}
