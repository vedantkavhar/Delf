import React from 'react';
import "./RestaurantMenusStyle.css";
import {menue_offerLogo_api_URL} from "../../utils/constants";



const RestaurantOfferCard = ({ offer }) => {
    const { header,couponCode , description, descriptionTextColor, offerTagColor, offerLogo, offerTag } = offer;
  
    return (
        <div className="restaurant-offer-offertag">
            {(offerTag && <div id='offerCards_tag'>{offerTag}</div>)}
            <div className='restaurant-offer-card'>
                <div className="offer-header" style={{ color: descriptionTextColor }}>
                    <img src={menue_offerLogo_api_URL+offerLogo} id='menue_offer_logo'/>
                    <div id='menue_offer_header'>{header}</div>                    
                </div>
                <div className="offer-description">
                    {couponCode +" | "+ description}
                </div>
            </div>
        </div>
    );
  };
  

export default RestaurantOfferCard;
