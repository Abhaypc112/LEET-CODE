/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};


 const gen = fibGenerator();
 console.log(gen.next(5).value); // 0
console.log( gen.next().value );
// 1
