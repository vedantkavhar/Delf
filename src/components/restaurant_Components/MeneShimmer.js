import MenueShimmerStyling from "./MenueShimmerStyling.css"
const MenuShimmer = () => {
    return (
      <div className="restaurant-menu-shimmer">
        <div className="restaurant-header-shimmer">
          <img className="shimmer-img stroke animate" />
          <div className="restaurant-summary-details">
            <div className="shimmer-w15 stroke animate"></div>
            <div className="shimmer-w20 stroke animate"></div>
            <div className="shimmer-w18 stroke animate"></div>
            <div className="shimmer-w20 stroke animate"></div>
          </div>
          <div className="rating-block-shimmer stroke-box animate">
            <div className="rating-stars-shimmer stroke animate"></div>
            <div className="rating-count-shimmer stroke animate"></div>
          </div>
        </div>
        
        <div className="restaurant-offer-block" >
            {Array(4).fill("").map((_, index) => (
                <div key={index} className="restaurant-offer" >
                    <div className="offer-logo-offer-title">
                        <div className="offer-logo-shimmer stroke animate"></div>
                        <div className="offer-title-shimmer stroke animate"></div>
                    </div>
                    <div className="offer-code-offer-amount">
                        <div className="offer-code-shimmer stroke animate"></div>
                        <div className="offer-amount-shimmer stroke animate"></div>
                    </div>
                </div>
            ))}
        </div>


            <div className="menu-items-list">
                {
                    Array.from({ length: 10 }, (_, index) => (
                    <div className="shimmer-menu-card" key={index}>
                        <div className="shimmer-item-details">
                            <div className="menue-card-title stroke animate"></div>
                            <div className="menue-card-price stroke animate"></div>
                            <div className="menue-card-detail stroke animate"></div>
                        </div>
                        <div className="shimmer-img-wrapper">
                            <img className="menue-card-img stroke animate" />
                            <div className="menue-card-btn stroke animate"></div>
                        </div>
                    </div>
                    ))
                }
            </div>
      </div>
    );
  };
  
export default MenuShimmer;