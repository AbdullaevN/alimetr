import Header from "../components/Header/Header";
import main from '../assets/main.png'
import How from "../components/How/How";
import SalaryCalculator from "../components/Calculator/Calculator";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";
import AlimonyCalculator from "../components/Calculator/AliCalc";
import Assistant from "../components/Assistent/Assistant";

const Home = () => {
    return ( 
        <>
   <div className="container">
   {/* <Header/> */}


{/* <section className="">
    <div className="">
        <img className="object-cover w-[90%]" src={main} alt="" />
    </div>
</section> */}
 <section className=" text-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
         <div className="md:w-full text-center md:text-left">
          
          <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ОНЛАЙН-ПОМОЩНИК  ПО РАСЧЕТУ <br /> АЛИМЕНТОВ
          </h1>
      

          </div>
          <button className="mt-6 bg-white text-black font-medium py-2 px-15 rounded-lg shadow-lg hover:bg-gray-200">
            Рассчитать
          </button>
        </div>

         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
         
        

        </div>
      </div>
    </section>


<How/>
<div className="flex items-center justify-center ">
<SalaryCalculator />
{/* <AlimonyCalculator/> */}
</div>

<div>
  <Assistant/>
</div>


<div>
<Info/>
</div>

   </div>
        </>
     );
}
 
export default Home;