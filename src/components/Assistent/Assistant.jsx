import React, { useState } from 'react';

const ApplicationBlock = () => {
    return (
        <div className="w-full  p-4">
            <div className="flex flex-col gap-3 justify-end py-4 items-end float-end">
                <hr className="w-full h-0.2 bg-white mb-4 " />
                <div className='flex  items-center gap-10 align-baseline md:flex-row flex-col'>
              <div className='flex gap-2'>
              <h2 className="text-xl font-bold text-white uppercase flex items-start text-start m-0">Исковое заявление</h2>
              <p className="text-white  text-start text-xs w-4/12 m-0">О взыскании алиментов  (в долях к заработку или иному доходу)</p>
              </div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 14H34M34 14V34M34 14L14 34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
                {/* <hr className="w-full h-1 bg-white mt-4" /> */}
            </div>
        </div>
    );
};

const Assistant = () => {
    const [blocks, setBlocks] = useState([1, 2, 3, 4, 5]);

    return (
        <>
            <section className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="flex justify-between py-5 pb-10">
                        <h1 className="text-5xl font-bold">Помощник в подготовке документов</h1>
                        <button className="text-sm">Открыть больше</button>
                    </div>

                    {/* Контейнер с блоками */}
                    <div className="flex align-baseline">
                        <div className="w-screen">  
                            {blocks.map((block, index) => (
                                <ApplicationBlock key={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};



export default Assistant;
