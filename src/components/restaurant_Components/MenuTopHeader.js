import React from 'react';
import "./RestaurantMenusStyle.css";
import {CDN_URL, menue_offerLogo_api_URL,ITEM_IMG_CDN_URL} from "../../utils/constants";

const MenuTopHeader = ({ menueItem }) => {
    const {
        id,
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        sla: {slaString,lastMileTravelString},
        feeDetails:{icon}
    } = menueItem;
    const deliveryFees=2500;
    // console.log("the menu items are :-----   ", menueItem, id , name);
    
    const imageUrl = ITEM_IMG_CDN_URL+cloudinaryImageId;

    return (
        <div>
            <div className="menu-top-header">
                <img className="menu-top-header-img"
                    src={imageUrl}
                    alt={name}
                    />
                <div id='menue_details_rating_dilivery'>
                    <div id='menue_details_rating'>
                        <div className="menu-top-header-details">
                            <p className="menu-top-header-title">{name}</p>
                            <p className="menu-top-header-cuisines">{cuisines?.join(", ")}</p>
                            <div className='menu-top-header-locality'>{locality}, {lastMileTravelString}</div>
                        </div>
                        <button className='menu-top-header-rating'>
                            <div className='menu-top-header-avg-rating'>
                                <span className='menue_star_rating_icon'>&#x2605;</span>
                                <span className='menue_averageRating'>{avgRating}</span>
                                
                            </div>
                            <div className='menu-top-header-total-ratings'>{totalRatingsString}</div>
                        </button>
                    </div>
                    <div className='menu-top-header-distance'>
                        <img id='delivery_icon' src={menue_offerLogo_api_URL+icon} />
                        <span id='delivery_distance'>{lastMileTravelString}</span>
                        <span id='delivery_charges'> | ₹{deliveryFees/100} Delivery fee will apply</span>
                    </div>
                </div>
            </div>
            <div id='time_and_cost'>
                <svg className='time_and_cost_icon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <circle cx="9" cy="9" r="8" fill="none" stroke="#000" strokeWidth="1.5"/>
                    <line x1="9" y1="9" x2="14" y2="9" stroke="#000" strokeWidth="1.5"/>
                    <line x1="9" y1="9" x2="9" y2="3" stroke="#000" strokeWidth="1.5"/>
                </svg>
                <div className='time_and_cost_msg' >{slaString}</div>
                <div className='time_and_cost_icon' id='menue_rupeed_icon'>&#x20B9;</div>
                <div className='time_and_cost_msg'>{costForTwoMessage.substring(1)}</div>
            </div>
        </div>
    );
};

export default MenuTopHeader;
