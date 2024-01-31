import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {

    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, locality} = resData?.info;

    return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src= {CDN_URL + resData.info.cloudinaryImageId}
            />
            <h4 className="res-info">{resData?.info.name}</h4>
            <h4 className="res-info">{resData?.info.cuisines.join(", ")}</h4>
            <h4 className="res-info"> {resData?.info.avgRating} ⭐</h4>
            <h4 className="res-info">{resData?.info.costForTwo}</h4>
            <h4 className="res-info">{locality}</h4>
        </div>
    ); 
}

export default RestuarantCard;