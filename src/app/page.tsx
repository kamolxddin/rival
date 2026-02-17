import { About } from "@/features/home/About";
import  Hero  from "@/features/home/Hero";
import Products from "@/features/home/Products";
import { Showroom } from "@/features/home/Showroom";
import Footer from "@/shared/footer";



const Home = () => {
    return <div>

        <Hero/>
        <Products/>
        <About/>
        <Showroom/>
        <Footer/>
    </div>;
};

export default Home;
