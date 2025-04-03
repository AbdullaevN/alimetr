import { Link } from 'react-router-dom';

const NotFound = () => {
    return (  
        <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-white uppercase">Страница не найдена</h2>
                </div>
                <div className="flex flex-col px-4 space-y-6  h-screen">
                    <div className="flex justify-center items-center gap-4">
                        <div className="w-full text-white">
                            <h2 className="text-lg sm:text-xl font-semibold">Упс! Страница не найдена.</h2>
                            <p className="mt-2">
                                К сожалению, запрашиваемая страница не существует. Вы можете вернуться на главную страницу или выбрать одну из полезных ссылок ниже.
                            </p>
                            <Link to="/">
                                <button className="mt-4 text-white py-2 px-5 rounded-lg cursor-pointer bg-green-600 hover:bg-gray-700">
                                    Вернуться на главную
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default NotFound;
