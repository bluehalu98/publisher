const API_KEY = '90c1f6e2d235882d7d0500ca5bef60b6';
const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json())
  .then(data => {
    const weatherContainer = document.querySelector('#weather span:first-child');
    const cityContainer = document.querySelector('#weather span:last-child');
    cityContainer.innerText = data.name
    weatherContainer.innerText = data.weather[0].main 
  });
}

const onGeoErr = () => {
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)