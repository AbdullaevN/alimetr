
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

      <p style="text-indent: 15px; margin-bottom: 15px;">С ответчицей(ком) я вступил(а) в брак ${formatDate(formData.marriageDate)} и проживал(а) с ним(ней) совместно до ${formatDate(formData.divorceDate)}. Брак зарегистрирован в отделе ЗАГС ${formData.zagcDistrict} района ${formData.zagzCity}. От данного брака мы имеем ребенка:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
   
    `;
  }
  // <p>Номер свидетельства о рождении: ${formData[`child${i}_certificateNumber`]}</p>
  // <p>Дата выдачи свидетельства: ${formatDate(formData[`child${i}_certificateDate`])}</p>

  documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">Совместная супружеская жизнь с ответчиком не сложилась, так как ${formData.lifeTogetherIssue}. Вследствие указанных причин считаю, что наша дальнейшая совместная жизнь и сохранение семьи невозможны, поэтому предоставление времени для примирения считаю нецелесообразным.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;" >Брачные отношения между мной и ответчиком прекращены с ${formatDate(formData.divorceDate)}, с этого момента ответчик проживает отдельно и общее хозяйство нами не ведется. Спора о разделе имущества, являющегося нашей совместной собственностью, нет. По вопросу о содержании и воспитании детей спора нет, дети будут проживать со мной. Дети находятся полностью на моем иждивении, поскольку ответчик никакой материальной помощи на их содержание не оказывает.</p>

      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
      <p style="text-indent: 15px; margin-bottom: 15px;">1. Расторгнуть брак между мной и ответчицей(ком) ${formData.defendantName}, зарегистрированный ${formatDate(formData.marriageDate)} отделом ЗАГС ${formData.zagcDistrict} района, актовая запись № ${formData.actNumber}.</p>
      <p style="text-indent: 15px; margin-bottom: 15px;">2. Взыскать с ответчика(цы) ${formData.defendantName}, ${formatDate(formData.defendantBirthDate)}, в мою пользу алименты на содержание ребенка:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p>${formData[`child${i}_name`]} - ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
     
    `;
  }
   // <p>Номер свидетельства о рождении: ${formData[`child${i}_certificateNumber`]}</p>
      // <p>Дата выдачи свидетельства: ${formatDate(formData[`child${i}_certificateDate`])}</p>
  let certificateNumbers = "";
  let certificateDates = "";
  
  for (let i = 1; i <= childrenCount; i++) {
    certificateNumbers += `${formData[`child${i}_certificateNumber`]} года рождения, `;
    certificateDates += `${formatDate(formData[`child${i}_certificateDate`])} , `;
  }
  
  // Убираем запятую и пробел в конце строк
  certificateNumbers = certificateNumbers.slice(0, -2);
  certificateDates = certificateDates.replace(/, $/, '');  

  documentContent += `
      <p>в размере одной четвертой части заработка и иных доходов до совершеннолетия ребенка.</p>
      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li>1. Квитанция об уплате государственной пошлины;</li>
        <li>2. Копия искового заявления для ответчика;</li>
        <li>3. Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li>4. Подлинник свидетельства о заключении брака  <span style=""> №${formData.divorceCertificateNumber} от ${formatDate(formData.divorceCertificateDate)} </span> ;</li>
        <li>5. Копия паспорта истца;</li>
        <li>6. Копии свидетельств о рождении детей №${certificateNumbers}  от ${certificateDates};</li>
 
        <li>7. Справка с ЦОН о регистрационном учете ребенка;</li>
        <li>8. Документы о заработке и иных доходах ответчика;</li>
      </ol>

     <div style="display:flex; justify-content: space-between; padding: 20px 1px">
      <p>Истец: ${formData.claimantName}</p>
  <div style="display:flex; flex-direction:column; align-items: start; gap: 5px;">
      <p>Подпись: _________________</p>
      <p style="width: 100%">Дата: ${new Date().toLocaleDateString()}</p>
      </div>
    </div>
  </div>
  `;

  return documentContent;
};



