import { useEffect, useState } from "react";


const useCateProduct = () => {
    const [categoryProduct, setCategoryProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://food-and-beverage-server-ecru.vercel.app/read-category')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setCategoryProduct(data)
            })
    }, [])
    return [categoryProduct, isLoading]
};

export default useCateProduct;