// import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBooking = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    // get reservation data from mongodb
    const { data: reservation = [], refetch, isLoading } = useQuery({
        queryKey: ['reservation', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reservation?email=${user?.email}`)

            return res.data
        }
    })
    return [reservation, refetch, isLoading]
};

export default useBooking;