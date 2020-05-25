const JSON = require('./cats.json')
// const divAffichageImage =  document.querySelector("#resultat");
// console.log(JSON)
let urlArray = [];

for(let i = 0; i < JSON.length; i++){
  // console.log(JSON[i])
}

for(let value in JSON){
  // console.log(AB[value])
  for(let i = 0; i < JSON[value].length; i++){
    // console.log(JSON[value][i])
    
let {url} = JSON[value][i];
// console.log(url)
urlArray.push(url)
// console.log(urlArray)

/*
let {id} = JSON[value][i]; 
let idArray = [id];
console.log(idArray);
*/
    // for(let url in JSON[value][i]){
    //   let allUrl = []
    //   let urlList = JSON[value][i][url]
    //   allUrl.push(urlList)
      // console.log(JSON[value][i][url])
      // console.log(urlList)
    }
  }
// }

  let randomIndex = Math.floor(Math.random() * Math.floor(101));

console.log(randomIndex)

function displayUrlImg(){
  let display = `<img src='`
  display += `${urlArray[randomIndex]}' />`
  console.log(display)
}
console.log(displayUrlImg())
/*
const AB = { images:
  [ { url:
       'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
      id: 'MTgwODA3MA' },
    { url:
       'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
      id: 'MTgwODA3MA' },
  ]
}
*/
// for(let value in AB){
//   // console.log(AB[value])
//   for(let i = 0; i < AB[value].length; i++){
//     // console.log(AB[value][i])
//     for(let url in AB[value][i]){
//       let randomUrl = AB[value][i][url]
//       console.log(AB[value][i][url])
//       console.log(randomUrl)
//     }
//   }
// }

