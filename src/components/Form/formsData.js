import formImg from "../../assets/form.png"; // Импортируем изображение
 
export const formsData = [


  {
    id: "alimony_divorce",
    title: "Исковое заявление ",
    description: "о расторжении брака и взыскании алиментов",
    image: "formImg",
    fields: [
      { name: "courtName", label: "В районный суд", type: "text" },
      { name: "claimantName", label: "Истец (Ф.И.О.)", type: "text" },
      { name: "claimantAddress", label: "Адрес истца", type: "text" },
      { name: "defendantName", label: "Ответчик (Ф.И.О.)", type: "text" },
      { name: "defendantAddress", label: "Адрес ответчика", type: "text" },
      { name: "defendantBirthDate", label: "Дата рождения ответчика ", type: "date" },
      { name: "marriageDate", label: "Дата вступления в брак", type: "date" },
      { name: "zagcDistrict", label: "Брак зарегистрирован в отделе ЗАГС _________-ского района", type: "text", placeholder: "" },
      { name: "divorceDate", label: "Совместное проживание до: ", type: "date" },
      { name: "zagzCity", label: "Город (Область)", type: "text" },
      { name: "actNumber", label: "Актовая запись №", type: "text" },
      { name: "lifeTogetherIssue", label: "Причина, по которой совместная жизнь не сложилась", type: "textarea" },
      // { name: "childrenCount", label: "Количество детей:", type: "number", placeholder: "1" },
      { name: "divorceCertificateNumber", label: "Подлинник свидетельства о заключении брака №", type: "text" },
      { name: "divorceCertificateDate", label: "Дата свидетельства о заключении брака", type: "date" }
      // { name: "defendantSupport", label: "Ответчик оказывает материальную помощь", type: "text" },
      // { name: "courtDecisionDistrict", label: "Решение суда района", type: "text" },
    ]
  },  

  {
    id: "alimony_income_share",
    title: "Исковое заявление ",
    description: "о взыскании алиментов в долях к заработку",
    image: formImg,
    fields: [
      { name: "courtName", label: "В ______ районный суд:", type: "text", placeholder: "6677" },
      { name: "claimantName", label: "Истец (ФИО):", type: "text", placeholder: "7t87y8" },
      { name: "claimantAddress", label: "Адрес истца:", type: "text", placeholder: "787" },
      { name: "defendantName", label: "Ответчик (ФИО):", type: "text", placeholder: "87" },
      { name: "defendantAddress", label: "Адрес ответчика:", type: "text", placeholder: "878" },
      { name: "marriageDate", label: "Дата вступления в брак:", type: "date", placeholder: "06/05/275760" },
      { name: "courtDecisionDistrict", label: "Решением суда _____ района брак расторгнут:", type: "text", placeholder: "6546dtr5" },
      { name: "divorceDate", label: "Дата расторжения брака:", type: "date", placeholder: "05/04/275760" },
      { name: "zagcDistrict", label: "Регистрация расторжения брака в отделе ЗАГС _______ района:", type: "text", placeholder: "6465e6sd" },
      { name: "zagcDivorceDate", label: "Регистрация расторжения брака:", type: "date", placeholder: "06/04/275760" },
      // { name: "childrenCount", label: "Количество детей:", type: "number", placeholder: "1" },
      // { name: "child1Details", label: "Ребенок 1 (ФИО и дата рождения):", type: "text", placeholder: "ytfyygyg" },
      // { name: "child1BirthDate", label: "Дата рождения ребенка 1:", type: "date", placeholder: "07/06/275760" },
      // { name: "child1Certificate", label: "Свидетельство о рождении ребенка 1:", type: "text", placeholder: "65r756765765" },
      // { name: "child1CertificateDate", label: "Дата выдачи свидетельства ребенка 1:", type: "date", placeholder: "07/05/275760" },
      { name: "defendantBirthPlace", label: "Место рождения ответчика:", type: "text", placeholder: "7ifitfut" },
      { name: "defendantBirthDate", label: "Дата рождения ответчика:", type: "date", placeholder: "06/05/275760" },
      { name: "divorceCertificate", label: "Копия свидетельства о расторжении брака:", type: "text", placeholder: "tf765675656576" },
      { name: "divorceCertificateDate", label: "От:", type: "date", placeholder: "07/06/275760" },
      // { name: "divorceCertificateNumber", label: "Подлинник свидетельства о заключении брака №", type: "text" },
      // { name: "divorceCertificateDate", label: "Дата свидетельства о заключении брака", type: "date" }
    ]
  },  
  {
    id: "alimony",
    title: "Исковое заявление ",
    description: "о взыскании алиментов в твердой денежной сумме",
     image: "formImg",
    fields: [
      { "name": "courtName", "label": "В районный суд", "placehol": "Название суда", "type": "text" },
      { "name": "claimantName", "label": "Истец (ФИО)", "placehol": "ФИО истца", "type": "text" },
      { "name": "claimantAddress", "label": "Адрес истца", "placehol": "Адрес истца", "type": "text" },
      { "name": "defendantName", "label": "Ответчик (ФИО)", "placehol": "ФИО ответчика", "type": "text" },
      { "name": "defendantAddress", "label": "Адрес ответчика", "placehol": "Адрес ответчика", "type": "text" },
      { "name": "marriageDate", "label": "Дата вступления в брак", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "courtDecisionDistrict", "label": "Решение суда района", "placehol": "Название района", "type": "text" },
      { "name": "divorceDate", "label": "Дата расторжения брака", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "zagcDistrict", "label": "Район регистрация расторжения брака в отделе ЗАГС", "placehol": "Название района", "type": "text" },
      { "name": "zagcDivorceDate", "label": "Дата регистрации расторжения брака", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "alimonyAmount", "label": "Размер алиментов", "placehol": "Сумма алиментов", "type": "text" },
      { "name": "defendantBirthDate", "label": "Дата рождения ответчика", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "divorceCertificateNumber", "label": "Копия свидетельства о расторжении брака №", "placehol": "Номер свидетельства", "type": "text" },
      { "name": "divorceCertificateDate", "label": "Дата выдачи свидетельства о расторжении брака", "placehol": "mm/dd/yyyy", "type": "date" }
    ]
  },  
 


  // {
  //   id: "paternity_alimony",
  //   title: "Исковое заявление ",
  //   description: "Об установлении отцовства и взыскании алиментов",
  //   image: formImg,
  //   fields: [
  //     { name: "courtName", label: "Название суда", type: "text" },
  //     { name: "claimantName", label: "Истец (ФИО)", type: "text" },
  //     { name: "claimantAddress", label: "Адрес истца", type: "text" },
  //     { name: "defendantName", label: "Ответчик (ФИО)", type: "text" },
  //     { name: "defendantAddress", label: "Адрес ответчика", type: "text" },
  //     { name: "startDate", label: "Дата начала отношений", type: "date" },
  //     { name: "endDate", label: "Дата окончания отношений", type: "date" },
  //     // { name: "childName", label: "Имя ребенка", type: "text" },
  //     // { name: "childBirthDate", label: "Дата рождения ребенка", type: "date" },
  //     // { name: "childCertificateNumber", label: "Номер свидетельства о рождении", type: "text" },
  //     { name: "childCertificateDate", label: "Дата выдачи свидетельства о рождении", type: "date" },
  //     { name: "defendantBirthDate", label: "Дата рождения ответчика", type: "date" },
  //     { name: "defendantBirthPlace", label: "Место рождения ответчика", type: "text" },
  //     // { name: "cohabitationDuration", label: "Совместное проживание (в годах)", type: "number" }, // Новое поле
  //   ],
  // },


  {
    id: "paternity_alimony",
    title: "Исковое заявление",
    description: "О вынесении судебного приказа о взыскании алиментов",
    image: formImg,
    fields: [
      { name: "courtName", label: "Наименование суда", type: "text" },
  
      { name: "claimantName", label: "Ф. И. О. взыскателя", type: "text" },
      { name: "claimantAddress", label: "Адрес взыскателя", type: "text" },
      { name: "claimantPhone", label: "Телефон взыскателя", type: "text" },
      { name: "claimantEmail", label: "Адрес электронной почты взыскателя", type: "email" },
  
      { name: "defendantName", label: "Ф. И. О. должника", type: "text" },
      { name: "defendantBirthDate", label: "Дата рождения должника", type: "date" },
      { name: "defendantBirthPlace", label: "Место рождения должника", type: "text" },
      { name: "defendantAddress", label: "Адрес должника", type: "text" },
      { name: "defendantPhone", label: "Телефон должника", type: "text" },
      { name: "defendantEmail", label: "Адрес электронной почты должника", type: "email" },
      { name: "defendantWorkplace", label: "Место работы должника", type: "text" },
  
      { name: "marriageStartDate", label: "Дата вступления в брак", type: "date" },
      { name: "marriageEndDate", label: "Дата расторжения брака", type: "date" },
  
      { name: "separationDate", label: "Дата раздельного проживания", type: "date" },
   
      { name: "divorceCertificateNumber",   label: "Копия свидетельства о расторжении брака №",     placeholder: "Номер свидетельства",     type: "text"  },
      { name: "divorceCertificateDate", label: "Дата свидетельства о расторжении брака",   placeholder: "Дата",   type: "date"     },
      { name: "birthCertificatesNumber",         label: "Копии свидетельств о рождении детей №",         placeholder: "Номера свидетельств",   type: "text"  },
      { name: "birthCertificatesDate",  label: "Дата свидетельств о рождении",   placeholder: "Дата",    type: "date"   },
      
      { name: "applicationDate", label: "Дата подачи заявления", type: "date" },
    ],
  },
  






  {
    id: "paternity",
    title: "Исковое заявление ",
    description: "Об установлении отцовства и взыскании алиментов",
    image: formImg,
    fields: [
      { name: "courtName", label: "Название суда", type: "text" },
      { name: "claimantName", label: "Истец (ФИО)", type: "text" },
      { name: "claimantAddress", label: "Адрес истца", type: "text" },
      { name: "defendantName", label: "Ответчик (ФИО)", type: "text" },
      { name: "defendantAddress", label: "Адрес ответчика", type: "text" },
      // { name: "startDate", label: "Дата начала отношений", type: "date" },
      // { name: "endDate", label: "Дата окончания отношений", type: "date" },
      // { name: "childBirthDate", label: "Дата рождения ребенка", type: "date" },
      // { name: "defendantBirthDate", label: "Дата рождения ответчика", type: "date" },
      // { name: "defendantBirthPlace", label: "Место рождения ответчика", type: "text" },
      // { name: "childName", label: "ФИО ребенка", type: "text" },
      { name: "cohabitationStartDate", label: "Дата начала совместного проживания", type: "date" },
      { name: "cohabitationEndDate", label: "Дата окончания совместного проживания", type: "date" },
      // { name: "childGender", label: "Пол ребенка", type: "text" },
      { name: "evidence", label: "Доказательства", type: "textarea" } // Одно поле для доказательств
    ],
  }
  ];
  
