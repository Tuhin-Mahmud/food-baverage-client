import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import BrandProduct from "../BrandProduct/BrandProduct";
import Contacts from "../Contacts/Contacts";
import NewFoods from "./NewFoods/NewFoods";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BrandProduct></BrandProduct>
            <NewFoods></NewFoods>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;