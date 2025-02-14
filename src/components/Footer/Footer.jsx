const Footer = () => {
    return (  
        <>
       

       <section className="py-10">

        <hr className="bg-white h-1 w-[90%]" />
        <div className="container flex justify-between  flex-col">
            <div className="flex text-white justify-between">
                <ul className="flex gap-5">
                    <li>Блог</li>
                    <li>Форма заяления</li>
                    <li>Связаться с нами</li>
                </ul>
            </div>
            <div className="flex text-white py-7">
                <span className="flex text-white">Copyright 2024</span>
            </div>
        </div>
       </section>
        </>
    );
}
 
export default Footer;