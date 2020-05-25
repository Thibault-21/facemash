// function setup(){
  const url_json = fetch("https://latelier.co/data/cats.json", getData, 'jsonp')
     
  async function getData() {
      const response = await fetch(url_json);
      const data = await response.json();
      console.log(data)
  }
  getData();
// }
// function gotData(data){
// console.log(data);

// let cats = data;
//   let monCat; 
//   for(let cat in cats){
//     let random = Math.floor(Math.random() * (Object.values(cats[cat]).length + 1));
//     monCat = cats[cat][random];
//     console.log(monCat)
//   }

//   const divResult = document.querySelector("#resultat");
//   divResult.innerHTML = `<ims src='${monCat.url}' />`
// }
// fetch.get("").then(function(response){
//   return response.json();

// }).then(function(data){
//   
