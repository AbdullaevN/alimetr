import { Link } from 'react-router-dom';
import info1 from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import info3 from '../../assets/info3.png';
import info4 from '../../assets/info4.png';

const Info = () => {
    const items = [
        { img: info1, title: 'Подготовка документов для иска', link: '/preparation' },
        { img: info2, title: 'Документы готовы. Что дальше?', link: '/ready' },
        { img: info3, title: 'Нужен ли мне адвокат', link: '/need-lawyer' },
        { img: info4, title: 'Как вести себя в суде', link: '/test' },
    ];

    return ( 
        <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Полезная информация</h2>
                </div>
                <div className="flex flex-col px-4 space-y-6">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col sm:flex-row items-center gap-4 ${
                                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                            }`}
                        >
                            <div className="w-full sm:w-6/12">
                                <img src={item.img} alt={item.title} className="h-60 object-contain w-full rounded-lg" />
                            </div>
                            <div className="w-full sm:w-6/12 text-white">
                                <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
                                <p className="mt-2">
                                    Чтобы подать иск на алименты, вам потребуется несколько документов. Они помогут суду рассмотреть дело и вынести решение. Не переживайте, если у вас нет чего-то из списка — можно разобраться по ходу процесса.
                                </p>
                                <Link to={item.link}>
                                    <button className="mt-4 text-white py-2 rounded-lg">Далее</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Info;