export const generateAlimonyIncomeShareDoc = (formData, childrenCount) => {
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
        <p>о взыскании алиментов (в долях к заработку или иному доходу)</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px;">${formatDate(formData.marriageDate)} я вступила в брак с ${formData.defendantName}. Решением суда ${formData.courtDecisionDistrict} района от ${(formData.divorceDate)} наш брак расторгнут. Регистрация расторжения брака произведена ${formData.zagcDivorceDate} в отделе ЗАГС ${formData.zagcDistrict} района. В настоящее время мы проживаем раздельно.</p>
      <p>От данного брака мы имеем детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `<p>${formData[`child${i}_name`]} ${formData[`child${i}_birthdate`]} года рождения</p>`;
  }


  documentContent += `
      <p style="text-indent: 15px; margin-bottom: 15px;">Дети находятся на моем иждивении, ответчик никакой материальной помощи на их содержание не оказывает. \n  </p> </br>
      <p style="text-indent: 15px; margin-bottom: 15px;">В соответствии с частью 1 статьи 85 Семейного кодекса КР, родители обязаны содержать своих несовершеннолетних детей. Согласно части 2 этой же статьи Семейного кодекса КР, в случае если родители (один из них) не предоставляют содержание своим несовершеннолетним детям, средства на их содержание (алименты) взыскиваются с родителей (одного из них) в судебном порядке на основании иска в суд, поданного от имени ребенка одним из родителей.</p>
      <p>На основании изложенного, в соответствии со статьями 9, 85, 86 Семейного кодекса КР, частью 1 статьи 4, статьями 25, 30, 31, 134, 135 Гражданского процессуального кодекса КР,</p>
      
      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
      <p>Взыскать с ответчика ${formData.defendantName}, ${formatDate(formData.defendantBirthDate)} года рождения, уроженца ${formData.defendantBirthPlace}, в мою пользу алименты на содержание детей:</p>
  `;

  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `<p>${formData[`child${i}_name`]} ${formData[`child${i}_birthdate`]} года рождения</p>`;
  }

    // <p>Номер свидетельства о рождении: ${formData[`child${i}_certificateNumber`]}</p>
      // <p>Дата выдачи свидетельства: ${formatDate(formData[`child${i}_certificateDate`])}</p>
      let certificateNumbers = "";
      let certificateDates = "";
      
      for (let i = 1; i <= childrenCount; i++) {
        certificateNumbers += `${formData[`child${i}_certificateNumber`]}, года рождения    `;
        certificateDates += `${formatDate(formData[`child${i}_certificateDate`])} , `;
      }
      
      // Убираем запятую и пробел в конце строк
      certificateNumbers = certificateNumbers.slice(0, -2);
      certificateDates = certificateDates.replace(/, $/, '');  
    

  documentContent += `
      <p>в размере одной трети заработка и иных доходов до совершеннолетия детей.</p>


      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li>1. Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li>2. Копия искового заявления;</li>
        <li>3. Копия паспорта истца;</li>
        <li>4. Копия свидетельства о расторжении брака №${formData.divorceCertificateNumber} от ${formatDate(formData.divorceCertificateDate)};</li>
        <li>5. Копии свидетельств о рождении детей №${certificateNumbers}  от ${certificateDates};</li>
        <li>6. Документы о заработке и иных доходах ответчика;</li>
        <li>7. Справка с ЦОН о регистрационном учете детей.</li>
      </ol>

     <div style="display:flex; justify-content: space-between; padding: 20px 1px">
      <p>Истец: ${formData.claimantName}</p>
      <div style="display:flex; flex-direction:column">
      <p>Подпись: _________________</p>
      <p style="width:100%">Дата: ${new Date().toLocaleDateString()}</p>
      </div>
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
        <p>о взыскании алиментов (в твердой денежной сумме)</p>
      </div>

      <p>${formatDate(formData.marriageDate)} я вступила в брак с ${formData.defendantName}. Решением суда ${formData.courtDecisionDistrict} района от ${formatDate(formData.divorceDate)} наш брак расторгнут. Регистрация расторжения брака произведена ${formatDate(formData.zagcDivorceDate)} в отделе ЗАГС ${formData.zagcDistrict} района. В настоящее время мы проживаем раздельно.</p>
      <p>От данного брака мы имеем детей:</p>
  `;

  // Add child details
  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p>${formData[`child${i}_name`]} ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }

  documentContent += `
      <p style="text-indent: 15px;">Дети находятся на моем иждивении, ответчик никакой материальной помощи на их содержание не оказывает.</p>
      <p >В соответствии с частью 1 статьи 85 Семейного кодекса КР, родители обязаны содержать своих несовершеннолетних детей. Согласно части 2 этой же статьи Семейного кодекса КР, в случае если родители (один из них) не предоставляют содержание своим несовершеннолетним детям, средства на их содержание (алименты) взыскиваются с родителей (одного из них) в судебном порядке на основании иска в суд, поданного от имени ребенка одним из родителей.</p>
      <p>${formData.defendantName} не работает и имеет нерегулярный, меняющийся заработок, в связи с чем установить его заработок точно невозможно.</p>

      <p style="text-indent: 15px; margin-bottom: 15px;">В соответствии с частью 4 статьи 86 Семейного кодекса КР, отсутствие заработка и (или) фактического дохода не снимает с родителя обязанности по содержанию детей, и он обязан самостоятельно изыскивать средства для уплаты алиментов в установленном размере, исходя из расчетной суммы средней заработной платы данной местности, либо компенсировать движимым или недвижимым имуществом или его частью путем предоставления ребенку или детям в собственность в равных долях.</p>
      <p>На основании изложенного, в соответствии со статьями 9, 85, 86, 87, 88, 122 Семейного кодекса КР, частью 1 статьи 4, статьями 25, 30, 31, 134, 135 Гражданского процессуального кодекса КР,</p>

      <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
      <p>Взыскать с ответчика ${formData.defendantName}, ${formatDate(formData.defendantBirthDate)} года рождения, в мою пользу алименты на содержание детей:</p>
  `;

  // Add child details
  for (let i = 1; i <= childrenCount; i++) {
    documentContent += `
      <p>${formData[`child${i}_name`]} ${formatDate(formData[`child${i}_birthdate`])} года рождения</p>
    `;
  }

  let certificateNumbers = "";
  let certificateDates = "";

  for (let i = 1; i <= childrenCount; i++) {
    certificateNumbers += `${formData[`child${i}_certificateNumber`]}, `;
    certificateDates += `${formatDate(formData[`child${i}_certificateDate`])} , `;
  }

  certificateNumbers = certificateNumbers.slice(0, -2);
  certificateDates = certificateDates.replace(/, $/, '');  

  documentContent += `
      <p>в твердой денежной сумме в размере ${formData.alimonyAmount} сомов до совершеннолетия детей.</p>

      <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
      <ol>
        <li>1. Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li>2. Копия искового заявления;</li>
        <li>3. Копия паспорта истца;</li>
        <li>4. Копия свидетельства о расторжении брака №${formData.divorceCertificateNumber} от ${formatDate(formData.divorceCertificateDate)};</li>
        <li>5. Копии свидетельств о рождении детей №${certificateNumbers}  от ${certificateDates};</li>
        <li>6. Справка с ЦОН о регистрационном учете детей.</li>
      </ol>

      <div style="display:flex; justify-content: space-between; padding: 20px 1px">
        <p>Истец: ${formData.claimantName}</p>
        <div style="display:flex; flex-direction:column">
          <p>Подпись: _________________</p>
          <p style="width: 100%">Дата: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  `;

  return documentContent;
};



