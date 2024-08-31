import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCarts = () => {
    const { user } = useAuth()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://food-and-beverage-server-ecru.vercel.app/read-carts?email=${user?.email}`)
            return res.data;
        }
    })


    return [cart, refetch];
};

export default useCarts;