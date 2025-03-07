import React, { useState } from 'react';

const ApplicationBlock = () => {
    return (
        <div className="w-full my-4 p-4">
            <div className="flex flex-col items-center w-8/12 justify-end ">
                <hr className="w-full h-0.2 bg-white mb-4" />
                <div className='flex  items-center justify-end md:flex-row flex-col'>
                <h2 className="text-2xl font-bold text-white">Исковое заявление</h2>
                <p className="text-white">О взыскании алиментов (в долях к заработку или иному доходу)</p>
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
    const [blocks, setBlocks] = useState([1, 2, 3, 4, 5]); // Изначально показываем 5 блоков

    return (  
        <>
            <section className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="flex justify-between py-5 pb-10">
                        <h1 className="text-5xl font-bold">Помощник в подготовке документов</h1>
                        <button className="text-sm">Открыть больше</button>
                    </div>

                    <div className="w-full">
                        {/* Динамическое отображение блоков */}
                        {blocks.map((block, index) => (
                            <ApplicationBlock key={index} />
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Assistant;
