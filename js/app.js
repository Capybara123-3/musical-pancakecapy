function calculate(operation) {
    // Отримати значення введених чисел і результату
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var resultElement = document.getElementById('result');

    // Перевірити, чи введені коректні числа
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.innerHTML = "Будь ласка, введіть коректні числа";
        return;
    }

    // Виконати відповідну математичну операцію залежно від обраної опції
    switch (operation) {
        case "add":
            resultElement.innerHTML = "Результат: " + (number1 + number2);
            break;
        case "subtract":
            resultElement.innerHTML = "Результат: " + (number1 - number2);
            break;
        case "multiply":
            resultElement.innerHTML = "Результат: " + (number1 * number2);
            break;
        case "divide":
            // Перевірити, чи дільник не є нулем
            if (number2 === 0) {
                resultElement.innerHTML = "Неможливо ділити на нуль";
            } else {
                resultElement.innerHTML = "Результат: " + (number1 / number2);
            }
            break;
        default:
            resultElement.innerHTML = "Невірна операція";
    }
}