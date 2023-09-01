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
  }, 20)
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
  -webkit-transform: rotateY(10deg) translateZ(20px);
  transform: rotateY(10deg) translateZ(20px);
}

/* 现在正式开始 */
/* 我需要一张白纸 */
#paper{
  position: fixed; right: .5em; top: 0;
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
女 | 28岁 | 前端开发工程师 | <strong>2年经验</strong> 

[我的博客](https://www.jianshu.com/u/56c6b2bd891d)，目前已有 <strong>50</strong> 篇技术文章

[GitHub](https://github.com/JaniceZD)

# 技能介绍  
* 熟悉页面制作技巧，能编写具有 <strong>语义化</strong> 的页面，并将设计稿 <strong>完美还原</strong>
* 熟悉 Sass、Less 等 CSS 预处理库
* 熟悉 <strong>前后端分离</strong> 技术，包括 AJAX、跨域、前端路由、Cookie、Session 等
* 熟练掌握 <strong>Vue全家桶</strong> 的使用，包括 Vue3、VueRouter、Vuex 等
* 熟练掌握 React、Redux、React Router 等
* 熟悉 <strong>ES6</strong>，包括 let / Promise / await / 析构赋值
* 了解 <strong>TypeScript</strong> 的使用，了解 <strong>Webpack 的配置和优化</strong>
* CET-4/6，能够阅读 <strong>英文</strong> 文档，善用Google，Stack Overflow

# 项目介绍
<header class="header">
  <h3>柠檬 UI（一款基于 Vue3 的 UI 组件库）</h3>
  <span>
    <a href="https://github.com/JaniceZD/gulu-ui-vue3" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/gulu-ui-vue3" target="_blank">项目预览</a>
  </span>
</header>
该项目是一款基于 <strong>Vue 3</strong>、<strong>TypeScript</strong>、<strong>Vite</strong> 开发的 UI 组件库。<br>
组件库内包含各种样式的按钮、Switch 开关、Dialog 对话框、Tabs 标签页等常用组件。

<header>
  <h3>大屏数据可视化项目</h3>
  <span>
    <a href="https://github.com/JaniceZD/big-screen-project" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/big-screen-project" target="_blank">项目预览</a>
  </span>
</header>
该项目采用 <strong>React</strong> 和 <strong>React Router</strong> 构建页面，使用 <strong>flex 布局</strong> 完成页面展示。<br>
使用 <strong>ECharts</strong> 实现柱状图、折线图、饼图等图表数据的展示，并能实时更新数据。

<header>
  <h3>睿远基金APP</h3>
</header>
该项目是基于 <strong>Vue</strong> 和 <strong>TypeScript</strong> 开发的一款金融理财应用。<br>
主要负责开发和优化专注森林、资讯、定投交易等模块，实现了业务功能和交互效果。

<header>
  <h3>睿远基金中台管理系统</h3>
</header>
这是一个使用 <strong>Vue</strong>、<strong>VueRouter</strong>、<strong>ElementUI</strong> 等技术开发的管理系统。<br>
主要负责基金配置模块，独立开发资讯管理模块。

# 开源项目
<header class="header">
  <h3>动态画出皮卡丘</h3>
  <span>
    <a href="https://github.com/JaniceZD/pikachu-demo" target="_blank">源码链接</a>
    <a href="https://janicezd.gitee.io/pikachu-demo" target="_blank">项目预览</a>
  </span>
</header>
这是一个基于原生 <strong>JavaScript</strong> 和 <strong>CSS3</strong> 完成的项目。
利用 <strong>JS动态写入HTML和CSS</strong>，模拟从零到一画出皮卡丘的过程。

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
  <h3>深圳市进汇科技有限公司</h3>
  <h4>前端开发工程师</h4>
  <span><time>2020年12月</time>~<time>2023年4月</time></span>
</header>
主要负责公司金融产品的前端研发工作；<br>
参与前端组件库、常⽤⼯具的搭建，持续提⾼团队的⽣产效率；<br>
负责团队技术文档的编写与维护，建立常见问题记录等实用专题；<br>
定期组织内部分享，包括Git的使用、ES6新特性、Vue3等话题。

<header>
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

