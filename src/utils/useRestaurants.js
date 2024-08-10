import {useState,useEffect} from "react";
const useRestaurants=(swiggy_api_URL)=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        getRestorents();
    },[]);
      // async function getRestaurant to fetch Swiggy API data
    async function getRestorents() {
        // handle the error using try... catch
        try {
            const response = await fetch(swiggy_api_URL);
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
              } else {
                  const json = await response.json();
                  // initialize checkJsonData() function to check Swiggy Restaurant data
                  async function checkJsonData(jsonData) {
                      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                          // initialize checkData for Swiggy Restaurant data
                          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                          // if checkData is not undefined then return it
                          if (checkData !== undefined) {
                              // console.log(checkData);
                              return checkData;
                          }
                      }
                  }
                  // call the checkJsonData() function which return Swiggy Restaurant data
                  const resData =await checkJsonData(json);
                  console.log("---"+resData)
                  setAllRestaurants(resData);
                  setFilteredRestaurants(resData);
              }
        } catch (error) {
            console.log(error);
        }
    }
    return [allRestaurants,filteredRestaurants] ;
}
export default  useRestaurants;