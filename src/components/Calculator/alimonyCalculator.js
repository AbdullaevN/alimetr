// alimonyCalculator.js
export const calculateAlimony = (region, childrenCount, salary) => {
    let alimonyPercentage = 0;
  
    // Установка процентных ставок в зависимости от региона и количества детей
    if (region === 'Бишкек') {
      if (childrenCount === 1) {
        alimonyPercentage = 0.10; // 10% для одного ребенка
      } else if (childrenCount === 2) {
        alimonyPercentage = 0.33; // 33% для двух детей
      } else if (childrenCount >= 3) {
        alimonyPercentage = 0.40; // 40% для трех и более детей
      }
    }
  
    // Вычисляем размер алиментов
    const alimony = salary * alimonyPercentage;
    return alimony.toFixed(2); // Возвращаем с двумя знаками после запятой
  };
  