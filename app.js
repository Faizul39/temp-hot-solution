const_API_KEY = "a1435db3932e75fd727b73fa67ccd9eb";

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${const_API_KEY}&units=metric`;


    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    setInnerText('city',temperature.name)
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);

    
    // set weather icon
    const url = `http://wwww.openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url)
    //console.log(temperature);
}