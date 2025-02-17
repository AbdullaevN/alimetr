import info1 from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import info3 from '../../assets/info3.png';
import info4 from '../../assets/info4.png';

const Info = () => {
    return ( 
        <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Полезная информация</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                    {[
                        { img: info1, title: 'Подготовка документов для иска', link: '/preparation' },
                        { img: info2, title: 'Документы готовы. Что дальше?', link: '/ready' },
                        { img: info3, title: 'Нужен ли мне адвокат', link: '/need-lawyer' },
                        { img: info4, title: 'Как вести себя в суде', link: '/test' },
                    ].map((item, index) => (
                        <a 
                            key={index} 
                            href={item.link} 
                            className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center h-28 sm:h-32 w-full"
                        >
                            <img src={item.img} alt={item.title} className="w-16 sm:w-20 h-16 sm:h-20 object-contain mr-3 sm:mr-4" />
                            <h2 className="text-base sm:text-lg font-semibold">{item.title}</h2>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Info;
