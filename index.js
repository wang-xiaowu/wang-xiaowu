const thisYear = chinaNewDate().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function isZero(x) {
  return x < 10 ? '0' + x : x
}

function chinaNewDate() {
  // 创建一个新的日期对象
  const date = new Date();
  // 获取当前时区与UTC时间之间的分钟差异
  const offset = date.getTimezoneOffset();
  // 将分钟差异转换为毫秒差异
  const offsetMs = offset * 60 * 1000;
  // 计算中国时区的时间
  const chinaTime = date.getTime() + offsetMs + (8 * 60 * 60 * 1000);
  // 创建一个新的日期对象，以中国时区为基础
  return new Date(chinaTime);
}

function formatDate(time) {
  const y = time.getFullYear();
  const m = time.getMonth() + 1;
  let d = time.getDate();
  const h = time.getHours();
  const mm = time.getMinutes();
  const s = time.getSeconds();
  return y + '/' + isZero(m) + '/' + isZero(d) + ' ' + isZero(h) + ':' + isZero(mm) + ':' + isZero(s);
}

function generateProgressBar() {
  const progressBarCapacity = 30
  const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
  const progressBar =
    '█'.repeat(passedProgressBarIndex) +
    '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
  return `{ ${progressBar} }`
}

const readme = `\
![me](https://cdn.jsdelivr.net/gh/wang-xiaowu/picture_repository@master/result.gif)

<img align="right" width="150px" src="https://cdn.jsdelivr.net/gh/wang-xiaowu/picture_repository@master/heart.svg"/>

⏰ Updated on ${formatDate(chinaNewDate())}

---

### Hi there 👋 
### I'm xiaowu, an ordinary programmer. 

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

### My GitHub Contributions    

![](https://raw.githubusercontent.com/wang-xiaowu/wang-xiaowu/main/assets/github-contribution-grid-snake.svg)          

### Repositories

<a href="https://github.com/behappy-project/behappy-screw-doc">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-screw-doc&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-gitbook">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-gitbook&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-redis">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-redis&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-url-shortener">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-url-shortener&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-sentinel-dashboard">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-sentinel-dashboard&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-hospital">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-hospital&repo=behappy-hospital&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-netty-chatroom">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-netty-chatroom&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-canal">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-canal&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-chatgpt-assistant">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-chatgpt-assistant&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-test-automation">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-test-automation&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-other/orange">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-other&repo=orange&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-gulimall">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-gulimall&repo=behappy-gulimall&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-project/behappy-redirect">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-redirect&theme=buefy" width="33%"/>
</a>
<a href="https://github.com/behappy-other/nginx-config-reload">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-other&repo=nginx-config-reload&theme=buefy" width="33%"/>
</a>

### Talking about Personal Stuffs  

- 🔭 I’m currently striving for a better life in Dalian.     
- 🤔 My blog 👉 https://www.xiaowu95.wang/         
- 📫 My E-mail: wangxiaowu950330@foxmail.com          
- 🔧 Languages & Frameworks & Tools & Abilities: </br>    

![Go](https://img.shields.io/badge/-Go-black?logo=go&style=social)&nbsp;&nbsp;
![Java](https://img.shields.io/badge/-Java-green?style=social&logo=OpenJDK)&nbsp;&nbsp;
![Python](https://img.shields.io/badge/-Python-black?logo=python&style=social)&nbsp;&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-black?logo=JavaScript&style=social)&nbsp;&nbsp;
![Shell](https://img.shields.io/badge/-Shell-brightgreen?style=social&logo=Shell)&nbsp;&nbsp;
![Nginx](https://img.shields.io/badge/-Nginx-black?logo=nginx&style=social)&nbsp;&nbsp;
![Spring](https://img.shields.io/badge/-Spring-lightgrey?style=social&logo=Spring)&nbsp;&nbsp;
![MySQL](https://img.shields.io/badge/-MySQL-black?logo=mysql&style=social)&nbsp;&nbsp;
![Elastic Stack](https://img.shields.io/badge/-Elastic%20Stack-black?logo=elasticsearch&style=social)&nbsp;&nbsp;
![MQ](https://img.shields.io/badge/-MQ-black?logo=apachekafka&style=social)&nbsp;&nbsp;
![Redis](https://img.shields.io/badge/-Redis-lightgrey?style=social&logo=Redis)&nbsp;&nbsp;
![Docker](https://img.shields.io/badge/-Docker-red?style=social&logo=docker)&nbsp;&nbsp;
![Kubernetes](https://img.shields.io/badge/-Kubernetes-black?logo=kubernetes&style=social)&nbsp;&nbsp;
![Istio](https://img.shields.io/badge/-Istio-black?logo=istio&style=social)&nbsp;&nbsp;
![Git](https://img.shields.io/badge/-Git-black?logo=git&style=social) 
\
`

console.log(readme)
