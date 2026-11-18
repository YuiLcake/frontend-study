/*
1.
*/
function calcTotal(price, count) {
  const TAX = 0.1;
  return price * count * (TAX + 1).toFixed(2);
}
console.log(calcTotal(10, 20));

/*
2.
*/
function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(19));

/*
3.
*/
function greet(name = "同学") {
  return `你好，${name}`;
}
console.log(greet("熙熙"));
console.log(greet());

/*
4.
*/
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(1, 2));

/*
5.
*/
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumTo(100));

/*
6.
*/
function repeat(str, times) {
  let result = ""; // 先准备一个空盒子
  for (let i = 1; i <= times; i++) {
    result = result + str; // 每轮往盒子里加一份
  }
  return result; // 循环结束后交出去
}
console.log(repeat("熙熙", 3)); // "熙熙熙熙熙熙"

/*
7.不会处理数组
*/
function countEven(arr) {
  let count = 0;
  for (const n of arr) {
    if (n % 2 === 0) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countEven([1, 2, 3, 4, 5, 6]));

/*
8.
*/
const square = (n) => n ** 2;
console.log(square(3));

/*
9.没有写return
*/

/*
10.
*/
function formatPrice(amount) {
  return `¥${amount.toFixed(2)}`;
}

console.log(formatPrice(12));
console.log(formatPrice(12.5));
console.log(formatPrice(12.555));
