const degreeNumber = document.querySelector(".degree-number");
const situationWeather = document.querySelector(".situation-weather");
const currentPlace = document.querySelector(".country-city");
const currentTime = document.querySelector(".current-time");
const feelsLike = document.querySelector(".feels-like");
const sunsetTime = document.querySelector(".sunset-time");
const nowTime = document.querySelector(".now-time");
const secondTime = document.querySelector(".two-time");
const thirdTime = document.querySelector(".three-time");
const fourthTime = document.querySelector(".four-time");
const fifthTime = document.querySelector(".five-time");
const sixthTime = document.querySelector(".six-time");
const seventhTime = document.querySelector(".seven-time");
const eightthTime = document.querySelector(".eight-time");
const ninethTime = document.querySelector(".nine-time");
const tenthTime = document.querySelector(".ten-time");
const currentDegree = document.querySelector(".now-degree");
const twoAmTime = document.querySelector(".two-am");
const threeAmTime = document.querySelector(".three-am");
const fourhAmTime = document.querySelector(".four-am");
const fiveAmTime = document.querySelector(".five-am");
const sixAmTime = document.querySelector(".six-am");
const sevenAmTime = document.querySelector(".seven-am");
const eightAmTime = document.querySelector(".eigth-am");
const nineAmTime = document.querySelector(".nine-am");
const tenAmTime = document.querySelector(".ten-am");
const countryName = document.querySelector(".country-name")
const addButton=document.querySelector(".add-button")


const fetchData = async function () {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${countryName.value}?unitGroup=metric&key=R86R7M9PSE99C94M3BGPWBDE5&contentType=json`)
    const data = await response.json()
    showData(data);
}
fetchData();

const showData = function (data) {
    degreeNumber.textContent = data.days[0].temp
    situationWeather.textContent = data.days[0].conditions
    currentPlace.textContent = `${data.address}`
    currentTime.textContent = data.days[0].datetime
    feelsLike.textContent = data.days[0].feelslike
    sunsetTime.textContent = data.days[0].sunset
    nowTime.textContent = data.days[0].hours[0].datetime
    secondTime.textContent = data.days[0].hours[2].datetime
    thirdTime.textContent = data.days[0].hours[4].datetime
    fourthTime.textContent = data.days[0].hours[6].datetime
    fifthTime.textContent=data.days[0].hours[8].datetime
    sixthTime.textContent = data.days[0].hours[10].datetime
    seventhTime.textContent = data.days[0].hours[12].datetime
    eightthTime.textContent = data.days[0].hours[14].datetime
    ninethTime.textContent = data.days[0].hours[16].datetime
    tenthTime.textContent = data.days[0].hours[18].datetime
    currentDegree.textContent = data.currentConditions.temp
    twoAmTime.textContent = data.days[0].hours[0].temp
    threeAmTime.textContent = data.days[0].hours[4].temp
    fourhAmTime.textContent = data.days[0].hours[8].temp
    fiveAmTime.textContent = data.days[0].hours[10].temp
    sixAmTime.textContent = data.days[0].hours[12].temp
    sevenAmTime.textContent = data.days[0].hours[14].temp
    eightAmTime.textContent = data.days[0].hours[16].temp
    nineAmTime.textContent = data.days[0].hours[18].temp
    tenAmTime.textContent=data.days[0].hours[20].temp
}
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData() = countryName.value;
})

window.addEventListener('keydown', (event) => {
    if (event.keyCode===13) {
        fetchData() = countryName.value;
    }
})