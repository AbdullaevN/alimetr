
import { formatDate } from './formatDate';




export const generateDivorceAlimonyDoc = (formData, childrenCount, formatDate) => {
  let documentContent = `
    <div style="margin: 20px 10px; font-family: 'Times New Roman';">
      <div style="text-align: right;">
        <p><strong>В ${formData.courtName} районный суд</strong></p>
        <p><strong>Истец:</strong> ${formData.claimantName}</p>
        <p><strong>Адрес:</strong> ${formData.claimantAddress}</p>
        <p><strong>Ответчик:</strong> ${formData.defendantName}</p>
        <p><strong>Адрес:</strong> ${formData.defendantAddress}</p>
      </div>

      <div style="text-align: center; font-weight: bold;">
        <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
        <p>о расторжении брака и взыскании алиментов</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px;">С ответчиком я вступила в брак ${formatDate(formData.marriageDate)} г. 
      и проживала с ним совместно до ${formatDate(formData.divorceDate)} г.. 
      Брак зарегистрирован в отделе ЗАГС ${formData.zagcDistrict} района. От данного брака мы имеем ребенка/детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }

  

  documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">Совместная супружеская жизнь с ответчиком не сложилась, так как не сошлишь характером. 
      Вследствие указанных причин считаю, что наша дальнейшая совместная жизнь и сохранение семьи невозможны, поэтому предоставление времени для 
      примирения считаю нецелесообразным.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;" >Брачные отношения между мной и ответчиком прекращены с ${formatDate(formData.divorceDate)} г., 
      с этого момента ответчик проживает отдельно и общее хозяйство нами не ведется. 
      Спора о разделе имущества, являющегося нашей совместной собственностью, нет. 
      По вопросу о содержании и воспитании ребёнка/детей спора нет, ребёнок/дети будут проживать со мной. 
      Дети находятся полностью на моем иждивении, поскольку ответчик никакой материальной помощи на их содержание не оказывает.</p>

      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
      <p style="text-indent: 15px; margin-bottom: 15px;">1. Расторгнуть брак между мной и ответчиком ${formData.defendantName}, зарегистрированный ${formatDate(formData.marriageDate)} г. отделом ЗАГС ${formData.zagcDistrict} района, актовая запись № ${formData.actNumber}.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">2. Взыскать с ответчика ${formData.defendantName}, в мою пользу алименты на содержание ребенка/детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p>${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }

  // Определяем долю алиментов в зависимости от количества детей
  let alimonyShare = '';
  if (childrenCount === 1) {
    alimonyShare = '1/4';
  } else if (childrenCount === 2) {
    alimonyShare = '1/3';
  } else if (childrenCount >= 3) {
    alimonyShare = '1/2';
  }

  documentContent += `
      <p>в размере ${alimonyShare} части заработка и иных доходов до совершеннолетия ребенка.</p>
      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li> Квитанция об уплате государственной пошлины;</li>
        <li> Копия искового заявления для ответчика;</li>
        <li> Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li> Подлинник свидетельства о заключении брака ;</li>
        <li> Копия паспорта истца;</li>
        <li> Копии свидетельств о рождении детей;</li>
        <li> Справка с ЦОН о регистрационном учете ребенка;</li>
${formData.salaryDocuments === "Да" ? "<li> Документы о заработке и иных доходах ответчика;</li>" : ""}
      </ol>
      <p style="margin-top: 100px;"></p>
     <div>
      <p style="text-align: left;">Истец: ${formData.claimantName}</p>
      <p style="text-align: right;">Подпись: _________________</p>
      <p style="text-align: right; margin-right: 33px;">${new Date().toLocaleDateString()}</p>
 
      
    </div>
  </div>
  `;

  return documentContent;
};











export const generateAlimonyIncomeShareDoc = (formData, childrenCount,formatDate) => {
  let documentContent = `
    <div style="margin: 20px 10px; font-family: 'Times New Roman';">
      <div style="text-align: right;">
        <p><strong>В ${formData.courtName} районный суд</strong></p>
        <p><strong>Истец: ${formData.claimantName}</strong></p>
        <p><strong>Адрес: ${formData.claimantAddress}</strong></p>
        <p><strong>Ответчик: ${formData.defendantName}</strong></p>
        <p><strong>Адрес: ${formData.defendantAddress}</strong></p>
      </div>

      <div style="text-align: center; font-weight: bold;">
        <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
        <p>о взыскании алиментов в долях к заработку или иному доходу</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px; margin-top:25px">${formatDate(formData.marriageDate)} г. я вступила в брак с ответчиком. 
      Решением суда ${formData.courtDecisionDistrict} района от ${formatDate(formData.divorceDate)} г. наш брак расторгнут. 
      Регистрация расторжения брака произведена ${formatDate(formData.zagcDivorceDate)}г. в отделе ЗАГС ${formData.zagcDistrict} района.
       В настоящее время мы проживаем раздельно.</p>
      <p>От данного брака мы имеем ребёнка/детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px; margin-top:15px">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }



  documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">Дети находятся на моем иждивении, ответчик никакой материальной помощи на их содержание не оказывает. \n  </p> </br>
      <p style="text-indent: 15px; margin-bottom: 15px;">В соответствии с частью 1 статьи 85 Семейного кодекса КР, родители обязаны содержать своих несовершеннолетних детей. 
      Согласно части 2 этой же статьи Семейного кодекса КР, в случае если родители (один из них) не предоставляют содержание своим несовершеннолетним детям, 
      средства на их содержание (алименты) взыскиваются с родителей (одного из них) в судебном порядке на основании иска в суд, поданного от имени ребёнка/детей одним из родителей.</p>
      <p>На основании изложенного, в соответствии со статьями 9, 85, 86 Семейного кодекса КР, частью 1 статьи 4, статьями 25, 30, 31, 134, 135 Гражданского процессуального кодекса КР,</p>
      
      <h3 style="text-align: center; font-weight: bold; margin-top:25px">ПРОШУ:</h3>
      <p style="text-indent: 15px; margin-bottom: 15px; margin-top:15px">Взыскать с ответчика ${formData.defendantName}, в мою пользу алименты на содержание ребёнка/детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += ` <p style="text-indent: 15px; margin-bottom: 15px;">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>`;
  }

   
 let alimonyShare = '';
  if (childrenCount === 1) {
    alimonyShare = '1/4';
  } else if (childrenCount === 2) {
    alimonyShare = '1/3';
  } else if (childrenCount >= 3) {
    alimonyShare = '1/2';
  }

  documentContent += `
      <p>в размере ${alimonyShare} заработка и иных доходов до совершеннолетия ребёнка/детей.</p>


      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li> Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li> Копия искового заявления;</li>
        <li> Копия паспорта истца;</li>
        <li> Копия свидетельства о расторжении брака;</li>
        <li> Копии свидетельств о рождении детей;</li>
        <li> Документы о заработке и иных доходах ответчика;</li>
        <li> Справка с ЦОН о регистрационном учете детей.</li>
        ${formData.salaryDocuments === "Да" ? "<li> Документы о заработке и иных доходах ответчика;</li>" : ""}
      </ol>

      <p style="margin-top: 100px;"></p>
     <div>
      <p style="text-align: left;">Истец: ${formData.claimantName}</p>
      <p style="text-align: right;">Подпись: _________________</p>
      <p style="text-align: right; margin-right: 33px;">${new Date().toLocaleDateString()}</p>
 
      
    </div>
  </div>
  `;

  return documentContent;
};













