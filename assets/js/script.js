const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;
const apiKey = `da1a0a1cd5ef1413573ed8e0ae798a03`;
const searchBtn = document.getElementById(`btn`);
const cityName = document.getElementById('cityName');
//Location items below
const l = document.getElementById('l');
const d = document.getElementById('date');
const temp = document.getElementById('temp');
const winddd = document.getElementById('wind');
const h = document.getElementById('h');
let pastCities = document.getElementById('pastCities');
//Golbal arrays
let cities = [];
let days = [];
//Date
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;


//Make button accessable and save to local storage
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const urlWithApiKey = `${apiUrl}?q=${cityName.value}&appid=${apiKey}`;

    fetch(urlWithApiKey)
        .then(response => response.json())
        .then(data => {

            // Clear previous content if needed
            l.textContent = '';
            temp.textContent = '';
            winddd.textContent = '';
            h.textContent = '';

            // Extract city name
            let city = data.city.name;
            l.append(city, ` `, currentDate);

            // Extract list of weather data
            let weatherList = data.list;
            console.log(weatherList);

            // Group weather data by date
            let groupedByDate = {};

            weatherList.forEach(item => {
                // Extract date from timestamp (assuming timestamp is in seconds)
                let timestamp = item.dt;  // UNIX timestamp
                let date = new Date(timestamp * 1000);  // Convert to milliseconds

                // Format date as YYYY-MM-DD
                let formattedDate = date.toISOString().split('T')[0];



                // Check if date already exists in groupedByDate, if not, create new entry
                if (!groupedByDate[formattedDate]) {
                    groupedByDate[formattedDate] = [];
                }

                // Push current item to the corresponding date entry
                groupedByDate[formattedDate].push(item);
            });

            for (let date in groupedByDate) {
                if (groupedByDate.hasOwnProperty(date)) {
                    console.log(`Date: ${date}`);
                    
                    // Access items array for the current date
                    let items = groupedByDate[date];
                    
            
                    // Process each item in the items array
                    items.forEach(item => {
                        // Perform any operations on each item as needed
                        console.log(item); // Example: log each item
                        let temptaure = item.main.temp
                        console.log(temptaure);
                        let humidity = item.main.humidity
                        console.log(humidity);
                        let wind = item.wind.speed
                        console.log(wind);
                    });
            
                    console.log('---'); // Separator for clarity
                }
            }

            // Now groupedByDate is an object where keys are dates and values are arrays of weather data for that date
            console.log(groupedByDate);

            // Further processing or displaying the grouped data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle errors
        });
});


function createCard () {

};


let text = "";
for (let i = 0; i < cities.length; i++) {
  text += cities[i] + "<br>";

let ele = pastCities.createElement(`p`);
ele.append(ele)
};//Append the city to the page using attributes

//When new city is created get previous citys from local storage and append them under search bar