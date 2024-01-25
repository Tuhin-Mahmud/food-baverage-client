import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { useLoaderData } from "react-router-dom";

const BrandProduct = () => {
    const { brand } = useLoaderData()
    return (
        <div className="mt-8">
            <h2 className="text-4xl font-bold text-center mb-3">Brand Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    brand.map(product => <ProductCart
                        key={product.id}
                        product={product}
                    ></ProductCart>)
                }
            </div>
        </div>
    );
};

export default BrandProduct;
