
import Banner from "../../components/Header/Banner/Banner";
import About from "../About/About";
import Accordian from "../Accordian/Accordian";
import BestChoice from "../BestChoice/BestChoice";
import Blogs from "../Blogs/Blogs";
import BrandProduct from "../BrandProduct/BrandProduct";
// import BrandProduct from "../BrandProduct/BrandProduct";
import Contacts from "../Contacts/Contacts";
import Menu from "../Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";
import NewFoods from "./NewFoods/NewFoods";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BrandProduct></BrandProduct>
            <NewFoods></NewFoods>
            <Menu></Menu>
            <About></About>
            <Blogs></Blogs>
            <BestChoice></BestChoice>
            <Accordian></Accordian>
            <Contacts></Contacts>
            <Testimonials />
        </div>
    );
};

export default Home;