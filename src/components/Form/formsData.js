import formImg from "../../assets/form.png"; // Импортируем изображение
 
export const formsData = [
    {
      id: "alimony",
      title: "Исковое заявление 1",
      description: " о взыскании алиментов (в долях к заработку или иному доходу)",
      image: formImg,
      fields: [
        { name: "courtName", label: "В районный суд", placehol:"Название суда", type: "text" },
        { name: "claimantName", label: "Истец (ФИО)", placehol:"ФИО истца", type: "text" },
        { name: "claimantAddress", label: "Адрес истца",  placehol:"Название суда",type: "text" },
        { name: "defendantName", label: "Ответчик (ФИО)",  placehol:"ФИО ответчика",type: "text" },
        { name: "defendantAddress", label: "Адрес ответчика",  placehol:"Название суда",type: "text" },
        { name: "marriageDate", label: "Дата вступления в брак",  placehol:"Название суда",type: "date" },
        { name: "courtDecision", label: "Решение суда", placehol:"Название суда", type: "text" },
        { name: "divorceDate", label: "Дата расторжения брака",  placehol:"Название суда",type: "date" },
        { name: "child1", label: "Первый ребенок (ФИО и дата рождения)",  placehol:"Название суда",type: "text" },
        { name: "child2", label: "Второй ребенок (ФИО и дата рождения)",  placehol:"Название суда",type: "text" },
        { name: "defendantBirthplace", label: "Место рождения ответчика", placehol:"Название суда", type: "text" },
      ],
    },
    {
      id: "property",
      title: "Исковое заявление 2",
      description: "о взыскании алиментов (в твердой денежной сумме)",
      image: formImg,
      fields: [
        { name: "courtName", label: "Название суда", type: "text" },
        { name: "claimantName", label: "Истец (ФИО)", type: "text" },
        { name: "claimantAddress", label: "Адрес истца", type: "text" },
        { name: "propertyDetails", label: "Описание имущества", type: "textarea" },
      ],
    },
    {
        id: "fixedSum",
        title: "Исковое заявление 3",
        description: "о взыскании алиментов (в твердой денежной сумме)",
        image: formImg,
        fields: [
          { name: "courtName", label: "Название суда", type: "text" },
          { name: "claimantName", label: "Истец (ФИО)", type: "text" },
          { name: "claimantAddress", label: "Адрес истца", type: "text" },
          { name: "propertyDetails", label: "Описание имущества", type: "textarea" },
        ],
      },
  ];
  
