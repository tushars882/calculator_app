import React from "react";
const api = {
    key: "cf6a99506b75bc0a441d03021db5169f",
    base: "https://api.openweathermap.org/data/2.5"
}

function Weather(){

    const dateBuilder = (d)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${date} ${day} ${month} ${year}`

    }
    return(
        <div className="app">
            <main>
            <div className="search-box">
                <input
                type = "text"   
                className="search-bar"
                placeholder="Search..."
                />
            </div>
            <div className="location-box">
                <div className="location">Agra ,India</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    30° C
                </div>
                <div className="weather">Sunny</div>
            </div>
            </main>

        </div>
    )
}
export default Weather;