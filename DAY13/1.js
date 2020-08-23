var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var name = document.querySelector('.class');
var desc = document.querySelector('.descfetch');
var temp = document.querySelector('.temp');

.button.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?appid=&units=metric&q=" +
        cityName);
    .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => alert("wrong city name"))

})