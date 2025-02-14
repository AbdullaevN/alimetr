import info1 from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import info3 from '../../assets/info3.png';
import info4 from '../../assets/info4.png';

const Info = () => {
    return ( 
        <section className="py-8">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Полезная информация</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { img: info1, title: 'Подготовка документов для иска' },
                        { img: info2, title: 'Как подать заявление' },
                        { img: info3, title: 'Сроки рассмотрения дела' },
                        { img: info4, title: 'Как получить выплату' },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-4 rounded-lg shadow-md flex items-center h-32 w-full"
                        >
                            <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mr-4" />
                            <h2 className="text-lg font-semibold w-full">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Info;
