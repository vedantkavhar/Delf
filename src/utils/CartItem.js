import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';
import { CDN_URL } from './constants';
import React from 'react';
import { useSelector } from 'react-redux';

const CartItem = ({ item }) => {
  
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
  } = item;
  const cartItems = useSelector((store) => store.cart.items);
  console.log(id+","+name+","+price)
    const  dispatch=useDispatch();
    const handleRemoveItem = () => {
      const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {   // Check if the item exists in the cart
          dispatch(removeItem(index));
      }
    }

  
    const imageUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+imageId;

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
                    {imageId ? (
                        inStock > 0 ? (
                        <button className="menue-button" id='menue_add_card' style={{ bottom: '-30px' }} onClick={handleRemoveItem}>Remove</button>
                        ) : (
                        <button className='menue-button' id='menue_unavailability' style={{ bottom: '-30px' }} onClick={handleRemoveItem}>Remove</button>
                        )
                    ) : (
                        <button className='menue-button' id='menue_unavailability' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',padding:'5px', fontSize:"0.8rem" }} onClick={handleRemoveItem}>Remove</button>
                    )}
                </div>
            </div>
            <div className='style_line style_divider'></div>
        </div>
    );
};

export default CartItem;