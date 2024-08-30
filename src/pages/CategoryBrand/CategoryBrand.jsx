
import CategorySlider from "./CategorySlider";

import useCateProduct from "../../hooks/useCateProduct";

// import ShowFoodCart from "../../BrandF";
import { useParams } from "react-router-dom";
import SingleProduct from "./BrandFoods/SingleProduct";


const CategoryBrand = () => {
    const [categoryProduct, isLoading] = useCateProduct()
    // console.log(categoryProduct);
    const { category } = useParams()
    // console.log(category);

    const singleCateProduct = categoryProduct.filter(item => item.category === category)
    console.log(singleCateProduct);


    if (isLoading == true) {
        return <p className="text-2xl text-center my-48">Loading..</p>
    }

    return (
        <div>
            <CategorySlider></CategorySlider>
            <h2 className="text-3xl font-bold font-serif mt-10 text-center text-orange-500">Category Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {
                    singleCateProduct.map((food, index) => <SingleProduct

                        key={index}
                        food={food}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default CategoryBrand;