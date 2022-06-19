let h1 =document.querySelector('h1')
let weathercity = document.querySelector('#weathercity');
let inp = document.querySelector('input').value;
weathercity.addEventListener('click', GetWeather)
// document.addEventListener("DOMContentLoaded", getLocation);


function GetWeather(e) {
  e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=19b6ad6646565a871ef826e94d1fdda8`).then(response=>{
    response.json().then(data=>{
console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  })
  
}








// function GetWeather(e){
//     e.preventDefault();

// fetch('https://api.openweathermap.org/data/2.5/weather?lat={40.3931136}&lon={49.8925568}&appid={18823c860b391a57dd0a9135f0a40770}').then(response=>{
//     response.json().then(data=>{
//         getLocation()
            
//         });

//     })
// }


// let x = document.querySelector('#demo');
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }