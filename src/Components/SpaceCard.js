import { useState } from 'react'
import moment from 'moment'
import { RiHeartsLine, RiHeartsFill } from 'react-icons/ri'


export default function SpaceCard(props){

    const [liked, setLiked] = useState(false)


    const {
        date,
        title,
        explanation,
        imageURL
    } = props


    function dateFormatting(startDate){
        return moment(startDate).format("MMMM Do, YYYY")
    }

    const ifLike = () => liked ? <RiHeartsFill className="liked" /> : <RiHeartsLine className="not-liked" />

    function userLiking(){
        setLiked(!liked)
    }

    return(
        <div className="space-card">
            <img className="card-image" src={imageURL} alt={title}/>
            <h2 className="card-title">{title}</h2>
            <h5 className="card-date">{dateFormatting(date)}</h5>
            <button className="like-button" onClick={userLiking}>{ifLike()}</button>
            <text className="card-explanation">{explanation}</text>
        </div>
    )
}

