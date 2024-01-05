const cityName = document.getElementById('cityName');
const sumbit_btn = document.getElementById('sumbit_btn');
const output = document.getElementById('output');
const temp_span = document.getElementById('temp_span');
const temp = document.getElementById('temp');
const temp_mood = document.getElementById('temp_mood');
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value; 
    if (cityVal === '') {
        output.innerHTML = 'Please enter a city name~';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=cb0f35d803b68bec527c2f5be2976aa9`
            const response = await fetch(url);        
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            
            output.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_span.innerHTML = `${arrData[0].main.temp - 273.15 }`
            if (arrData[0].weather[0].main == 'Clouds') {
                temp_mood.innerHTML = '<img src="images/cloud.png" alt="Coluds">'
            }
            else if (arrData[0].weather[0].main == 'Clear') {
                
                temp_mood.innerHTML = '<img src="images/sun.png" alt="Sun">'
            }
            else if (arrData[0].weather[0].main == 'Rain') {
                
                temp_mood.innerHTML = '<img src="images/rainy.png" alt="Rainy">'
            }
            else{
                
                temp_mood.innerHTML = '<img src="images/fog.png" alt="Haze">'
            }
            console.log(arrData[0].weather[0].main);
        } catch (error) {
            
            output.innerHTML = 'Please enter a CORRECT city name~';
            temp.innerHTML = ` `
        }
    }
}
sumbit_btn.addEventListener('click', getInfo);