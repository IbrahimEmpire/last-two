function countryDetails(countries){
    countries.forEach((country) => {
        document.body.innerHTML += `<div class="container container">
        <div class="row">
    <div class="col p-0 m-0">
        <h4 class="text-center m-0">${country.name.common}</h4>
    </div>
</div>
<div class="row rounded d-flex justify-content-center">
    <img src="${country.flags.svg}" alt="">
</div>
<div class="row">
   <div class="col-lg-12 pt-3 text-center"><p><span>Capital : </span>${country.capital}</p></div> 
   <div class="col-lg-12 text-center"><p><span>Region : </span>${country.region}</p></div>
   <div class="col-lg-12 text-center"><p><span>CountryCode : </span>${country.cca3}</p></div>
   <div class="col-lg-12 d-flex align-items-center justify-content-center">
    <button class="btn bg-primary text-light" onclick="chckWeather()">click for weather</button>
   </div>
</div>
</div>`;
    });
}

fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json())
.then((countries) => countryDetails(countries))
.catch((country) => console.log("Oops Something went wrong"));