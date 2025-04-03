import React, { useState } from "react";

const AlimonyCalculator = () => {
  const [region, setRegion] = useState("");
  const [children, setChildren] = useState("");
  const [income, setIncome] = useState("");
  const [result, setResult] = useState("Сумма алиментов составляет: -");
  const [regionError, setRegionError] = useState("");
  const [childrenError, setChildrenError] = useState("");
  const [regionDetail, setRegionDetail] = useState("Регион: -");
  const [childrenDetail, setChildrenDetail] = useState("Количество детей: -");
  const [incomeDetail, setIncomeDetail] = useState("Зарплата алиментоплательщика: -");

  const livingMinimum = {
    "1": 37454, "2": 26960, "3": 28764, "4": 38743, "5": 33011,
    "6": 25554, "7": 30689, "8": 25562
  };

  const handleDigitClick = (digit) => {
    setIncome((prev) => prev + digit);
  };

  const handleClearDisplay = () => {
    setIncome("");
  };

  const handleBackspace = () => {
    setIncome((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    // Сброс ошибок
    setRegionError("");
    setChildrenError("");

    // Проверка на обязательный выбор региона и количества детей
    let valid = true;
    if (!region) {
      setRegionError("Пожалуйста, выберите регион.");
      valid = false;
    }
    if (!children) {
      setChildrenError("Пожалуйста, выберите количество детей.");
      valid = false;
    }

    if (!valid) return;

    let parsedIncome = parseInt(income) || 0;

    // Если зарплата не введена, используем минимальную по региону
    if (parsedIncome === 0) {
      parsedIncome = livingMinimum[region];
    }

    let percentage;
    switch (children) {
      case "1":
        percentage = 0.25;
        break;
      case "2":
        percentage = 0.33;
        break;
      case "3":
        percentage = 0.50;
        break;
      default:
        percentage = 0;
    }

    const alimony = parsedIncome * percentage;
    setResult(`Размер алиментов: ${alimony.toFixed(2)} KGS`);

    setRegionDetail(`Регион: ${document.getElementById("region").selectedOptions[0].text}`);
    setChildrenDetail(`Количество детей: ${document.getElementById("children").selectedOptions[0].text}`);
    setIncomeDetail(`Зарплата алиментоплательщика: ${parsedIncome} сом`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftBlock}>
        <div style={styles.formGroup}>
          <select id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="" disabled>Выберите регион</option>
            <option value="1">Бишкек</option>
            <option value="2">Ош</option>
            <option value="3">Джалал-Абад</option>
            <option value="4">Иссык-Куль</option>
            <option value="5">Нарын</option>
            <option value="6">Баткен</option>
            <option value="7">Талас</option>
            <option value="8">Чуй</option>
          </select>
          <div style={styles.errorMessage}>{regionError}</div>
        </div>

        <div style={styles.formGroup}>
          <select id="children" value={children} onChange={(e) => setChildren(e.target.value)}>
            <option value="" disabled>Выберите количество детей</option>
            <option value="1">1 ребенок</option>
            <option value="2">2 ребенка</option>
            <option value="3">3 и более детей</option>
          </select>
          <div style={styles.errorMessage}>{childrenError}</div>
        </div>

        <div style={styles.formGroup}>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Введите сумму в сомах"
            min="0"
          />
        </div>

        <div style={styles.calculator}>
          <button style={styles.button} onClick={() => handleDigitClick('1')}>1</button>
          <button style={styles.button} onClick={() => handleDigitClick('2')}>2</button>
          <button style={styles.button} onClick={() => handleDigitClick('3')}>3</button>
          <button style={styles.button} onClick={() => handleDigitClick('4')}>4</button>
          <button style={styles.button} onClick={() => handleDigitClick('5')}>5</button>
          <button style={styles.button} onClick={() => handleDigitClick('6')}>6</button>
          <button style={styles.button} onClick={() => handleDigitClick('7')}>7</button>
          <button style={styles.button} onClick={() => handleDigitClick('8')}>8</button>
          <button style={styles.button} onClick={() => handleDigitClick('9')}>9</button>
          <button style={styles.button} onClick={() => handleDigitClick('0')}>0</button>
          <button style={styles.button} onClick={handleClearDisplay}>C</button>
          <button style={styles.button} onClick={handleBackspace}>⌫</button>
        </div>

        <button style={styles.calculateBtn} onClick={handleCalculate}>Рассчитать</button>
      </div>

      <div style={styles.rightBlock}>
        <div style={styles.result}>{result}</div>
        <div style={styles.detail}>{regionDetail}</div>
        <div style={styles.detail}>{childrenDetail}</div>
        <div style={styles.detail}>{incomeDetail}</div>
        <div style={styles.note}>*данная сумма является предположительной, точная сумма выносится судом</div>
      </div>
    </div>
  );
};

// Стили для компонента
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4CAF50', 
  },
  leftBlock: {
    width: '352px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightBlock: {
    width: '710px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formGroup: {
    marginBottom: '24px',
    position: 'relative',
  },
  errorMessage: {
    position: 'absolute',
    top: '-20px',
    left: 0,
    fontSize: '14px',
    color: 'red',
    fontWeight: 'bold',
  },
  calculator: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    marginTop: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '8px',
    backgroundColor: 'white',
  },
  button: {
    padding: '20px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '40px',
    color: '#121212',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    width: '100%',
  },
  calculateBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: 'white',
    border: '2px solid #ccc',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#333',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
  result: {
    fontSize: '36px',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  detail: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  note: {
    fontSize: '14px',
    color: '#888',
    textAlign: 'left',
    marginTop: '20px',
  },
};

export default AlimonyCalculator;
