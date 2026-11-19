const products = [
  { name: "键盘", price: 299, category: "电子" },
  { name: "鼠标", price: 89, category: "电子" },
  { name: "笔记本", price: 15, category: "文具" },
  { name: "显示器", price: 899, category: "电子" },
  { name: "钢笔", price: 45, category: "文具" },
];
/* 1.用 map 取出所有商品的名字，得到 ["键盘","鼠标","笔记本","显示器","钢笔"] */
const productList = products.map((n) => n.name);
console.log(productList);

/* 2.用 filter 取出所有「电子」类商品 */
const productCategory = products.filter((n) => n.category === "电子");
console.log(productCategory);

/* 3.用 filter 取出价格大于 100 的商品，再用 map 只取名字 */
const productPrice = products.filter((n) => n.price > 100);
const productName = productPrice.map((n) => n.name);
console.log(productName);

/* 4.用 find 找出第一个价格超过 500 的商品 */
const price500 = products.find((n) => n.price > 500);
console.log(price500);

/* 5.用 reduce 算出所有商品的总价 */
const sumPrice = products.reduce((sum, n) => sum + n.price, 0);
console.log(sumPrice);

/* 6.用 reduce 算出最贵的商品（返回整个对象） */
const maxPrice = products.reduce((max, n) => (n.price > max.price ? n : max));
console.log(maxPrice);

/* 7.用 some 判断有没有超过 800 的商品；用 every 判断是不是都小于 1000 */
const moreThan800 = products.some((n) => n.price > 800);
const lessThan100 = products.every((n) => n.price < 1000);
console.log(moreThan800, lessThan100);

/* 8.对每个商品用 forEach 打印 "键盘 - ¥299" 这种格式 */
products.forEach((n) => console.log(`${n.name} - ¥${n.price}`));

/* 9.解构：从第一个商品里一次取出 name 和 price，然后打印 */
const { name, price } = products[0];
console.log(name, price);

/* 10.挑战：用 filter + map + reduce 一行算出「电子类商品的总价」 */

const total = products
  .filter((p) => p.category === "电子")
  .map((p) => p.price)
  .reduce((sum, p) => sum + p, 0);
console.log(total); // 1287
