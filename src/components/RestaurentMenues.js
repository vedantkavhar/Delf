import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 
import MenuShimmer  from "./restaurant_Components/MeneShimmer";
import {menue_api_URL} from "../utils/constants"
import Error from "./Error";
import useRestaurantMenues from "../utils/useRestaurantMenues";

// import RestaurantMenusStyle from "./restaurant_Components/RestaurantMenusStyle.css";
import MenuTopHeader from './restaurant_Components/MenuTopHeader';
import RestaurantOfferCard from './restaurant_Components/RestaurantOfferCard'
import RestaurantMenueCard from "./restaurant_Components/RestaurentMenueCard";
import RestaurantContainer from './restaurant_Components/RestaurantContainer';


const RestaurantMenues = () => {
  const [menueContainer,setMenueContainer]=new useState("..");
  const parameters = useParams();
  const { resId } = parameters;
  const [menuHeaderData,offerCardData,catagoryData,error,loading]=useRestaurantMenues(resId);
  
  

  if (loading) {
    return <MenuShimmer />;
  }

  if (!catagoryData  || !offerCardData || !menuHeaderData) {
    return <div>Error loading restaurant data</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div id="restaurant_menue_body">
      <div id="restaurant_menues">
        <MenuTopHeader menueItem={menuHeaderData} />
        <div className="restaurant-offers styles_slider_offers">
          {offerCardData.map((offer) => (            
              <RestaurantOfferCard
                key={offer.info.offerIds[0]} // Using offerIds[0] as the key
                offer={offer.info}
              />
          ))}
          {offerCardData.map((offer) => (            
              <RestaurantOfferCard
                key={offer.info.offerIds[0]} // Using offerIds[0] as the key
                offer={offer.info}
              />
          ))}
        </div>
        <div id="restorant_menue_catagory">
          {catagoryData.map((item, index) => (
            (item.card?.card?.itemCards || item.card?.card?.categories) ? (
              
              <RestaurantContainer 
                  key={index} 
                  catagory={item?.card?.card} 
                  isv={menueContainer==JSON.stringify(item.card.card.title)} 
                  setmc={()=>{
                    (menueContainer==JSON.stringify(item.card.card.title))?
                        setMenueContainer("..")
                      :
                        setMenueContainer(JSON.stringify(item.card.card.title))
                  }}  />
            ) : (
              null
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default RestaurantMenues;


