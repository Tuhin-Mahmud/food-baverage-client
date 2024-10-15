import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Container from "../../components/utils/Container";

const BrandProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://food-and-beverage-server-ecru.vercel.app/read-brand')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <div className="mt-8 ">
                <h2 className="text-4xl font-bold text-center mb-3 text-orange-500 capitalize font-serif">Our Popular Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        products.map(product => <ProductCart
                            key={product._id}
                            product={product}
                        ></ProductCart>)
                    }
                </div>

            </div>

        </Container>
    );
};

export default BrandProduct;
