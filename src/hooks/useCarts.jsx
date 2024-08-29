import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCarts = () => {
    const { user } = useAuth()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/read-carts?email=${user?.email}`)
            return res.data;
        }
    })


    return [cart];
};

export default useCarts;