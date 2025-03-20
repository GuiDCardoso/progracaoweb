// Função para realizar as operações de cálculo
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Verifica se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos!';
        return;
    }

    let result;

    // Realiza a operação de acordo com o tipo de operação
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').textContent = 'Não é possível dividir por zero';
                return;
            }
            result = num1 / num2;
            break;
    }

    // Exibe o resultado
    document.getElementById('result').textContent = `Resultado: ${result}`;
}

// Função para transformar o texto para maiúsculas ou minúsculas
function transformText(type) {
    const text = document.getElementById('textinput').value;  // Corrigido: ID do campo de texto
    let result;

    // Verifica se o campo de texto está vazio
    if (text.trim() === '') {
        document.getElementById('textResult').textContent = 'Por favor, digite algum texto!';
        return;
    }

    // Converte o texto conforme a operação solicitada
    if (type === 'upper') {
        result = text.toUpperCase();
    } else if (type === 'lower') {
        result = text.toLowerCase();
    }

    // Exibe o resultado
    document.getElementById('textResult').textContent = `Resultado: ${result}`;
}