// export const generatePaternityAlimonyDoc = (formData, formatDate) => {
//   const formatDateSafe = (date) => formatDate(date) || '_________';
//   const getMonthFromDate = (date) => {
//     if (!date) return '_________';
//     const parts = formatDate(date).split(' ');
//     return parts.length > 1 ? parts[1] : '_________';
//   };

//   const witnessesList = Array.isArray(formData.witnesses) ? formData.witnesses : [];

//   const witnessesContent = witnessesList.length > 0
//     ? witnessesList.map((witness, index) => `${witness.name}${index < witnessesList.length - 1 ? ',' : ''}`).join(' ')
//     : 'свидетели не указаны';

//   return `
//     <div style="margin: 20px 10px; font-family: 'Times New Roman'; font-size: 14pt; line-height: 1.5;">
//       <div style="text-align: right; margin-bottom: 20px;">
//         <p>В ${formData.courtName || '____________________'} районный суд</p>
//         <p>Истец: ${formData.claimantName || '__________________________'}</p>
//         <p>Адрес: ${formData.claimantAddress || '__________________________'}</p>
//         <p>Ответчик: ${formData.defendantName || '_______________________'}</p>
//         <p>Адрес: ${formData.defendantAddress || '__________________________'}</p>
//       </div>

//       <div style="text-align: center; font-weight: bold; margin: 20px 50px;">
//         <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
//         <p>об установлении отцовства и взыскании алиментов</p>
//       </div>

