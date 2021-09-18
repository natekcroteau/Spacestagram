import { useState } from 'react'
import moment from 'moment'
import { RiChatHeartLine, RiChatHeartFill } from 'react-icons/ri'


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

    const ifLike = () => liked ? <RiChatHeartFill className="liked" /> : <RiChatHeartLine className="not-liked" />

    function userLiking(){
        setLiked(!liked)
    }

    return(
        <div className="space-card">
            <img className="card-image" src={imageURL} alt={title}/>
            <h2 className="card-title">{title}</h2>
            <div className ="card-date-like">
                <span className="card-date">{dateFormatting(date)}</span>
                <button onClick={userLiking}>{ifLike()}</button>
            </div>
            <p className="card-explanation">{explanation}</p>
        </div>
    )
}

