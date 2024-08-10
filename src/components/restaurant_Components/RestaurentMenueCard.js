// RestaurantMenuCard.jsx
import React from 'react';
import "./RestaurantMenusStyle.css";
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';
import { ITEM_IMG_CDN_URL } from '../../utils/constants';
// import {CDN_URL} from '../../utils/constants';

const RestaurantMenuCard = ({ menueItem }) => {
    // console.log("the menu items are :-   ", menueItem);

    const {
        id,
        name,
        price,
        defaultPrice,
        finalPrice,
        itemAttribute: { vegClassifier },
        isBestseller,
        inStock,
        description,
        imageId,
        showImage
    } = menueItem;
    const  dispatch=useDispatch();
    const handleAddItem=()=>{
        if (inStock > 0) {
            // const addToCart = confirm("Do you want to add this item to your cart?");
            // if (addToCart) {
                dispatch(addItem(menueItem));
            // }
        } else {
            alert("Sorry, this item is currently out of stock. Please try again later.");
        }        
    }
    const imageUrl = ITEM_IMG_CDN_URL+imageId;

    return (
        <div id='outer_box'> 
            <div id="menu_card">
                <div id='description_box'>
                    <div id='veg_bestseller'>
                        <div id='veg_nonveg_icon'>
                            <div id='veg_icon' className={`icon-container ${vegClassifier.toLowerCase() === 'veg' ? 'visible' : 'hidden'}`}>
                                <div className="icon"></div>
                            </div>
                            <div id='non_veg_icon' className={`icon-container ${vegClassifier.toLowerCase() === 'nonveg' ? 'visible' : 'hidden'}`}>
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div id='bestseller_icon' className={`bestseller-container ${isBestseller ? 'visible' : 'hidden'}`}>
                            <div className="star-icon"></div>
                            <span className="bestseller-text">Bestseller</span>
                        </div>
                    </div>
                    <p id='menue_title'>{name}</p>
                    <div id='menue_price'>
                        {finalPrice==undefined? 
                            <div id='normal_price'>&#x20B9;{price?(price/100):(defaultPrice/100)}</div>
                            :
                            <div id='offer_price'>
                                <div id='defoult_price'>&#x20B9;{defaultPrice/100}</div>
                                <div id='final_price'>&#x20B9;{finalPrice/100}</div>
                            </div>
                        }
                        
                    </div>
                    <p id='menue_description'>{description}</p>
                </div>
                
                <div id="image_and_availability">
                    {imageId && (
                        <img id='menue_img' src={imageUrl} onError={(e) => { e.target.style.display = 'none'; }} />
                    )}
                    {inStock > 0  ? (
                            imageId? (
                                <button className="menue-button" id='menue_add_card' style={{ bottom: '-30px' }} onClick={handleAddItem}>Add</button>
                            ) : 
                            (
                                <button className='menue-button' id='menue_add_card' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',padding:'5px', fontSize:"0.8rem" }} onClick={handleAddItem}>Add</button>
                            )
                        ) : (
                        imageId? (
                            <button className='menue-button' id='menue_unavailability' style={{ bottom: '-30px' }} onClick={handleAddItem}>Not available</button>
                        ) : 
                        (
                            <button className='menue-button' id='menue_unavailability' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',padding:'5px', fontSize:"0.8rem" }} onClick={handleAddItem}>Not available</button>
                        )
                    )}
                </div>




            </div>
            <div className='style_line style_divider'></div>
        </div>
    );
};

export default RestaurantMenuCard;
