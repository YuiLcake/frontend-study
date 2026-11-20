/*

1.写 makeCounter()，返回一个函数，每次调用返回递增的数字（1、2、3…）
2.写 makeGreeter(prefix)，返回一个函数，接收名字返回 "前缀，名字"。用同一个 makeGreeter 造两个不同的问候函数
3.写 createAccount(初始余额)，返回 deposit 和 getBalance 两个方法，验证外面拿不到余额变量
4.找 bug：下面这段为什么三个都打印 3？
for (var i = 1; i <= 3; i++) {
  setTimeout(function () { console.log(i); }, 100);
}
5.判断 this：下面三次调用分别打印什么？
const obj = {
  name: "obj",
  show() { console.log(this.name); },
};
obj.show();
const f = obj.show;
f();
setTimeout(obj.show, 100);
6.挑战：写 once(fn)，返回一个新函数，保证 fn 无论被调用多少次只执行一次。
const init = once(() => console.log("只执行一次"));
init(); init(); init();   // 只打印一次
第 4、5 题必须能讲清楚原因，不只是答对结果。这两题是面试原题， 能讲清"为什么"就说明今天的内容真的进来了。

*/

//1.写 makeCounter()，返回一个函数，每次调用返回递增的数字（1、2、3…）
function makeCounter() {
  let count = 0;
  return function conTing() {
    count = count + 1;
    return count;
  };
}
const c1 = makeCounter();
console.log(c1(), c1(), c1());

//2.写 makeGreeter(prefix)，返回一个函数，接收名字返回 "前缀，名字"。用同一个 makeGreeter 造两个不同的问候函数
function makeGreeter(prefix) {
  return function (name) {
    return `${prefix}，${name}`;
  };
}

const sayHi = makeGreeter("你好");
const sayBye = makeGreeter("再见");

console.log(sayHi("熙熙"));
console.log(sayBye("熙熙"));

//3.写 createAccount(初始余额)，返回 deposit 和 getBalance 两个方法，验证外面拿不到余额变量
function createAccount(initial) {
  let balance = initial;
  return {
    //加默认值解决NaN问题
    deposit(n = 0) {
      balance += n;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const acc = createAccount(100);
acc.deposit(20);
//console.log(acc.deposit());为什么我加了这段代码后两个输出都是NaN?
console.log(acc.getBalance());
console.log(acc.balance);

//4.找 bug：下面这段为什么三个都打印 3？
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
//实际跑出来是4 4 4，用的是var，var的变量i在这个循环中是一直在用的，在100ms后四次循环跑完了，结果就是4.

//5.判断 this：下面三次调用分别打印什么？
const obj = {
  name: "obj",
  show() {
    console.log(this.name);
  },
};
obj.show();
const f = obj.show;
f();
setTimeout(obj.show, 100);
//obj.show输出obj,f()输出undefined,setTimeout(obj.show, 100);输出obj(实测是undefined为什么呢？)

//6.挑战：写 once(fn)，返回一个新函数，保证 fn 无论被调用多少次只执行一次。
//没有头绪
function once(fn) {
  let called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    return fn();
  };
}
const init = once(() => console.log("只执行一次"));
init();
init();
init();
