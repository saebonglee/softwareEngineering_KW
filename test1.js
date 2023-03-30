function addUpto(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  console.log("this is userA");
  return total;
}

console.log(addUpto(20));
//add up to slower function
//using loop, recursion

//show executing time
var t1 = performance.now();
addUpto(200000000);
var t2 = performance.now();
console.log(`time : ${(t2 - t1) / 1000} seconds`);
