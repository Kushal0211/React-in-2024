import RestuarantCard, {withLabelRestuarants} from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";


const Body = () => {

    console.log("Body rendered")

    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filteredRestuarant, setFilteredRestuarant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isOnline = useOnlineStatus();
    const PromotedRestuarant = withLabelRestuarants(RestuarantCard);

    useEffect(() => {
        fetchData();
        console.log("list updated");
        console.log("list-", listOfRestuarant);
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);

        const json = await data.json();

        console.log(json);

        setListOfRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    // Here below - Conditinal Rendering using Ternerary operator
    
    if(!isOnline){
        return (
            <div>
                <UserOffline/>
            </div>
        );
    }

    return listOfRestuarant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search"></div>
            <div className="filter-btn">

                <div className="search">

                    <input placeholder="Search Your Favourite Restuarant here" type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button onClick={() => {
                        const filteredRestuarants = listOfRestuarant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestuarant(filteredRestuarants);
                        console.log("list of res");
                        console.log(listOfRestuarant);
                        console.log("filtered res");
                        console.log(filteredRestuarant);

                    }}>
                        Search
                    </button>

                </div>


                <button onClick={() => {
                    const filteredList = listOfRestuarant.filter((res) =>
                        res?.info?.avgRating > 4.4
                    );
                    setListOfRestuarant(filteredList);
                }}>
                    Top Rated Restuarants
                </button>
            </div>

            <div className="res-container">
                {
                    filteredRestuarant.map((restuarant) => (
                        <Link className="link-tag" key={restuarant?.info.id}
                            to={"/restuarants/" + restuarant?.info.id}>

                                {restuarant.info.isOpen ? (
                                <PromotedRestuarant resData={restuarant}/>
                                ) : (
                                    <RestuarantCard resData={restuarant}/>
                                )}                         
                        </Link>

                    ))}
            </div>
        </div>
    );
}

export default Body;