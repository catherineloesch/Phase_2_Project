import React, { useState } from "react";
import "./Api.css"

function Api() {

        const api = {
            key: "0aed349e4c72522397331f787213e4ce",
            base: "https://api.openweathermap.org/data/2.5/"

        }

        const [query, setQuery] = useState("")
        const [weather, setWeather] = useState({})

        function dateBuilder(d) {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`
        }

        function search(event) {
            if (event.key === "Enter") {
                // GET request
                fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setQuery("")
                    setWeather(result)
                    console.log(result)
                });
            }
        }



    return (<div className={(typeof weather.main !== "undefined")
        ? ((weather.main.temp > 16)
            ? "weather-api warm"
                : "weather-api")
                    : "weather-api"}>
                <h3 className="weather-title">Hello</h3>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={(event) => (setQuery(event.target.value))}
                        value={query}
                        onKeyPress={search}
                    ></input>
                </div>
                {(typeof weather.main !== "undefined") ? (
                <div>
                    <div>
                        <div className="location-box">
                            <div className="location">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="date">
                            {dateBuilder(new Date())}
                            </div>
                        </div>
                        <div className="weather-box">
                            <div className="temp"> {Math.round(weather.main.temp)}°C</div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                </div>) : ("")}
            </div>)
}


export default Api;