# 前端学习日志

> 从零到前端开发的 110 天。记录计划、代码和踩过的坑。

**线上站点：https://yuilcake.github.io/frontend-study/**
**个人主页（独立仓库）：https://yuilcake.github.io/**

## 这是什么

一个软件工程大四学生的前端转型记录，起点是零基础，终点是 2027 年春节后
拿到广州或深圳的前端开发 offer。

这个仓库不存放教程，只存放我自己写的东西：每周的产出页面、练习项目、
以及每天的真实进度。

## 目录结构

```
00-学习计划.md          到周的完整路线图（含验收标准）
进度.md                 每日进度日志
学习摘要/               每周 Word 摘要（错误 / 新词 / 新知识 / 产出）
01-html-css/day1-20/    W1–W4 的课件与练习
02-javascript/day21...  W5 起的 JavaScript 课件
02-javascript/practice/ JS 练习文件（用 node 运行）
docs/                   站点（GitHub Pages 从这里发布）
  index.html            首页
  about.html            关于
  contact.html          联系
```

## 怎么跑起来

没有构建步骤，纯 HTML。用本地服务器打开（不要双击文件，file:// 协议下
ES Module 和 fetch 会被浏览器拦掉）：

```bash
cd 01-html-css/day1
python -m http.server 8123
# 浏览器访问 http://localhost:8123/
```

## 进度

- [x] **W1（10/19–10/25）** 环境配置、HTML 文档结构、语义化骨架与多页站点、Git 与 GitHub 首次推送
- [x] **W2（10/26–11/01）** CSS 选择器与优先级、盒模型、display 与 position、Flexbox 六个套路、真实站点组件复刻挑战
- [x] **W3（11/02–11/08）** CSS 变量与设计令牌、Grid 布局、响应式三件套、个人主页 v1
- [x] **W4（11/09–11/15）** 伪类与伪元素、过渡与变形、BEM 命名、GitHub Pages 部署上线、v2 打磨
- [ ] **W5（11/16–11/22）** JavaScript 进行中：变量与类型、条件与循环、函数、数组与对象

## 阶段产出

| 周 | 硬性产出 |
|---|---|
| W1 | 三页静态站点上线 GitHub Pages |
| W2 | 复刻真实站点组件（GitHub 仓库卡片） |
| W3 | 个人主页 v1（桌面 + 手机两套布局） |
| W4 | 个人主页上线 <https://yuilcake.github.io/> |
| W5 | 待定：JS 综合练习页 |

## TODO（待我补完）

1. 记录过程和错误是提升自己的必经之路，想要真正会前端并有竞争力就需要会真东西
2. 每完成一个阶段，在「进度」里加一行，并链接到对应目录
3. ~~W4 上线个人主页后，把线上地址加到最上面~~（已完成）
