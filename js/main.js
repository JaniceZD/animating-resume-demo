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
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    domPaper.innerHTML = markdown.substring(0, n)
    n += 1
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 10)
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
  border: 1px solid;
  background: white;
  width: 48vw; height: 90vh;
  padding: .5em;  margin: .5em;
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
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript CSS

# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
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

