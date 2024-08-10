import React from 'react';
import "./RestaurantMenusStyle.css";
import RestaurantMenuCard from "./RestaurentMenueCard";

const RestaurantContainer = ({ catagory , isv, setmc}) => {
    const menueCategories=catagory?.categories;
    const menueItemCards=catagory?.itemCards;
    console.log(" ----------  " +JSON.stringify(catagory.title)+"  "+isv);
  return (
    <div className="restaurant-container">
        <span className="restaurant-container_title_box" onClick={setmc}>
                <span>{catagory.title+(menueItemCards?(" ("+menueItemCards.length+")"):(""))}</span>
                {isv?
                    <span >&#9660;</span>
                    :
                    <span >&#9650;</span>
                    }
        </span>
        { isv && 
            <div className='restaurant-container_menueCards'>
                {menueItemCards ?
                    menueItemCards.map((item, index) => (
                        <RestaurantMenuCard key={index} menueItem={item?.card?.info} />
                    ))   
                    :
                    menueCategories.map((item, index) => (
                        <div>
                            <div>
                                <div className='menue_catagory_title-length'>
                                    <div className='menue_catagory_item'>{item?.title}</div>
                                    <div className='menue_catagory_item'>{" ("+item?.itemCards?.length+")"}</div>
                                </div>
                                {/* <div>
                                    
                                </div> */}
                            </div>
                            <div>
                                {item?.itemCards.map((item, index) => (
                                    <RestaurantMenuCard key={index} menueItem={item?.card?.info} />
                                ))}
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        }
    </div>
  );
};

export default RestaurantContainer;
