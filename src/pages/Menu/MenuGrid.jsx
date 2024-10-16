/* eslint-disable react/prop-types */
import MenuCart from "./MenuCart";


const MenuGrid = ({ item }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
                {
                    item.map(item => <MenuCart
                        key={item._id}
                        item={item}
                    ></MenuCart>)
                }
            </div>
        </div>
    );
};

export default MenuGrid;