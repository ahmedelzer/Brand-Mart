// function solution(n, m) {
//   let result = [];
//   for (var i = parseInt(n); i <= parseInt(m); i++) {
//     if (divisors(i) === true) {
//       result.push(BigInt(i));
//     }
//   }
//   return result;
// }
// function divisors(n) {
//   let count = 0;
//   for (var i = 2; i <= 1000 + n; i++) {
//     if (n % i === 0 && n !== 0 && n !== i) {
//       ++count;
//     } else if (count > 3) {
//       return false;
//     }
//   }
//   return count === 3;
// }
// // console.log(BigInt(100));
// console.log(solution(2n, 20n));
function snail(array) {
  let result = [];

  while (array.length > 0) {
    // Take the first row
    result = result.concat(array.shift());

    // Take the last element of each remaining row (right side)
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Take the last row in reverse order if there are any rows left
    if (array.length > 0) {
      result = result.concat(array.pop().reverse());
    }

    // Take the first element of each remaining row (left side) in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
