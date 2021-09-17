import { useState } from "react"


export default function SpaceContainer(){



    function fetchSpaceData(){
        fetch('https://api.nasa.gov/planetary/apod?count=100&api_key=oBF3IioeqKii8OZk3tCP2JztCFs30aihttAzlrMc')
            .then(response => response.json())
            .then(spaceData => {
                console.log(spaceData)
            })
    }
    fetchSpaceData()

    return(
        <div className="space-container">

        </div>
    )
}