import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log("item-list", items);
    return (
        <div>
            {items.map((item) => (

                <div className="menu-suggestion-item-box">
                    <div key={item.card.info.id}
                        className="menu-suggestion-items"
                    >
                        <div className="menu-suggestion-info">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price / 100}</span>
                        </div>

                        <p className="menu-suggestion-description">{item?.card?.info?.description}</p>
                    </div>
                    <div className="menu-suggestion-item-img">
                        <img src={CDN_URL + item.card.info.imageId}/>
                    </div>
                </div>


            ))}

        </div>
    );
};

export default ItemList;