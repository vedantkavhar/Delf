import RestaurantSkeletonCard from "./RestaurantSkeletonCard";
const Shimmer=()=>{
    const shimmerElements = [];

    for (let i = 0; i < 25; i++) {
        shimmerElements.push(<RestaurantSkeletonCard key={i} />);
    }
    console.log("this is the shimmer   +shimmerElements");
    return (
        <div className="body">
            <div className="restaurant-containser">
                {
                    shimmerElements
                }
            </div>
        </div>
    )
}

export default Shimmer;


