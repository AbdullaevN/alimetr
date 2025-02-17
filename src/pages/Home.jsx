import Header from "../components/Header/Header";
import main from '../assets/main.png'
import How from "../components/How/How";
import SalaryCalculator from "../components/Calculator/Calculator";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return ( 
        <>
   <div className="container">
   {/* <Header/> */}


<section className="">
    <div className="">
        <img className="object-cover w-[90%]" src={main} alt="" />
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
   </div>
        </>
     );
}
 
export default Home;