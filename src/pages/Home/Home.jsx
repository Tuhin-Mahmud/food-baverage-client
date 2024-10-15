import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import About from "../About/About";
import Accordian from "../Accordian/Accordian";
import BestChoice from "../BestChoice/BestChoice";
import BrandProduct from "../BrandProduct/BrandProduct";
// import BrandProduct from "../BrandProduct/BrandProduct";
import Contacts from "../Contacts/Contacts";
import Menu from "../Menu/Menu";
import NewFoods from "./NewFoods/NewFoods";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BrandProduct></BrandProduct>
            <NewFoods></NewFoods>
            <Menu></Menu>
            <About></About>
            <BestChoice></BestChoice>
            <Accordian></Accordian>
            <Contacts></Contacts>

        </div>
    );
};

export default Home;