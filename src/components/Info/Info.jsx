// import { Link } from 'react-router-dom';
// import info1 from '../../assets/info1.png';
// import info2 from '../../assets/info2.png';
// import info3 from '../../assets/info3.png';
// import info4 from '../../assets/info4.png';
// import info5 from '../../assets/info5.png';
// import info6 from '../../assets/info6.png';
// import info7 from '../../assets/info7.png';
// import info8 from '../../assets/info8.png';
// import info9 from '../../assets/info9.png';
// import info10 from '../../assets/info10.png';
// import info11 from '../../assets/info11.png';

// const Info = ({ limit }) => {
//     const items = [
//         { img: info1, title: 'Подготовка документов для иска', link: '/docs-preparation', desc:'Узнайте, какие документы нужны для подачи иска на алименты в суд. Полный перечень и советы по их подготовке.' },
//         { img: info2, title: 'Документы готовы. Что дальше?', link: '/next-steps', desc:'Документы собраны, что дальше? Разбираемся, как подать иск в суд, куда обращаться и какие шаги предпринять.' },
//         { img: info3, title: 'Нужен ли мне адвокат', link: '/need-lawyer', desc:' Разбираем, когда стоит обращаться к адвокату по алиментам и можно ли выиграть дело без него.' },
//         { img: info4, title: 'Как вести себя в суде', link: '/court-behavior', desc:'Узнайте, как правильно вести себя в суде при разбирательстве по алиментам, чтобы добиться справедливого решения.' },
//         { img: info5, title: 'Порядок подачи иска', link: '/file-lawsuit', desc:'Полное руководство по подаче иска на алименты: куда обращаться, какие документы нужны и как проходит процесс.' },
//         { img: info6, title: 'Порядок подачи заявления на получение судебного приказа', link: '/court-order' , desc:' Судебный приказ – быстрый способ взыскать алименты. Узнайте, как его оформить и подать в суд.'},
//         { img: info7, title: 'Что делать после получения решения суда?', link: '/after-court-decision' , desc:'Получили решение суда, но что дальше? Разбираем порядок действий после вынесения решения по алиментам.'},
//         { img: info8, title: 'Что делать, если алименты не выплачиваются?', link: '/no-payments' , desc:'Что делать, если отец или мать уклоняются от уплаты алиментов? Разбираем механизмы принудительного взыскания.'},
//         { img: info9, title: 'Можно ли изменить размер алиментов?', link: '/change-alimony', desc:'В каких случаях можно изменить размер алиментов? Основания, подача иска и судебная практика.' },
//         { img: info10, title: 'Алименты с неофициального дохода', link: '/unofficial-income', desc:'Если должник работает без оформления, это не повод отказываться от алиментов. Узнайте, как доказать его доход.' },
//         { img: info11, title: 'Алименты за прошлые периоды', link: '/past-payments' , desc:'Разбираем, как получить невыплаченные алименты за прошедшие периоды, даже если иск подаётся сейчас.'},
//     ];
    

//     const displayedItems = limit ? items.slice(0, limit) : items;

//     return ( 
//         <section className="py-8">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 "> 
//                 <div className="text-start mb-6 sm:mb-8">
//                     <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-white uppercase px-4">Полезная информация</h2>
//                 </div>
//                 <div className="flex flex-col px-4 space-y-6">
//                     {displayedItems.map((item, index) => (
//                        <>
//                         <hr  className='bg-[#D4D4D4] h-[0.2px] w-full border-none my-8' />
//                         <div 
//                             key={index} 
//                             className={`flex flex-col sm:flex-row items-center gap-4 ${
//                                 index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
//                             }`}
//                         >
//                             <div className="w-full sm:w-6/12">
//                                 <img src={item.img} alt={item.title} className="h-60 object-contain w-full rounded-lg" />
//                             </div>
//                             <div className="w-full sm:w-6/12 text-white">
//                             <Link to={item.link}>
//                                 <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
//                                 </Link>

//                                 <p className="mt-2">
//                                    {item.desc || 'd'}   </p>
//                                 <Link to={item.link}>
//                                     <button className="mt-4 text-white py-2 rounded-lg cursor-pointer">Далее</button>
//                                 </Link>
//                             </div>
//                         </div>
//                        </>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Info;



import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import info1 from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import info3 from '../../assets/info3.png';
import info4 from '../../assets/info4.png';
import info5 from '../../assets/info5.png';
import info6 from '../../assets/info6.png';
import info7 from '../../assets/info7.png';
import info8 from '../../assets/info8.png';
import info9 from '../../assets/info9.png';
import info10 from '../../assets/info10.png';
import info11 from '../../assets/info11.png';

const Info = ({ limit }) => {
    const { t } = useTranslation();
    
    const items = t("info_items", { returnObjects: true }).map((item, index) => ({
        img: [info1, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11][index],
        title: item.title,
        link: [
            '/docs-preparation',
            '/next-steps',
            '/need-lawyer',
            '/court-behavior',
            '/file-lawsuit',
            '/court-order',
            '/after-court-decision',
            '/no-payments',
            '/change-alimony',
            '/unofficial-income',
            '/past-payments'
        ][index],
        desc: item.desc,
        linkText: item.link_text
    }));

    const displayedItems = limit ? items.slice(0, limit) : items;

    return ( 
        <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-start mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-white uppercase px-4">
                        {t("useful_info_title")}
                    </h2>
                </div>
                <div className="flex flex-col px-4 space-y-6">
                    {displayedItems.map((item, index) => (
                       <div key={index}>
                        <hr className='bg-[#D4D4D4] h-[0.2px] w-full border-none my-8' />
                        <div 
                            className={`flex flex-col sm:flex-row items-center gap-4 ${
                                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                            }`}
                        >
                            <div className="w-full sm:w-6/12">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="h-60 object-contain w-full rounded-lg" 
                                />
                            </div>
                            <div className="w-full sm:w-6/12 text-white">
                                <Link to={item.link}>
                                    <h2 className="text-lg sm:text-xl font-semibold hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h2>
                                </Link>
                                <p className="mt-2">{item.desc}</p>
                                <Link to={item.link}>
                                    <button className="mt-4 text-white hover:text-blue-400 py-2 rounded-lg cursor-pointer transition-colors">
                                        {item.linkText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Info;