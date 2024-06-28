const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;
const apiKey = `da1a0a1cd5ef1413573ed8e0ae798a03`;
const searchBtn = document.getElementById(`btn`);
const cityName = document.getElementById('cityName');
const l = document.getElementById('l');
const d = document.getElementById('date');
const temp = document.getElementById('temp');
const winddd = document.getElementById('wind');
const h = document.getElementById('h');
let cities = [];

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;


//Make button accessable and save to local storage
searchBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const urlWithApiKey = `${apiUrl}?q=${cityName.value}&appid=${apiKey}`;

    fetch(urlWithApiKey)
        .then(response => response.json())
        .then(data => {
            // Clear previous city's data
            l.textContent = '';
            temp.textContent = '';
            winddd.textContent = '';
            h.textContent = '';

            let city = data.city.name;
            let country = data.city.country;
            let www = data.list[Math.floor(Math.random() * data.list.length)];

            let temperature = www.main.temp;
            let wind = www.wind.speed;
            let humidity = www.main.humidity;

            // Update elements with new city's data
            l.textContent = `${city}, ${country} - ${currentDate}`;
            temp.textContent = `The temperature is: ${temperature} degrees.`;
            winddd.textContent = `Wind speed is: ${wind} mph.`;
            h.textContent = `The humidity level is: ${humidity} percent.`;

            // Optionally, you can store the city in local storage here
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle errors, such as displaying an error message to the user
        });
});

//Append the city to the page using attributes

//When new city is created get previous citys from local storage and append them under search bar