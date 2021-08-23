import React, { useState, useEffect } from "react";


function Headlines(){
    const apiKey = "778d70e78cc0460699eab0b4f4149cb6"
    const [headlines, setHeadlines] = useState("")

    useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.articles)
        const keys = Object.keys(data.articles)
        setHeadlines( keys.map((key) => {
            return (
                <div key={key}>
                    <a href={data.articles[key]["url"]} className="headline-title">{data.articles[key]["title"]}</a>
                    <div className="headline-description">{data.articles[key]["description"]}</div>
                   
                </div>
            )
        }))
    })},[])


    return <div>{headlines}</div>
}



export default Headlines