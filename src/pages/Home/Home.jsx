
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Cars from "../../components/Cars/Cars";
import Categories from "../../components/Cars/Categories";



const Home = () => {
   
    
    return (
        <div>
            <Helmet>
                <title>CarHub | Rent a car for a day</title>
            </Helmet>
            
         <Banner></Banner>
         <Categories></Categories>
         <Cars></Cars>
        </div>
    );
};

export default Home;