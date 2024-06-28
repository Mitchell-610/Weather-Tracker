const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;
const apiKey = `da1a0a1cd5ef1413573ed8e0ae798a03`;
const searchBtn = document.getElementById(`btn`);
body = document.body;
const cityName = document.getElementById('cityName');
const l = document.getElementById('l');
const d = document.getElementById('date');
const temp = document.getElementById('temp');
const winddd = document.getElementById('wind');
const h = document.getElementById('h');

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;


//Make button accessable and save to local storage
searchBtn.addEventListener(`click`, function (event) {
    event.preventDefault();

const urlWithApiKey = `${apiUrl}?q=${cityName.value}&appid=${apiKey}`;

fetch(urlWithApiKey)
    .then(response => response.json())
    
    .then(data => {
        let city = data.city.name
        console.log(city)
        let country = data.city.country
        console.log(country)
        let www = data.list[(Math.floor(Math.random() * length))]
        


        let temptaure = www.main.temp
        console.log(`The temptaure is: ${temptaure} degrees.`)

        let wind = www.wind.speed
        console.log(`Wind speed is: ${wind} mph.`)

        let humidity = www.main.humidity
        console.log(`The humidity level is: ${humidity} percent.`)


        l.append(city, ` `, currentDate)

        temp.textContent = `The temptaure is: ${temptaure}`;
        temp.append(temptaure)

        winddd.textContent = `Wind speed is: ${wind}`
        winddd.append(wind)


        h.textContent = `The humidity level is: ${humidity} percent.`;
        h.append(humidity)
    })

});

//Append the city to the page using attributes

//When new city is created get previous citys from local storage and append them under search bar