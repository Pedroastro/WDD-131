const calculateWindChill = (temperature, windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

const temperature = 10
const windSpeed = 5
let windChill = "N/A"
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + " °C";
}

const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded', 
    function() {
        const today = new Date();
        document.getElementById("currentyear").textContent = today.getFullYear();
        document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
        document.getElementById("windChill").textContent = windChill;
    }
);