import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const BrandProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/brand/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-8">
            <h2 className="text-4xl font-bold text-center mb-3">Brand Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    products.map(product => <ProductCart
                        key={product.id}
                        product={product}
                    ></ProductCart>)
                }
            </div>
        </div>
    );
};

export default BrandProduct;
