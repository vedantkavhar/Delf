import { useEffect, useState } from "react";
import { menue_api_URL } from "./constants";

const useRestaurantMenues=(resId)=>{
  const [menuHeaderData, setMenuHeaderData] = useState(null);
  const [offerCardData, setOfferCardData] = useState(null);
  const [catagoryData, setCatagoryData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        menue_api_URL+resId
      );
      const data = await response.json();
      console.log("this is a data  -----------------  ",data);
      setMenuHeaderData(data?.data?.cards[2]?.card?.card?.info);
      setOfferCardData(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
      setCatagoryData(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return [menuHeaderData,offerCardData,catagoryData,error,loading]
}
export default useRestaurantMenues;