//       <p>С ${formatDateSafe(formData.startDate)} по ${formatDateSafe(formData.endDate)} я состояла в фактических брачных отношениях с ${formData.defendantName || 'Ф.И.О.'}.</p>
      
//       <p>______________ ______ я родила ${formData.childName || '____________________'}.</p>

//       <p>Несмотря на то, что ответчик является отцом ребенка, он отказывается признать себя отцом ребенка и отказывается подать в органы ЗАГС заявление об установлении отцовства.</p>
      
//       <p>В ${getMonthFromDate(formData.endDate)} ______  ${formData.defendantName || 'Ф.И.О. ответчика'} оставил меня и ребенка и перестал оказывать нам материальную помощь. Ребенок находится исключительно на моем иждивении.</p>
      
//       <p>Отцовство ответчика в отношении ${formData.childName || '____________________'} я подтверждаю следующим: почти в течение ${formData.cohabitationDuration || '_________'} лет ${formData.defendantName || 'Ф.И.О. ответчика'} постоянно проживал вместе со мной в моей квартире, и мы вели с ним общее хозяйство. Это могут подтвердить свидетели: ${witnessesContent}.</p>

//       <div style="margin: 20px 0;">
//         <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
//         <p>1. Установить, что ${formData.defendantName || 'Ф.И.О. ответчика'}, ${formatDateSafe(formData.defendantBirthDate)} года рождения., уроженец ${formData.defendantBirthPlace || '___________________________'}, является отцом ${formData.childName || '_________'}.</p>
//         <p>2. Взыскать с ${formData.defendantName || 'Ф.И.О. ответчика'} в мою пользу алименты в размере 1/4 части заработка и иных доходов до совершеннолетия ${formData.childName || '____________________'}.</p>
//       </div>

//       <div style="margin-top: 30px;">
//         <h3 style="font-weight: bold;">Приложения:</h3>
//         <ol style="margin-left: 20px;">
//           <li>Квитанция об оплате государственной пошлины;</li>
//           <li>Доказательство направления другим лицам копии искового заявления (почтовая квитанция);</li>
//           <li>Копия паспорта истца;</li>
//           <li>Копия свидетельства о рождении ребенка;</li>
//           <li>Письма ${formData.defendantName || 'Ф.И.О. ответчика'}, подтверждающие исковые требования;</li>
//           <li>Справка о заработке ${formData.defendantName || 'Ф.И.О. ответчика'};</li>
//           <li>Справка домкома/квартального о проживании ребенка с истцом;</li>
//           <li>Копия искового заявления.</li>
//         </ol>
//       </div>

//         <div style="display:flex; justify-content: space-between; padding: 20px 1px">
//         <p>Истец: ${formData.claimantName}</p>
//         <div style="display:flex; flex-direction:column">
//           <p>Подпись: _________________</p>
//           <p style="width: 100%">Дата: ${new Date().toLocaleDateString()}</p>
//         </div>
//       </div>
//     </div>
//   `;
// };



