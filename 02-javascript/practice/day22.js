/*
1."0",{},[]会输出真
*/
if (null) console.log("真");
else console.log("假");

/*
2.
*/
const score = 78;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 75) {
  console.log("良好");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

/*
3.
*/
const label = score >= 60 ? "及格" : "不及格";
console.log(label);

/*
4.
*/
const day = 3;
switch (day) {
  case 1:
    console.log("星期一");
    break;
  case 2:
    console.log("星期二");
    break;
  case 3:
    console.log("星期三");
    break;
  case 4:
    console.log("星期四");
    break;
  case 5:
    console.log("星期五");
    break;
  case 6:
    console.log("星期六");
    break;
  case 7:
    console.log("星期天");
    break;
  default:
    console.log("未知天数");
}

/*
5.age = 18把age重新赋值成了18,所以就是成年，前面的15被覆盖了
*/

/*
6.
*/
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
7.
*/
let x = 0;
for (let i = 1; i <= 100; i++) {
  x = i + x;
}
console.log(x);

/*
8.加序号不会
*/
const skills = ["HTML", "CSS", "JS", "Vue"];
for (const [index, skill] of skills.entries()) {
  console.log(`${index + 1}. ${skill}`);
}

/*
9.
*/
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*
10.
*/
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}
