/**
 * 把code写入#code和#styleTag里
 */
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
    styleTag.innerHTML = prefix + code.substring(0, n)
    n += 1
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 23)
}
function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 9)
}

var css1 = `/* 
* 面试官你好，我是Janice
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
*/

/* 首先给所有元素加上过渡效果 */
*{
  transition: all .5s;
}
/* 白色背景太单调了，来点背景 */
html{
  background: rgb(0,43,54); color: rgb(222,222,222);
}
/* 文字离边框太近了 */
#code{
  padding: .5em;
  color: rgb(222,222,222);
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 我需要一点代码高亮 */
.token.comment{ color: rgb(222,222,222); }
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
#code{
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px);
  transform: rotateY(10deg) translateZ(-100px);
}

/* 现在正式开始 */
/* 我需要一张白纸 */
#paper{
  position: fixed; right: 0; top: 0;
}
#paper>.content{
  border: 1px solid;
  background: white;
  padding: .5em; margin: .5em;
  width: 48vw; height: 90vh;
  overflow: auto;
} 
/* 于是我就可以在白纸上写字了，请看右边 */
`
var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`
var md = `
# 张丹  
女 | 25岁 | 前端开发工程师 | 深圳

[我的博客](https://www.jianshu.com/u/56c6b2bd891d)，目前已有 <strong>45</strong> 篇技术文章

[GitHub](https://github.com/JaniceZD)

# 技能介绍  
* 熟悉页面制作技巧，能编写具有 <strong>语义化</strong> 的页面，并将设计稿 <strong>完美还原</strong>
* 熟悉 <strong>前后端分离</strong> 技术，包括 AJAX、跨域、前端路由、Cookie、Session 等
* 熟练掌握 <strong>Vue全家桶</strong> 的使用，包括 VueCli、VueRouter、Vuex 等
* 熟练掌握 <strong>React</strong>、Redux、React Router 等
* 熟悉 <strong>ES6</strong>，包括 let / Promise / await / 析构赋值
* 了解 <strong>TypeScript</strong> 的使用，了解 <strong>Webpack 的配置和优化</strong>
* CET-4/6，能够阅读 <strong>英文</strong> 文档，善用Google，Stack Overflow

# 项目介绍
<header class="header">
  <h3>柠檬 UI（一款基于Vue的前端UI组件库）</h3>
  <span>
    <a href="https://github.com/JaniceZD/gulu-demo" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/gulu-demo" target="_blank">项目预览</a>
  </span>
</header>
该项目是参考 <strong>Element UI</strong>、<strong>Ant Design</strong> 等UI库思路制作的 UI 组件库。
目前已支持包括按钮、Tabs标签页、Popover弹出框、Collapse折叠面板等多个常用组件。
并使用 VuePress 制作 <strong>官方文档</strong>，发布于npmjs.org。

<header>
  <h3>番茄土豆闹钟</h3>
  <span>
    <a href="https://github.com/JaniceZD/potato-demo-test" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/potato-demo-test" target="_blank">项目预览</a>
  </span>
</header>
该项目使用 <strong>React、Redux、React-Router</strong> 等实现了仿番茄土豆的线上应用。
提供登录注册、番茄闹钟计时、历史任务查看、数据统计等功能。

<header>
  <h3>小程序：番茄 TodoLsit</h3>
  <span>
    <a href="https://github.com/JaniceZD/tomato_mini_demo" target="_blank">源码链接</a>
  </span>
</header>
一款根据 <strong>番茄工作法</strong> 概念而进行开发的 <strong>微信小程序</strong>。
提供登录注册、历史Todo查看、完成任务记录、番茄钟计时以及番茄钟暂停再来一组的功能。

<header>
  <h3>动态画出皮卡丘</h3>
  <span>
    <a href="https://github.com/JaniceZD/pikachu-demo" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/pikachu-demo" target="_blank">项目预览</a>
  </span>
</header>
这是一个基于原生 <strong>JavaScript</strong> 和 <strong>CSS3</strong> 完成的项目。
利用 <strong>JS动态写入HTML和CSS</strong>，模拟从零到一画出皮卡丘的过程。

# 开源项目
<header class="header">
  <h3>vue技术栈实现cnode社区</h3>
  <span>
    <a href="https://github.com/JaniceZD/cnode-demo" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/cnode-demo" target="_blank">项目预览</a>
  </span>
</header>
这是一个基于 <strong>Vue</strong> 实现的仿 CNode 社区网站。
主要功能包括帖子查看、用户信息查询、不同主题切换等。

<header>
  <h3>Canvas在线画板</h3>
  <span>
    <a href="https://github.com/JaniceZD/myCanvas" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/mycanvas" target="_blank">项目预览</a>
  </span>
</header>
这是一个基于原生JavaScript、<strong>HTML5</strong> 和 <strong>Canvas</strong> 完成的项目。
提供了选择画笔粗细、颜色调整、橡皮擦擦除、一键清除等功能，并支持画作下载。

# 教育经历

2013年9月 ~ 2017年7月  吉林大学珠海学院  计算机科学与技术

# 工作经历
<header class="header">
  <h3>惠州睿通文化传播有限公司</h3>
  <h4>数据分析师</h4>
  <span><time>2018年10月</time>~<time>2020年8月</time></span>
</header>
任职期间负责监控日常产品营销数据， 并结合业务和产品运营情况，撰写基于数据的周、月度分析
报告，并提出项目改进方案等。
                        
`
var css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
writeCode('', css1, () => {
  createPaper(() => {
    writeMarkdown(md, () => {
      writeCode(css1, css2, () => {
        ConverHtmlToMarkdown(md, () => {
          writeCode(css1 + css2, css3, () => {
            console.log('谢谢观看！')
          })
        })
      })
    })
  })
})

function createPaper(fn) {
  let paper = document.createElement('div')
  paper.id = 'paper'
  let content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}
function ConverHtmlToMarkdown(md, fn) {
  let div = document.createElement('div')
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