// export const generatePaternityAlimonyDoc = (formData, formatDate) => {
//   const formatDateSafe = (date) => formatDate(date) || '_________';
//   const getMonthFromDate = (date) => {
//     if (!date) return '_________';
//     const parts = formatDate(date).split(' ');
//     return parts.length > 1 ? parts[1] : '_________';
//   };

//   const witnessesList = Array.isArray(formData.witnesses) ? formData.witnesses : [];

//   const witnessesContent = witnessesList.length > 0
//     ? witnessesList.map((witness, index) => `${witness.name}${index < witnessesList.length - 1 ? ',' : ''}`).join(' ')
//     : 'свидетели не указаны';

//   return `
//     <div style="margin: 20px 10px; font-family: 'Times New Roman'; font-size: 14pt; line-height: 1.5;">
//       <div style="text-align: right; margin-bottom: 20px;">
//         <p>В ${formData.courtName || '____________________'} районный суд</p>
//         <p>Истец: ${formData.claimantName || '__________________________'}</p>
//         <p>Адрес: ${formData.claimantAddress || '__________________________'}</p>
//         <p>Ответчик: ${formData.defendantName || '_______________________'}</p>
//         <p>Адрес: ${formData.defendantAddress || '__________________________'}</p>
//       </div>

//       <div style="text-align: center; font-weight: bold; margin: 20px 50px;">
//         <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
//         <p>об установлении отцовства и взыскании алиментов</p>
//       </div>

//       <p>С ${formatDateSafe(formData.startDate)} по ${formatDateSafe(formData.endDate)} я состояла в фактических брачных отношениях с ${formData.defendantName || 'Ф.И.О.'}.</p>
      
//       <p>${formatDateSafe(formData.childCertificateDate)} я родила ${formData.child1_name || '____________________'}.</p>

//       <p>Несмотря на то, что ответчик является отцом ребенка, он отказывается признать себя отцом ребенка и отказывается подать в органы ЗАГС заявление об установлении отцовства.</p>
      
//       <p>В ${getMonthFromDate(formData.endDate)} ______  ${formData.defendantName || 'Ф.И.О. ответчика'} оставил меня и ребенка и перестал оказывать нам материальную помощь. Ребенок находится исключительно на моем иждивении.</p>
      
//       <p>Отцовство ответчика в отношении ${formData.child1_name || '____________________'} я подтверждаю следующим: почти в течение ${formData.cohabitationDuration || '_________'} лет ${formData.defendantName || 'Ф.И.О. ответчика'} постоянно проживал вместе со мной в моей квартире, и мы вели с ним общее хозяйство. Это могут подтвердить свидетели: ${witnessesContent}.</p>

//       <div style="margin: 20px 0;">
//         <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
//         <p>1. Установить, что ${formData.defendantName || 'Ф.И.О. ответчика'}, ${formatDateSafe(formData.defendantBirthDate)} года рождения, уроженец ${formData.defendantBirthPlace || '___________________________'}, является отцом ${formData.child1_name || '_________'}.</p>
//         <p>2. Взыскать с ${formData.defendantName || 'Ф.И.О. ответчика'} в мою пользу алименты в размере 1/4 части заработка и иных доходов до совершеннолетия ${formData.child1_name || '____________________'}.</p>
//       </div>

//       <div style="margin-top: 30px;">
//         <h3 style="font-weight: bold;">Приложения:</h3>
//         <ol style="margin-left: 20px;">
//           <li>Квитанция об оплате государственной пошлины;</li>
//           <li>Доказательство направления другим лицам копии искового заявления (почтовая квитанция);</li>
//           <li>Копия паспорта истца;</li>
//           <li>Копия свидетельства о рождении ребенка;</li>
//           <li>Письма ${formData.defendantName || 'Ф.И.О. ответчика'}, подтверждающие исковые требования;</li>
//           <li>Справка о заработке ${formData.defendantName || 'Ф.И.О. ответчика'};</li>
//           <li>Справка домкома/квартального о проживании ребенка с истцом;</li>
//           <li>Копия искового заявления.</li>
//         </ol>
//       </div>

