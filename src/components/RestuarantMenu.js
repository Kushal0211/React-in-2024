import useRestuarantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestuarantMenu = () => {

    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestuarantMenu(resId);

    if (resInfo === null) {
        return (
            <Shimmer />
        )
    }

    const { name, cuisines, costForTwoMessage,
        locality, city, avgRating, sla, totalRatingsString,
        aggregatedDiscountInfo } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) =>
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("cate", categories);

    return (

        <div className="res-menu-page">

            <div className="res-menu">
                <h1 className="res-name"> {name}</h1>
                <p className="res-area">{locality}, {city}</p>
                <p className="res-cuisines"> {cuisines.join(", ")} - <span className="res-price">{costForTwoMessage} </span> </p>

                <p className="menuAvgRating">{avgRating}⭐
                    <span className="menuDeliveryTime"> 🛵 {sla.deliveryTime} minutes</span>
                </p>

                <p className="menuRatings">{totalRatingsString}</p>

                <div>

                    <p className="menuDiscounts">{aggregatedDiscountInfo.descriptionList[0].meta}</p>

                    <p className="menuDiscounts">{aggregatedDiscountInfo.descriptionList[1].meta}</p>

                    {categories.map((category, index) => (
                        <RestuarantCategory 
                            key={index} 
                            data={category?.card?.card}
                            showItems={index === showIndex ? true : false}
                            setShowIndex={() => setShowIndex(index)}
                        />
                    ))}

                </div>
          </div>
       </div>
    );
};

export default RestuarantMenu;