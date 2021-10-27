const API_KEY = '4104524be5284e87d2dc5438e3b7b38d'

const fetchData = position =>{
    const { latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
  }




const setWeatherData = data =>{
    const apiData ={
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),        
    }

    Object.keys(apiData).forEach(key =>{
        document.getElementById(key).textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} : ${apiData[key]}`       
    })
}

const getDate = () =>{
    let date = new Date()
    return `${date.getDate()}/${ ('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`    
}

const timeClock = () =>{
    let hour = new Date()      
    let clock = `${hour.getHours()}:${hour.getMinutes()}:${hour.getSeconds()}` 
    document.getElementById('hour').textContent = clock 
    setTimeout("timeClock()",1000) 
}

const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(fetchData)

}

const functionsHandler = () =>{
    onload();
    timeClock();
}

window.onload = functionsHandler();