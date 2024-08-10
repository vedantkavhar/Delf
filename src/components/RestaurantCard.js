import {STAR_URL} from "../utils/constants"

const RestaurantCard= (props)=>{

    console.log(props)
    return (
    <div className="restorent-card">
        <img className="card-img" src={props.imagelinek}/>
        <p className="restorent-tital">{props.hotelName}</p>
        <div className="rating-time">
            <div className="customer-rating">
                <img className="star-img" src={STAR_URL} />
                {props.rating}
            </div>
            <div className="time-to-reach">{props.time}</div>
        </div>
        <div className="hotel-address">
            <div className="hotel-address-area">{props.area}</div>
            <div className="hotel-address-city">{props.address}</div>
        </div>
    </div>
    )
}

export default RestaurantCard; 