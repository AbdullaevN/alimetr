import formImg from "../../assets/form.png"; // Импортируем изображение
 
export const formsData = [
  {
    id: "alimony_divorce",
    title: "Исковое заявление",
    // description: t("forms.alimony_divorce.description"),
     image: "formImg",
    fields: [
      { name: "courtName", label: "В ______ -ский  районный суд:(по месту проживания,прописки)", type: "text", placeholder: "Аламудунский" },
      { name: "claimantName", label: "Истец (ФИО):", type: "text", placeholder: "Иванов Иван Иванович" },
      { name: "claimantAddress", label: "Адрес истца:", type: "text", placeholder: "" },
      { name: "defendantName", label: "Ответчик (ФИО):", type: "text", placeholder: "Петров Пётр Петрович" },
      { name: "defendantAddress", label: "Адрес ответчика:", type: "text", placeholder: "" },
      { name: "marriageDate", label: "Дата вступления в брак:", type: "date", placeholder: "01.01.2001" },
      { name: "zagcDistrict", label: "Брак зарегистрирован в отделе ЗАГС _________-ского района", type: "text", placeholder: "Октябрьского" },
      { name: "divorceDate", label: "Совместное проживание до: ", type: "date" },
      { name: "actNumber", label: "Актовая запись №", type: "text" },
      { name: "salaryDocuments", label: "Есть ли документы о заработной плате?", type: "select", options: ["Да", "Нет"] }   
    ]
  },
  
  



  {
    id: "alimony_income_share",
    title: "Исковое заявление ",
    description: "о взыскании алиментов в долях к заработку",
    description1:" Этот иск подаётся, если один из родителей не платит алименты на детей, и истец хочет, чтобы алименты взыскивались в долях от дохода (например, 1/4, 1/3). Сумма алиментов будет зависеть от доходов ответчика и может изменяться с ростом его заработка.",
    image: formImg,
    fields: [
      { name: "courtName", label: "В ______ -ский  районный суд:(по месту проживания,прописки)", type: "text", placeholder: "Аламудунский" },
      { name: "claimantName", label: "Истец (ФИО):", type: "text", placeholder: "Иванов Иван Иванович" },
      { name: "claimantAddress", label: "Адрес истца:", type: "text", placeholder: "" },
      { name: "defendantName", label: "Ответчик (ФИО):", type: "text", placeholder: "Петров Пётр Петрович" },
      { name: "defendantAddress", label: "Адрес ответчика:", type: "text", placeholder: "" },
      { name: "marriageDate", label: "Дата вступления в брак:", type: "date", placeholder: "01.01.2001" },
      { name: "courtDecisionDistrict", label: "Решением суда _____ -ского района брак расторгнут:", type: "text", placeholder: "Октябрьского" },
      { name: "divorceDate", label: "Дата расторжения брака:", type: "date", placeholder: "02.02.2002" },
      { name: "zagcDistrict", label: "Регистрация расторжения брака в отделе ЗАГС _______ -ского района:", type: "text", placeholder: "Октябрьского" },
      { name: "zagcDivorceDate", label: "Регистрация расторжения брака:", type: "date", placeholder: "03.03.2003" },
      { name: "salaryDocuments", label: "Есть ли документы о заработной плате?", type: "select", options: ["Да", "Нет"] }  // Здесь вы указываете опции
   
    ]
  },  
  {
    id: "alimony",
    title: "Исковое заявление ",
    description: "о взыскании алиментов в твердой денежной сумме",
    description1:"Это заявление подаётся, если истец хочет, чтобы алименты взыскивались в конкретной денежной сумме, а не в доле от доходов, подаётся этот иск.Это может быть полезно, если доход ответчика нестабилен и нужно зафиксировать точную сумму алиментов. ",
     image: "formImg",
    fields: [
      { name: "courtName", label: "В ______ районный суд:(по месту проживания,прописки)", type: "text", placeholder: "Аламудунский" },
      { name: "claimantName", label: "Истец (ФИО):", type: "text", placeholder: "Иванов Иван Иванович" },
      { name: "claimantAddress", label: "Адрес истца:", type: "text", placeholder: "" },
      { name: "defendantName", label: "Ответчик (ФИО):", type: "text", placeholder: "Петров Пётр Петрович" },
      { name: "defendantAddress", label: "Адрес ответчика:", type: "text", placeholder: "" },
      { name: "marriageDate", label: "Дата вступления в брак:", type: "date", placeholder: "01.01.2001" },
      { name: "courtDecisionDistrict", label: "Решением суда _____ района брак расторгнут:", type: "text", placeholder: "октябрьского" },
      { name: "divorceDate", label: "Дата расторжения брака:", type: "date", placeholder: "02.02.2022" },
      { name: "zagcDistrict", label: "Регистрация расторжения брака в отделе ЗАГС _______ района:", type: "text", placeholder: "свердловского" },
      { name: "zagcDivorceDate", label: "Регистрация расторжения брака:", type: "date", placeholder: "03.03.2023" },
      { name: "alimonyAmount", label: "Размер алиментов", type: "number", placeholder: "5000 сом" },
    
      
    ]
  }, 
   {
  id: "alimony1",
    title: "Исковое заявление ",
    // description: "об увеличении размера алиментов",
    // description1:"Это заявление подаётся, если уже существует решение суда о размере алиментов, но обстоятельства изменились (например, увеличились расходы на ребёнка), этот иск подаётся для увеличения размера алиментов.",
    // description2:" Есть следующие основания:",
    // description8:"Ухудшение материального положения или существенное снижение уровня заработной платы;",
    // description3:"Потеря работы по разным причинам;",
    // description4:"Заболевание ребенка, в связи с которым требуются дополнительные средства на лечение и реабилитацию;",
    // description5:"Невозможность работать из-за ухудшения состояния здоровья или получения инвалидности;",
    // description6:"Существенное повышение цен на товары первой необходимости; ",
    // description7:"При желании плательщик может увеличить выплаты на добровольной основе;",
    
     image: "formImg",
    fields: [
      { name: "courtName", label: "В ______ районный суд:(по месту проживания,прописки)", type: "text", placeholder: "Аламудунский" },
      { name: "claimantName", label: "Истец (ФИО):", type: "text", placeholder: "Иванов Иван Иванович" },
      { name: "claimantAddress", label: "Адрес истца:", type: "text", placeholder: "" },
      { name: "defendantName", label: "Ответчик (ФИО):", type: "text", placeholder: "Петров Пётр Петрович" },
      { name: "defendantAddress", label: "Адрес ответчика:", type: "text", placeholder: "" },
      { name: "zagcDistrict", label: "На основании решения  _______ -ского суда :", type: "text", placeholder: "октябрьского" },
      { name: "zagcDivorceDate", label: "От_______ г.:", type: "date", placeholder: "01.01.2001" },
      { name: "alimonyAmount", label: "обязан выплачивать алименты в размере____ сом", type: "number", placeholder: "5000 сом" },
      { name: "zagcDistrict1", label: "В настоящее время обстоятельства изменились, а именно:_____", type: "text", placeholder: "Указать причину" },
      { name: "alimonyAmount1", label: "Увеличить размер алиментов до ____ сом", type: "number", placeholder: "5000" },
      { name: "alimonyAmount2", label: "Взыскать алименты в увеличенном размере с _____ г. ", type: "date", placeholder: "01.02.2026" },
    
    ]
  },  
  {
  id: "alimony2",
    // description: "о вынесении судебного приказа о взыскании алиментов",
    // description1:"Это заявление подаётся, если ответчик согласен с требованиями и не оспаривает алименты, можно подать заявление на судебный приказ. Это упрощённая форма, которая позволяет быстро получить решение без судебных заседаний, если все документы в порядке.",
   
    image: "formImg",
    fields: [
      { name: "courtName", label: "В ______ районный суд:(по месту проживания,прописки)", type: "text", placeholder: "Аламудунский" },
      { name: "claimantName", label: "Взыскатель (ФИО):", type: "text", placeholder: "Иванов Иван Иванович" },
      { name: "claimantAddress", label: "Адрес взыскателя:", type: "text", placeholder: "" },
      { name: "defendantName", label: "Должник (ФИО):", type: "text", placeholder: "Петров Пётр Петрович" },
      { name: "defendantAddress", label: "Адрес должника:", type: "text", placeholder: "" },
      { name: "marriageDate", label: "Дата вступления в брак:", type: "date", placeholder: "01.01.2001" },
      { name: "divorceDate", label: "Дата расторжения брака:", type: "date", placeholder: "02.02.2022" },
      { name: "divorceDate1", label: "Дата начало раздельного проживания:", type: "date", placeholder: "03.03.2023" },
  
     
    
    ]
  },  
 
  ];
  
