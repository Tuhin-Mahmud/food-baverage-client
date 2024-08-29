import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import About from "../About/About";
import BrandProduct from "../BrandProduct/BrandProduct";
// import BrandProduct from "../BrandProduct/BrandProduct";
import Contacts from "../Contacts/Contacts";
import NewFoods from "./NewFoods/NewFoods";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BrandProduct></BrandProduct>
            <NewFoods></NewFoods>
            <About></About>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;