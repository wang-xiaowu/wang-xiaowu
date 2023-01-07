const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function isZero(x) {
  return x < 10 ? '0' + x : x
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

⏰ Updated on ${formatDate(new Date())}

---

### Hi there 👋 
### I'm xiaowu, an ordinary programmer. 

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

### My GitHub Contributions    

![](https://raw.githubusercontent.com/wang-xiaowu/wang-xiaowu/main/assets/github-contribution-grid-snake.svg)          

### About me      

| <a href="https://github.com/anuraghazra/github-readme-stats"><img align="center" src="https://github-readme-stats.vercel.app/api?username=wang-xiaowu&show_icons=true&include_all_commits=true&theme=buefy&hide_border=true" alt="Wang-xiaowu's github stats" /></a> | <a href="https://github.com/anuraghazra/github-readme-stats"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=wang-xiaowu&layout=compact&theme=buefy&hide_border=true" /></a> |
| ------------- | ------------- |

### Repositories

<a href="https://github.com/behappy-project/behappy-screw-doc">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-screw-doc&theme=buefy" />
</a>
<a href="https://github.com/behappy-project/behappy-gitbook">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-gitbook&theme=buefy" />
</a>
<a href="https://github.com/behappy-project/behappy-redis">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-redis&theme=buefy" />
</a>
<a href="https://github.com/behappy-project/behappy-url-shortener">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-url-shortener&theme=buefy" />
</a>
<a href="https://github.com/behappy-project/behappy-sentinel-dashboard">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-sentinel-dashboard&theme=buefy" />
</a>
<a href="https://github.com/behappy-hospital">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-hospital&repo=behappy-hospital&theme=buefy" />
</a>
<a href="https://github.com/behappy-project/behappy-netty-chatroom">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-netty-chatroom&theme=buefy" />
</a>

### Talking about Personal Stuffs  

- 🔭 I’m currently striving for a better life in Dalian.     
- 🤔 My blog 👉 https://wang-xiaowu.github.io/         
- 📫 My E-mail: a943915349@gmail.com          
- 🔧 Languages & Frameworks & Tools & Abilities: </br>    

![Go](https://img.shields.io/badge/-Go-black?logo=go&style=social)&nbsp;&nbsp;
![Java](https://img.shields.io/badge/Java-Java-green?style=social&logo=OpenJDK)&nbsp;&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-black?logo=JavaScript&style=social)&nbsp;&nbsp;
![Shell](https://img.shields.io/badge/shell-shell-brightgreen?style=social&logo=Shell)&nbsp;&nbsp;
![Lua](https://img.shields.io/badge/lua-lua-yellow?style=social&logo=Lua)&nbsp;&nbsp;
![Spring](https://img.shields.io/badge/spring-spring-lightgrey?style=social&logo=Spring)&nbsp;&nbsp;
![MySQL](https://img.shields.io/badge/-MySQL-black?logo=mysql&style=social)&nbsp;&nbsp;
![Redis](https://img.shields.io/badge/redis-redis-lightgrey?style=social&logo=Redis)&nbsp;&nbsp;
![Docker](https://img.shields.io/badge/Docker-Docker-red?style=social&logo=docker)&nbsp;&nbsp;
![Kubernetes](https://img.shields.io/badge/-Kubernetes-black?logo=kubernetes&style=social)&nbsp;&nbsp;
![Git](https://img.shields.io/badge/-Git-black?logo=git&style=social) 
\
`

console.log(readme)
