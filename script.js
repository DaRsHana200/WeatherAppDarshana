



async function fetchWeatherCity(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fff1b2b915f69afc4b3d32ae4dc7a9df`;
	const response=await fetch(url)
	const data=await response.json();
	console.log(data);
}
//demo()

function fetchCity(){
	let cityName=document.getElementById("city_name");
	if(cityName.value==""){
		alert("Enter a city name");
	}
	else{
		fetchWeatherCity(cityName.value);
		cityName.value="";
	}
}