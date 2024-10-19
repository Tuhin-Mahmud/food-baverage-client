import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://food-and-beverage-server-ecru.vercel.app',

});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;