//       <div style="display:flex; justify-content: space-between; padding: 20px 1px">
//         <p>Истец: ${formData.claimantName || '__________________________'}</p>
//         <div style="display:flex; flex-direction:column">
//           <p>Подпись: _________________</p>
//           <p style="width: 100%">Дата: ${new Date().toLocaleDateString()}</p>
//         </div>
//       </div>
//     </div>
//   `;
// };



export const generatePaternityAlimonyDoc = (formData, formatDate) => {
  const formatDateSafe = (date) => formatDate(date) || '_________';
  const getMonthFromDate = (date) => {
    if (!date) return formData.separationMonth || '_________';
    const parts = formatDate(date).split(' ');
    return parts.length > 1 ? parts[1] : formData.separationMonth || '_________';
  };

  const witnessesList = Array.isArray(formData.witnesses) ? formData.witnesses : [];
  const witnessesContent = witnessesList.length > 0
    ? witnessesList.map((witness, index) => `${witness.name}${index < witnessesList.length - 1 ? ',' : ''}`).join(' ')
    : 'свидетели не указаны';

  return `
    <div style="margin: 20px 10px; font-family: 'Times New Roman'; font-size: 14pt; line-height: 1.5;">
      <div style="text-align: right; margin-bottom: 20px;">
        <p>В ${formData.courtName || '____________________'} районный суд</p>
        <p>Истец: ${formData.claimantName || '__________________________'}</p>
        <p>Адрес: ${formData.claimantAddress || '__________________________'}</p>
        <p>Ответчик: ${formData.defendantName || '_______________________'}</p>
        <p>Адрес: ${formData.defendantAddress || '__________________________'}</p>
      </div>

      <div style="text-align: center; font-weight: bold; margin: 20px 50px;">
        <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
        <p>об установлении отцовства и взыскании алиментов</p>
      </div>

      <p style="text-indent: 15px; margin-bottom: 15px;">С ${formatDateSafe(formData.startDate)} по ${formatDateSafe(formData.endDate)} я состояла в фактических брачных отношениях с ${formData.defendantName || 'Ф.И.О.'}.</p>
      
      <p>${formatDateSafe(formData.child1_birthdate)} я родила ${formData.child1_name || '____________________'} 
      </p>

      <p style="text-indent: 15px; margin-bottom: 15px;">Несмотря на то, что ответчик является отцом ребенка, он отказывается признать себя отцом ребенка и отказывается подать в органы ЗАГС заявление об установлении отцовства.</p>
      
      <p>В ${getMonthFromDate(formData.endDate)} ${new Date(formData.endDate).getFullYear() || '______'} г. ${formData.defendantName || 'Ф.И.О. ответчика'} оставил меня и ребенка и перестал оказывать нам материальную помощь. Ребенок находится исключительно на моем иждивении.</p>
      
      <p style="text-indent: 15px; margin-bottom: 15px;">Отцовство ответчика в отношении ${formData.child1_name || '____________________'} я подтверждаю следующим: почти в течение ${formData.cohabitationDuration || '_____'} лет ${formData.defendantName || 'Ф.И.О. ответчика'} постоянно проживал вместе со мной в моей квартире, и мы вели с ним общее хозяйство. Это могут подтвердить свидетели: ${witnessesContent}.</p>

      <div style="margin: 20px 0;">
        <h3 style="text-align: center; font-weight: bold;">ПРОШУ:</h3>
        <p>1. Установить, что ${formData.defendantName || 'Ф.И.О. ответчика'}, ${formatDateSafe(formData.defendantBirthDate)} года рождения, уроженец ${formData.defendantBirthPlace || '___________________________'}, является отцом ${formData.child1_name || '_________'}.</p>
        <p>2. Взыскать с ${formData.defendantName || 'Ф.И.О. ответчика'} в мою пользу на содержание ${formData.child1_name || '____________________'}  1/4 части заработка и иных доходов до совершеннолетия ${formData.child1_name || '____________________'}.</p>
      </div>

      <div style="margin-top: 30px;">
        <h3 style="font-weight: bold;">Приложения:</h3>
        <ol style="margin-left: 20px;">
          <li>Квитанция об оплате государственной пошлины;</li>
          <li>Доказательство направления другим лицам копии искового заявления;</li>
          <li>Копия паспорта истца;</li>
          <li>Копия свидетельства о рождении ребенка (№${formData.childCertificateNumber || '_____'});</li>
          <li>Письма ответчика, подтверждающие исковые требования;</li>
          <li>Справка о заработке ответчика;</li>
          <li>Справка о проживании ребенка с истцом;</li>
          <li>Копия искового заявления.</li>
        </ol>
      </div>

      <div style="display:flex; justify-content: space-between; margin-top: 50px;">
        <p>Истец: ${formData.claimantName || '__________________________'}</p>
        <div style="display:flex; flex-direction:column; align-items: flex-end;">
          <p>Подпись: _________________</p>
          <p>Дата: "${new Date().getDate()}" ${new Date().toLocaleString('ru', { month: 'long' })} ${new Date().getFullYear()} г.</p>
        </div>
      </div>
    </div>
  `;
};





