function yel(f1,f2) {
    console.log("whatsup");
    f1(f2);
}

function bl(f2) {
    console.log("blue");
    f2();
}
function rel() {
    console.log("yooooooooooo");
}
yel(bl,rel);