export const generateAlimonyDoc = (formData, childrenCount, formatDate) => {
  let documentContent = `
    <div style="margin: 20px 40px; font-family: 'Times New Roman'; font-size: 14px;">
      <div style="text-align: right;">
        <p><strong>В ${formData.courtName} районный суд</strong></p>
        <p><strong>Истец:</strong> ${formData.claimantName}</p>
        <p><strong>Адрес:</strong> ${formData.claimantAddress}</p>
        <p><strong>Ответчик:</strong> ${formData.defendantName}</p>
        <p><strong>Адрес:</strong> ${formData.defendantAddress}</p>
      </div>

      <div style="text-align: center; font-weight: bold;">
        <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
        <p>о взыскании алиментов в твердой денежной сумме</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px;">${formatDate(formData.marriageDate)} г. я вступила в брак с ответчиком. Решением суда ${formData.courtDecisionDistrict} района от ${formatDate(formData.divorceDate)} г.
      наш брак расторгнут. Регистрация расторжения брака произведена ${formatDate(formData.zagcDivorceDate)} г. в отделе ЗАГС ${formData.zagcDistrict} района. 
      В настоящее время мы проживаем раздельно.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">От данного брака мы имеем ребенка/детей:</p>
  `;

  // Add child details
  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p>${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }
  
  documentContent += `
  <p style="margin-top: 20px;"></p>
      <p style="text-indent: 15px; margin-bottom: 15px;">Дети находятся на моем иждивении, ответчик никакой материальной помощи на их содержание не оказывает.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">В соответствии с частью 1 статьи 85 Семейного кодекса КР, родители обязаны содержать своих несовершеннолетних детей. 
      Согласно части 2 этой же статьи Семейного кодекса КР, в случае если родители (один из них) не предоставляют содержание своим несовершеннолетним детям, 
      средства на их содержание (алименты) взыскиваются с родителей (одного из них) в судебном порядке на основании иска в суд, поданного от имени ребёнка/детей одним из родителей.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">ответчик не работает и имеет нерегулярный, меняющийся заработок, в связи с чем установить его заработок точно невозможно.</p>

      <p style="text-indent: 15px; margin-bottom: 15px;">В соответствии с частью 4 статьи 86 Семейного кодекса КР, отсутствие заработка и (или) фактического дохода не снимает с родителя 
      обязанности по содержанию ребёнка/детей, и он обязан самостоятельно изыскивать средства для уплаты алиментов в установленном размере, исходя из расчетной суммы средней заработной платы 
      данной местности, либо компенсировать движимым или недвижимым имуществом или его частью путем предоставления ребенку/детям в собственность в равных долях.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">На основании изложенного, в соответствии со статьями 9, 85, 86, 87, 88, 122 Семейного кодекса КР, частью 1 статьи 4, статьями 25, 30, 31, 134, 135 Гражданского процессуального
       кодекса КР,</p>

      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
      <p style="text-indent: 15px; margin-bottom: 15px;">Взыскать с ответчика ${formData.defendantName},  в мою пользу алименты на содержание детей:</p>
  `;

  // Add child details
  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }
  

  documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">в твердой денежной сумме в размере ${formData.alimonyAmount} сомов до совершеннолетия детей.</p>

      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li> Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li> Копия искового заявления;</li>
        <li> Копия паспорта истца;</li>
        <li> Копия свидетельства о расторжении брака;</li>
        <li> Копии свидетельств о рождении детей;</li>
        <li> Справка с ЦОН о регистрационном учете детей.</li>
        ${formData.salaryDocuments === "Да" ? "<li> Документы о заработке и иных доходах ответчика;</li>" : ""}
      </ol>

      <p style="margin-top: 100px;"></p>
     <div>
      <p style="text-align: left;">Истец: ${formData.claimantName}</p>
      <p style="text-align: right;">Подпись: _________________</p>
      <p style="text-align: right; margin-right: 33px;">${new Date().toLocaleDateString()}</p>
 
      
    </div>
  </div>
  `;

  return documentContent;
};














export const generate1 = (formData,childrenCount, formatDate) => {
  let documentContent = `
    <div style="margin: 20px 10px; font-family: 'Times New Roman';">
      <div style="text-align: right;">
        <p><strong>В ${formData.courtName} районный суд</strong></p>
        <p><strong>Истец:</strong> ${formData.claimantName}</p>
        <p><strong>Адрес:</strong> ${formData.claimantAddress}</p>
        <p><strong>Ответчик:</strong> ${formData.defendantName}</p>
        <p><strong>Адрес:</strong> ${formData.defendantAddress}</p>
      </div>

      <div style="text-align: center; font-weight: bold;">
        <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
        <p>об увеличении размера алиментов</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px;">На основании решения ${formData.zagcDistrict} суда от ${formatDate(formData.zagcDivorceDate)} г. 
      ответчик обязан выплачивать алименты в размере ${formData.alimonyAmount} сом ежемесячно на содержание несовершеннолетнего ребенка/детей.
