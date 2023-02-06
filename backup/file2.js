
const inputValue = document.getElementById("input")
const inputBut = document.getElementById("btn")

inputBut.addEventListener("click", () =>{
const countryName = inputValue.value;
//  const countryWether = inputValue.value

let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=2ba73c4537f2392c4bf3c04a18725e92`
let url2 = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`


fetch(url2)
.then((res)=> res.json())
.then((data1)=>{
    firstOp.innerHTML=`
    
    <div class="card" style="width: 18rem;">
  <img src="${data1[0].flags.svg}" class="card-img-top" alt="flag-pic">
  <div class="card-body">
    <h4 class="card-title">${data1[0].name.common}</h4>
    <h5 class="card-title">capital: ${data1[0].capital}</h5>
    <h5 class="card-title">region: ${data1[0].region}</h5>
    <h5 class="card-title">postalcode: ${data1[0].altSpellings[0]}</h5>
    <h5 class="card-title">Latlng: ${data1[0].latlng}</h5>
      <div id= "btnt"> <a href="#" class="btn btn-primary">Click to Weather</a></div>
  </div>
</div>
    `
    const inputbtn = document.getElementById("btnt")
    const inputValue = document.getElementById("input")

inputbtn.addEventListener("click",()=> {
    
     let countryWeather = inputValue.value; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryWeather}&appid=2ba73c4537f2392c4bf3c04a18725e92`
    fetch(url).then((res) => res.json()).then((data)=>{console.log(data)
        secondOp.innerHTML=`
        <div class="card" style="width: 18rem;">
<img src="${data1[0].flags.svg}" class="card-img-top" alt="flag-pic">
<h4><b>WEATHER REPORT</b></h4>
<div class="card-body">
  <h4 class="card-title">${data1[0].name.common}</h4>
  <h5 class="card-title">TEMPERATURE: ${data["main"].temp}</h5>
  <h5 class="card-title">MINIMUM TEMPERATURE: ${data["main"].temp_min}</h5>
  <h5 class="card-title">MAXIMUM TEMPERATURE: ${data["main"].temp_max}</h5>
  <h5 class="card-title">PRESSURE: ${data["main"].pressure}</h5>
</div>
</div>`


let url3 = fetch("https://restcountries.com/v2/all")
url3.then((rev)=>rev.json()).then((country)=>countryDetails(country))
function countryDetails(country){
    country.forEach((countrys)=>{
        thirdOp.innerHTML+=`
    
        <div class="card" style="width: 18rem;">
      <img src="${countrys.flags.svg}" class="card-img-top" alt="flag-pic">
      <div class="card-body">
        <h4 class="card-title">${countrys.name.common}</h4>
        <h5 class="card-title">capital: ${countrys.capital}</h5>
        <h5 class="card-title">region: ${countrys.region}</h5>
        <h5 class="card-title">postalcode: ${countrys.altSpellings}</h5>
        <h5 class="card-title">Latlng: ${countrys.latlng}</h5>
          <div id= "btnt"> <a href="#" class="btn btn-primary">Click to Weather</a></div>
      </div>
    </div>
        `

    })
}


})
})
})  .catch(()=>{
    if(countryName.length == 0){
        firstOp.innerHTML=`<h2>Input is Empty Please Enter Country Name</h2>`
    }else{
        firstOp.innerHTML =`<h2>Incorrect Country Name</h2>`
    }
})
} )

// let url3 = fetch("https://restcountries.com/v2/all")
// url3.then((rev)=>rev.json()).then((country)=>countryDetails(country))
// function countryDetails(country){
//     country.forEach((countrys)=>{
//         thirdOp.innerHTML+=`
    
//         <div class="card" style="width: 18rem;">
//       <img src="${countrys.flags.svg}" class="card-img-top" alt="flag-pic">
//       <div class="card-body">
//         <h4 class="card-title">${countrys.name.common}</h4>
//         <h5 class="card-title">capital: ${countrys.capital}</h5>
//         <h5 class="card-title">region: ${countrys.region}</h5>
//         <h5 class="card-title">postalcode: ${countrys.altSpellings}</h5>
//         <h5 class="card-title">Latlng: ${countrys.latlng}</h5>
//           <div id= "btnt"> <a href="#" class="btn btn-primary">Click to Weather</a></div>
//       </div>
//     </div>
//         `

//     })
// }