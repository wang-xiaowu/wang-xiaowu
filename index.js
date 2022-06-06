const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

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

⏰ Updated on ${new Date().toLocaleTimeString("zh")}

---

### Hi there 👋 
### I'm xiaowu, an ordinary programmer. 

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

### My GitHub Contributions    

![](https://raw.githubusercontent.com/wang-xiaowu/wang-xiaowu/main/assets/github-contribution-grid-snake.svg)          

### About me      

[![Wang-xiaowu's GitHub stats](https://github-readme-stats.vercel.app/api?username=wang-xiaowu&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)
![Wang-xiaowu's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=wang-xiaowu&layout=compact&hide_border=true&langs_count=10)

### Talking about Personal Stuffs  

- 🔭 I’m currently striving for a better life in Guangzhou.     
- 🤔 My blog 👉 https://wang-xiaowu.github.io/         
- 📫 My E-mail: 943915349@qq.com          
- 🔧 My Power Tools: </br>   
![Idea](https://img.shields.io/badge/-Idea-black?style=plastic&logo=intellijidea)     
![Webstorm](https://img.shields.io/badge/-Webstorm-red?style=plastic&logo=webstorm)     
![DataGrip](https://img.shields.io/badge/-DataGrip-blue?style=plastic&logo=datagrip)     
![DataGrip](https://img.shields.io/badge/-GoLand-green?style=plastic&logo=goland)     
![Git](https://img.shields.io/badge/-Git-yellow?style=plastic&logo=git)  
\
`

console.log(readme)