Указанный размер алиментов в настоящее время не обеспечивает покрытие необходимых расходов на содержание ребенка, включая питание,
 одежду, медицинское обслуживание, образование и иные нужды. Более того, изменившиеся обстоятельства 
 (социально-экономическая обстановка, состояние здоровья ребенка, материальное положение истца и т.д.) 
 обострили необходимость пересмотра установленного размера алиментов.
</p>

 <p style="text-indent: 15px; margin-bottom: 15px;">А именно: ${formData.zagcDistrict1} </p>


      <p style="text-indent: 15px; margin-bottom: 15px;">В связи с вышеуказанным, текущий размер 
      алиментов не покрывает реальных затрат на содержание ребенка, что нарушает его законные интересы 
      и ограничивает доступ к полноценному питанию, образованию, лечению и другим важным жизненным 
      потребностям.
На основании статьи 91 Семейного кодекса Кыргызской Республики, в случае исключительных обстоятельств 
суд вправе обязать родителей участвовать в дополнительных расходах на ребенка. Кроме того, согласно 
статье 124 Семейного кодекса КР, при изменении материального или семейного положения сторон суд 
вправе изменить установленный размер алиментов.
</p>
      
      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
      <p style="text-indent: 15px; margin-bottom: 15px;">1.Увеличить установленный ранее размер 
      алиментов с ${formData.alimonyAmount} сом до ${formData.alimonyAmount1} сом ежемесячно.

