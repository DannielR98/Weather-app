const apiKey = "d2b240e1c10f5c7cbea860fa0329d8f8";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const response_initial = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=stockholm&appid=d2b240e1c10f5c7cbea860fa0329d8f8";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");


    
    window.onload = function()
    {
        initial();
    }
    
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404 || response.status == 400 || searchBox.value == "") 
        {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();

        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"; 
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"; 
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"; 
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"; 
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"; 
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"; 
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }

        
        
    }



    async function initial()
    {
        response = await fetch(response_initial);

        
         
            var data = await response.json();

        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"; 
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"; 
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"; 
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"; 
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"; 
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"; 
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }


    

    searchBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            // Prevent the default behavior of the Enter key (form submission)
            event.preventDefault();
            // Trigger a click on the search button
            searchBtn.click();
        }
    });
   
    searchBtn.addEventListener("click", ()=> {
        checkWeather(searchBox.value.trim());
    })

    