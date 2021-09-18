import '../App.css'
import { useState, useEffect } from "react"
import SpaceCard from "./SpaceCard"

export default function SpaceContainer(){


    const [allSpaceData, setAllSpaceData] = useState([])


    function fetchSpaceDataToState(){
        fetch('https://api.nasa.gov/planetary/apod?count=20&api_key=oBF3IioeqKii8OZk3tCP2JztCFs30aihttAzlrMc')
            .then(response => response.json())
            .then(spaceData => setAllSpaceData(spaceData))
    }
    

    function displaySpaceCards(){
        if(allSpaceData){
            return allSpaceData.map(spaceData => {
                return <SpaceCard 
                            key={spaceData.date}
                            date={spaceData.date}
                            title={spaceData.title}
                            explanation={spaceData.explanation}
                            imageURL={spaceData.url}
                        />
            })
        }else{
            return null
        }
    }

    useEffect(fetchSpaceDataToState, [])
    // useEffect(displaySpaceCards, [allSpaceData])


    return(
        <div className="space-container">
            {displaySpaceCards()}
        </div>
    )
    
}
