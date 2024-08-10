import { CDN_URL, swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard"
import {useEffect, useState} from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helperFunctions";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
import UserOffline from "./UserOffline";

    const Body=()=>{
        const [searchText, setSearchText]=useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [allRestaurants,FilterRes]=useRestaurants(swiggy_api_URL);
        const [filteredRestaurants, setfilteredRestaurants]=useState(null);
        const isOnline=useOnline();
        console.log(allRestaurants);
        
        if(!isOnline) return <UserOffline/>
        

        const searchData = (searchText, restaurants) => {
            if (searchText !== "") {
              const filteredData = filterData(searchText, restaurants);
              setfilteredRestaurants(filteredData);
              setErrorMessage("");
              if (filteredData?.length === 0) {
                setErrorMessage(`Sorry, we couldn't find any results for "${searchText}"`);
              }
            } else {
              setErrorMessage("");
              setfilteredRestaurants(restaurants);
            }
        };

    console.log("render");
       // if allRestaurants are empty don't render restaurants cards
        if (!allRestaurants) return null;
        return (
        // return (
            <div className="body">
                <div className="filter_and_search">
                    <div className="filter">
                        <button 
                            className="filter_btn filter_btn"
                            
                            onClick={()=>{
                                const filteredList=allRestaurants.filter((res)=> res.info.avgRating>4.2 );
                                setfilteredRestaurants(filteredList);
                            }}
                        >Rating 4.2+</button>
                        <button 
                            className="pure_veg_btn filter_btn"
                            onClick={() => {
                                const filteredList = allRestaurants.filter((res) => res.info.veg);
                                setfilteredRestaurants(filteredList);
                            }}
                        >Pure Veg</button>

                        <button 
                            className="fast_delivery_btn filter_btn"
                            onClick={() => {
                                const sortedList = allRestaurants.slice().sort((a, b) => {
                                    return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
                                });
                                setfilteredRestaurants(sortedList);
                            }}
                        >Fast Delivery</button>

                        <button 
                            className="300_600_btn filter_btn"
                            onClick={() => {
                                const filteredList = allRestaurants.filter((res) => {
                                    const costForTwo = parseInt(res.info.costForTwo.replace(/\D/g, ''), 10);
                                    return costForTwo >= 300 && costForTwo <= 500;
                                });
                                setfilteredRestaurants(filteredList);
                            }}
                        >Rs.300-Rs.500</button>

                        <button 
                            className="less_than_300 filter_btn"
                            onClick={() => {
                                const filteredList = allRestaurants.filter((res) => {
                                    const costForTwo = parseInt(res.info.costForTwo.replace(/\D/g, ''), 10);
                                    return costForTwo < 300;
                                });
                                setfilteredRestaurants(filteredList);
                            }}
                        >Less than Rs.300</button>
                    </div>

                    <div className="search-container">
                        <input 
                            type="text" 
                            className="search-input" 
                            id="search-bar" 
                            placeholder="Search a restaurent you want..."  
                            value={searchText} 
                            onChange={(e)=>{
                                setSearchText(e?.target?.value);
                                // const data = filterData(searchText, allRestaurants);
                                // setfilteredRestaurants(data);
                                searchData(searchText, allRestaurants);
                            }} 
                        />

                        <button 
                            className="search-button" 
                            onClick={()=>{
                                // const filteredList = allRestaurants.filter((res) => {
                                //     const restaurantName = res.info.name.toLowerCase();
                                //     const searchTextLowerCase = searchText.toLowerCase();
                                //     return restaurantName.includes(searchTextLowerCase);
                                // });
                                // setfilteredRestaurants(filteredList);

                                // const data = filterData(searchText, allRestaurants);
                                // setfilteredRestaurants(data);
                                searchData(searchText, allRestaurants);
                            }}
                        >Search</button>
                    </div>
                </div>
                {/* {
                    errorMessage && <div className="error-container">
                        {errorMessage}
                    </div>
                } */}
                {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
                    <Shimmer />
                ) : (
                    <div className="restaurant-containser">
                        {filteredRestaurants !== null  && filteredRestaurants?.length==0 ? (
                                <div className="match-not-found">
                                    <h1>No restaurant matches your filter!!</h1>
                                </div>
                            ) : (
                                (filteredRestaurants === null || filteredRestaurants?.length === 0 ? FilterRes : filteredRestaurants).map((restaurant) => {
                                    const { name, avgRating, cuisines, locality, cloudinaryImageId } = restaurant.info;
                                    const rating = avgRating + "  •  ";
                                    const src = CDN_URL + cloudinaryImageId;
                                    // console.log(name+"    "+restaurant?.info?.id);
                                    return (
                                        <Link key={restaurant?.info?.id} to={`/restaurent/${restaurant?.info?.id}`} style={{ textDecoration: 'none' }}>
                                            <RestaurantCard
                                                key={restaurant?.info?.id}
                                                hotelName={name}
                                                rating={rating}
                                                time={restaurant?.info?.sla?.slaString}
                                                area={cuisines.join(", ")}
                                                address={locality}
                                                imagelinek={src}
                                            />
                                        </Link>
                                    );
                                })
                            )
                        }
                    </div>
                )}
            </div>
        )
}

export default Body;






