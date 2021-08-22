import React, { useState } from "react";
import "./Api.css"

function Api() {

        const api = {
            key: "c8f56683faf02b272551d2ca76641a40",
            base: "https://api.openweathermap.org/data/2.5"

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
                fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(data => setWeather(data));
            }
        }



    return (<div className="weather-api">
                <h3 className="weather-title">This is my Weather API</h3>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    ></input>
                </div>
                <div className="location-box">
                    <div className="location">
                        London, UK
                    </div>
                    <div className="date">
                    {dateBuilder(new Date())}
                    </div>
                </div>
                <div className="weather-box">
                    <div className="temp"> 15°C</div>
                    <div className="weather"> Sunny </div>

                </div>
            </div>)
}


export default Api;