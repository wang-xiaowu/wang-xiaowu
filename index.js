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

<a href="https://github.com/behappy-project">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-screw-doc&theme=buefy" />
</a>
<a href="https://github.com/behappy-project">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-gitbook&theme=buefy" />
</a>
<a href="https://github.com/behappy-project">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-redis&theme=buefy" />
</a>
<a href="https://github.com/behappy-project">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=behappy-project&repo=behappy-url-shortener&theme=buefy" />
</a>

### Talking about Personal Stuffs  

- 🔭 I’m currently striving for a better life in Dalian.     
- 🤔 My blog 👉 https://wang-xiaowu.github.io/         
- 📫 My E-mail: a943915349@gmail.com          
- 🔧 My Power Tools: </br>   
![Idea](https://img.shields.io/badge/-Idea-black?style=plastic&logo=intellijidea)     
![Webstorm](https://img.shields.io/badge/-Webstorm-red?style=plastic&logo=webstorm)     
![DataGrip](https://img.shields.io/badge/-DataGrip-blue?style=plastic&logo=datagrip)     
![DataGrip](https://img.shields.io/badge/-GoLand-green?style=plastic&logo=goland)     
![Git](https://img.shields.io/badge/-Git-yellow?style=plastic&logo=git)  
\
`

console.log(readme)
