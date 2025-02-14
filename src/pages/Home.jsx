import Header from "../components/Header/Header";
import main from '../assets/main.png'
import How from "../components/How/How";
import SalaryCalculator from "../components/Calculator/Calculator";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return ( 
        <>
        <Header/>


        <section className="">
            <div className="container">
                <img className="object-cover w-[80%]" src={main} alt="" />
            </div>
        </section>

<How/>
        <div className="flex items-center justify-center ">
      <SalaryCalculator />
    </div>


    <div>
        <Info/>
    </div>

    <Footer/>
        </>
     );
}
 
export default Home;