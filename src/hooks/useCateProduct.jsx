import { useEffect, useState } from "react";


const useCateProduct = () => {
    const [categoryProduct, setCategoryProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/read-category')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setCategoryProduct(data)
            })
    }, [])
    return [categoryProduct, isLoading]
};

export default useCateProduct;