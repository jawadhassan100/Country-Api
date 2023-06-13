const formElem = document.querySelector("form");
const detailDiv = document.getElementById("detail-div");
const btn = document.getElementById("getAll");
const loader = document.getElementById("loader");
const errorDisplay = document.getElementById("error-display");

loader.style.display = "none";
errorDisplay.style.display = "none";

btn.addEventListener("click", async () => {
  try {
    loader.style.display = "";
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    console.log(data);
    detailDiv.textContent = "";
    data.forEach((country) => {
      console.log(country.name.common);
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
          <div class="card p-3 mt-3" id="detail-section">
              <h1>${country.name.common}</h1>
              <hr />
              <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Official Name: </h2>
          <p>${country.name.official}</p>
        </div>
        <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Area: </h2>
          <p>${country.area}</p>
        </div>
        <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Capital: </h2>
          <p>${country.capital}</p>
        </div>
        <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Flag: </h2>
          <img class="w-20 h-20" src="${country.flags.png}" alt="${country.flags.png}">
        </div>
        
        <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Time Zones: </h2>
          <p>${country.timezones}</p>
        </div>
        
        <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Map: </h2>
          <a href="${country.maps.googleMaps}">Open Map</a>
        </div>

        <div class="d-flex  justify-content-center w-100">
          <p class="fw-bold mx-2">Population: </h2>
          <p>${country.population}</p>
        </div>
      
          </div>
        
        `;
      detailDiv.append(newDiv);
    });
  } catch (error) {
    errorDisplay.style.display = "";
    errorDisplay.innerHTML = "<b>ERROR</b> Failed to get country";
    loader.style.display = "none";
  } finally {
    loader.style.display = "none";
  }
});

const getCountryDetails = async (event) => {
  event.preventDefault();
  detailDiv.innerHTML = "";
  try {
    loader.style.display = "";
    const cn = formElem.cn.value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${cn}`);
    const data = await response.json();
    const status = await response.status;
    console.log(data);
    data.forEach((country) => {
      detailDiv.innerHTML += `
    <div class="card p-3 mt-3" id="detail-section">
        <h1>${country.name.common}</h1>
        <hr />
        <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Official Name: </h2>
    <p>${country.name.official}</p>
  </div>
  <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Area: </h2>
    <p>${country.area}</p>
  </div>
  <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Capital: </h2>
    <p>${country.capital}</p>
  </div>
  <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Flag: </h2>
    <img class="w-20 h-20" src="${country.flags.png}" alt="${country.flags.png}">
  </div>
  
  <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Time Zones: </h2>
    <p>${country.timezones}</p>
  </div>
  
  <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Map: </h2>
    <a href="${country.maps.googleMaps}">Open Map</a>
  </div>

  <div class="d-flex  justify-content-center w-100">
    <p class="fw-bold mx-2">Population: </h2>
    <p>${country.population}</p>
  </div>
 
    </div>
  
  `;
    });
  } catch (error) {
    errorDisplay.style.display = "";
    errorDisplay.innerHTML = "<b>ERROR</b> Failed to get country";
    loader.style.display = "none";
  } finally {
    loader.style.display = "none";
  }
};

formElem.addEventListener("submit", getCountryDetails);
