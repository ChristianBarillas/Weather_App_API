const search = document.querySelector('.search_box button');
const container = document.querySelector('.container');
const weatherdetail = document.querySelector('.weather_detail');
const error = document.querySelector('.not_found');
const weatherbox = document.querySelector('.weather_box')


search.addEventListener('click', ()=>{
    const APIKey = '96a848c85cc9152897c0a84cf1656288';
    const city = document.querySelector('.search_box input').value;

    if (city === '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json=>{

    if  (json.cod ==='404'){
        
        container.style.height = '400px';
        weatherdetail.style.display = 'none';
        weatherbox.style.display = 'none';
        error.style.display = 'block';
        error.classList.add = 'fadeIn';
        return;

    }

    error.style.display = 'none';
    error.classList.remove = 'fadeIn';

    const image = document.querySelector('.weather_box img');
    const temperature = document.querySelector('.weather_box .temperature');
    const description = document.querySelector('.weather_box .description');
    const humidity = document.querySelector('.weather_detail .humidity span');
    const wind = document.querySelector('.weather_detail .wind span');

    switch(json.weather[0].main){
        
        case 'Clear':
            image.src = './media/cloud.jpg';
            break

             
        case 'Rain':
            image.src = './media/rain.png';
            break


             
        case 'Snow':
            image.src = './media/snow.jpg';
            break


             
        case 'Clouds':
            image.src = './media/cloud.jpg';
            break


             
        case 'Haze':
            image.src = './media/haze.jpg';
            break


            default:
                image.src = '';
    


    };


    temperature.innerHTML = `${parseInt(json.main.temp)}<span> C </span> `;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${ parseInt(json.wind.speed)} KM/h`;

    weatherbox.style.display = '';
    weatherdetail.style.display = '';
    weatherbox.classList.add = 'fadeIn';
    weatherdetail.classList.add = 'fadeIn';
    container.style.height = '600px';

    })
});