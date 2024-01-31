import useRestuarantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestuarantMenu(resId);

    if (resInfo === null) {
        return (
            <Shimmer />
        )
    }

    const { name, cuisines, costForTwoMessage, 
        locality, city, avgRating, sla, totalRatingsString, 
        aggregatedDiscountInfo} = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    return (
        <div className="res-menu">
            <h1 className="res-name"> {name} - {locality}, {city}</h1>
            <p className="res-cuisines"> {cuisines.join(", ")} - <span className="res-price">{costForTwoMessage} </span> </p>

            <p className="menuAvgRating">{avgRating}⭐
                <span className="menuDeliveryTime"> 🛵 {sla.deliveryTime} minutes</span>
            </p>

            <p className="menuRatings">{totalRatingsString}</p>

            <div>
                
                <p className="menuDiscounts">{aggregatedDiscountInfo.descriptionList[0].meta}</p>

                <p className="menuDiscounts">{aggregatedDiscountInfo.descriptionList[1].meta}</p>

            </div>


            <h2 className="menu-title">Menu Items you may Like</h2>
            <ul>
                {
                    itemCards.map((item) => {
                        return (
                            <div className="res-items" key={item?.card?.info?.id}>
                                <li>{item?.card.info.name} {"   - Rs. "}
                                    {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice /100}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default RestuarantMenu;