export const generatePaternityDoc = (formData) => {
  const formatDate = (date) => {
    if (!date) return '__________________ _____ ';
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')} ${d.toLocaleString('ru-RU', { month: 'long' })} ${d.getFullYear()}`;
  };

  const getFieldValue = (value, placeholder = '____________________') => value || placeholder;

  // Доказательства (с фильтрацией пустых значений)
  const evidence = [formData.evidence1, formData.evidence2, formData.evidence3, formData.additionalEvidence]
    .filter(Boolean)
    .join(', ') || '____________________';

  return `
    <div style="margin: 20px 10px; font-family: 'Times New Roman'; line-height: 1.5;">
      <div style="text-align: right;">
        <p>В ${getFieldValue(formData.courtName)} районный суд</p>
        <p><strong>Истец:</strong> ${getFieldValue(formData.claimantName)} (Ф.И.О. полностью)</p>
        <p>Адрес: ${getFieldValue(formData.claimantAddress)} (адрес полностью)</p>
        <p><strong>Ответчик:</strong> ${getFieldValue(formData.defendantName)} (Ф.И.О. полностью)</p>
        <p>Адрес: ${getFieldValue(formData.defendantAddress)} (адрес полностью)</p>
      </div>

      <div style="text-align: center; font-weight: bold; margin-top: 20px;">
        <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
        <p>об установлении отцовства и взыскании алиментов</p>
      </div>

      <p style="margin-top: 20px;">
        С ответчиком ${getFieldValue(formData.defendantName)} (Ф.И.О. полностью) я вела семейную жизнь без 
        заключения брака с ${formatDate(formData.startDate)} по ${formatDate(formData.endDate)}
      </p>
      <p>
        ${formatDate(formData.childBirthDate)} я родила ${getFieldValue(formData.childGender, 'сына (дочь)')} ${getFieldValue(formData.childName)} (Ф.И.О. ребенка).
      </p>
      <p>
        Ответчик является его (ее) отцом, однако отказался подать в органы ЗАГС заявление об 
        установлении отцовства и не оказывает мне материальную помощь в содержании ребенка.
      </p>
      <p>
        Отцовство ответчика в отношении ${getFieldValue(formData.childGender, 'сына (дочери)')} ${getFieldValue(formData.childName)} 
        подтверждается следующими доказательствами: ${evidence}.
      </p>
    </div>
  `;
};






















// import { saveAs } from "file-saver";
// import { Document, Packer, Paragraph, TextRun } from "docx";

// export const generateDocument = (form, formData) => {
//   const doc = new Document({
//     sections: [
//       {
//         properties: {},
//         children: [
//           new Paragraph({
//             children: [new TextRun({ text: form.title, bold: true, size: 28 })],
//           }),
//           ...form.fields.map((field) =>
//             new Paragraph(`${field.label}: ${formData[field.name] || "Не указано"}`)
//           ),
//         ],
//       },
//     ],
//   });

//   Packer.toBlob(doc).then((blob) => {
//     saveAs(blob, `${form.id}.docx`);
//   });
// };
 