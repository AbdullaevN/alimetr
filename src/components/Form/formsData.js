import formImg from "../../assets/form.png"; // Импортируем изображение
 
export const formsData = [
  {
    "id": "alimony",
    "title": "Исковое заявление ",
    "description": "о расторжении брака и взыскании алиментов",
    "image": "formImg",
    "fields": [
      { "name": "courtName", "label": "В районный суд", "placehol": "Название суда", "type": "text" },
      // { "name": "courtDistrict", "label": "Район суда", "placehol": "Название района", "type": "text" },
      { "name": "claimantName", "label": "Истец (ФИО)", "placehol": "ФИО истца", "type": "text" },
      { "name": "claimantAddress", "label": "Адрес истца", "placehol": "Адрес истца", "type": "text" },
      { "name": "defendantName", "label": "Ответчик (ФИО)", "placehol": "ФИО ответчика", "type": "text" },
      { "name": "defendantAddress", "label": "Адрес ответчика", "placehol": "Адрес ответчика", "type": "text" },
      { "name": "marriageDate", "label": "Дата вступления в брак", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "courtDecisionDistrict", "label": "Решение суда района", "placehol": "Название района", "type": "text" },
      { "name": "divorceDate", "label": "Дата расторжения брака", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "zagcDistrict", "label": "Район регистрация расторжения брака в отделе ЗАГС", "placehol": "Название района", "type": "text" },
      { "name": "zagcDivorceDate", "label": "Дата регистрации расторжения брака", "placehol": "mm/dd/yyyy", "type": "date" },
      // { "name": "children", "label": "Дети", "type": "array", "items": [
      //   { "name": "childName", "label": "ФИО ребенка", "placehol": "ФИО ребенка", "type": "text" },
      //   { "name": "childBirthDate", "label": "Дата рождения ребенка", "placehol": "mm/dd/yyyy", "type": "date" },
      //   { "name": "childCertificateNumber", "label": "Свидетельство о рождении ребенка", "placehol": "Номер свидетельства", "type": "text" },
      //   { "name": "childCertificateDate", "label": "Дата выдачи свидетельства", "placehol": "mm/dd/yyyy", "type": "date" }
      // ]},
      { "name": "alimonyAmount", "label": "Размер алиментов", "placehol": "Сумма алиментов", "type": "text" },
      { "name": "defendantBirthDate", "label": "Дата рождения ответчика", "placehol": "mm/dd/yyyy", "type": "date" },
      { "name": "divorceCertificateNumber", "label": "Копия свидетельства о расторжении брака №", "placehol": "Номер свидетельства", "type": "text" },
      { "name": "divorceCertificateDate", "label": "Дата выдачи свидетельства о расторжении брака", "placehol": "mm/dd/yyyy", "type": "date" }
    ]
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
  
