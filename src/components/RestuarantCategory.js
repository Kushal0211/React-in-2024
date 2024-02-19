
import ItemList from "./ItemList";

const RestuarantCategory = ({ data , showItems, setShowIndex}) => {

    
    const handleClick = () => {
        setShowIndex();
    }

    return (

        <div className="menu-suggestions">
            
            <div className="menu-suggestion-title" onClick={handleClick}>
               
                <span className="menu-accordian">
                    {data.title} ({data.itemCards.length})
                </span>

                <span>
                    ⬇️
                </span>
            </div>

            <div className="menu-suggestion-data" >
                { showItems && <ItemList items={data.itemCards} />}
            </div>

        </div>
    );
}

export default RestuarantCategory;