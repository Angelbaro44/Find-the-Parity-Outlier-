
function findOutlier(integers) {
      if (integers.filter(x => x % 2).length == 1) {
            return parseInt(integers.filter(x => x % 2).join())
      }
      if (integers.filter(x => { if (x % 2 == 0) { return x } }).length == 1) {
            return parseInt(integers.filter(x => { if (x % 2 == 0) { return x } }).join())
      }
      else { return parseInt(integers.filter(x => !x % 2).join()) }
}












// Test Cases
console.log(findOutlier([0, 1, 2]))
// Expected Result: 1

console.log(findOutlier([1, 2, 3]))
// Expected Result: 2

console.log(findOutlier([2, 6, 8, 10, 3]))
// Expected Result: 3

console.log(findOutlier([0, 0, 3, 0, 0]))
// Expected Result: 3

console.log(findOutlier([1, 1, 0, 1, 1]))
// Expected Result: 0
