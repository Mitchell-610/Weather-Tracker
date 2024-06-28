const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;
const apiKey = `da1a0a1cd5ef1413573ed8e0ae798a03`;
const searchBtn = document.getElementById(`btn`);
const cityName = document.getElementById('cityName');



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
        console.log(www)
        
        let temptaure = www.main.temp
        console.log(`The temptaure is: ${temptaure}`)

        let wind = www.wind.speed
        console.log(`Wind speed is: ${wind}`)

        let humidity = www.main.humidity
        console.log(`The humidity level is: ${humidity} percent.`)
        


    })

});
//Fetch the city from the API using attributes(maybe)

//Append the city to the page using attributes

//When new city is created get previous citys from local storage and append them under search bar