.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">2.Взыскать алименты в увеличенном размере с ${formatDate(formData.alimonyAmount2)} г.
</p>
  

      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li> Копия решения суда об установлении алиментов;</li>
        <li> Документы, подтверждающие изменение материального или семейного положения сторон;</li>
        <li> Документы, подтверждающие увеличившиеся расходы на ребенка;</li>
        <li> Расчет ежемесячных расходов на содержание ребенка;</li>
        <li> Квитанция об отправке копии иска ответчику;</li>
        <li> Иные документы, подтверждающие заявленные обстоятельства;</li>

      </ol>

    <p style="margin-top: 100px;"></p>
     <div>
      <p style="text-align: left;">Истец: ${formData.claimantName}</p>
      <p style="text-align: right;">Подпись: _________________</p>
      <p style="text-align: right; margin-right: 33px;">${new Date().toLocaleDateString()}</p>
 
      
    </div>
  </div>
  `;

  return documentContent;
};



export const generate2 = (formData, childrenCount, formatDate) => {
  let documentContent = `
    <div style="margin: 20px 10px; font-family: 'Times New Roman';">
      <div style="text-align: right;">
        <p><strong>В ${formData.courtName} районный суд</strong></p>
        <p><strong>Взыскатель:</strong> ${formData.claimantName}</p>
        <p><strong>Адрес:</strong> ${formData.claimantAddress}</p>
        <p><strong>Должник:</strong> ${formData.defendantName}</p>
        <p><strong>Адрес:</strong> ${formData.defendantAddress}</p>
      </div>

      <div style="text-align: center; font-weight: bold;">
        <h3>ЗАЯВЛЕНИЕ</h3>
        <p>о вынесении судебного приказа о взыскании алиментов</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px;">С${formatDate(formData.marriageDate)} г. по ${formatDate(formData.divorceDate)} г. я состояла в браке с должником. 
     От данного брака мы имеем ребенка/детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }

  documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">С ${formatDate(formData.divorceDate)} г. я проживаю с должником раздельно, дети находятся на моем иждивении.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;" >Должник добровольно алименты на содержание детей не выплачивает, соглашение об уплате алиментов между нами не заключалось.</p>
         <p style="text-indent: 15px; margin-bottom: 15px;" >На основании изложенного и руководствуясь статьями 85, 86, 111, 112 Семейного кодекса Кыргызской Республики, статьями 247, 248 Гражданского процессуального кодекса Кыргызской Республики,</p>

      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>

       

      <p style="text-indent: 15px; margin-bottom: 15px;">1. Вынести судебный приказ о взыскании с ${formData.defendantName} в мою пользу алиментов на содержание детей:</p>

       `;

       for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }
     


 
  // Определяем долю алиментов в зависимости от количества детей
  let alimonyShare = '';
  if (childrenCount === 1) {
    alimonyShare = '1/4';
  } else if (childrenCount === 2) {
    alimonyShare = '1/3';
  } else if (childrenCount >= 3) {
    alimonyShare = '1/2';
  }

  documentContent += `
      <p>в размере ${alimonyShare} заработка и иного дохода должника.</p>
      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>

        <li> копия паспорта;</li>
        <li> копия свидетельства о расторжении брака;</li>
        <li> Копии свидетельств о рождении детей;</li>
        
      </ol>

     <p style="margin-top: 100px;"></p>
     <div>
      <p style="text-align: left;">Истец: ${formData.claimantName}</p>
      <p style="text-align: right;">Подпись: _________________</p>
      <p style="text-align: right; margin-right: 33px;">${new Date().toLocaleDateString()}</p>
 
      
    </div>
  </div>
  `;

  return documentContent;
};


























 