function addUpto(n) {
    let total=0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    console.log("this is userB");
    return total;
}

console.log(addUpto(50));
//add up to slower function
//using loop, recursion

//show executing time
var t1 = performance.now();
addUpto(100000000);
var t2 = performance.now();
console.log(`time : ${(t2-t1)/ 1000} seconds`)