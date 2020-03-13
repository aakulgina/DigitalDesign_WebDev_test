function printTriangle() {
    var i = 0
    var size = 5
    while (i < size+1) {
    console.log(" ".repeat(size-i), " #".repeat(i));
    i++
    }
}