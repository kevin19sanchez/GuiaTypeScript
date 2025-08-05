"use strict";
class Calculadora {
    btnSumar(a, b) {
        return a + b;
    }
    btnRestar(a, b) {
        return a - b;
    }
    btnMultiplicar(a, b) {
        return a * b;
    }
    btnDividir(a, b) {
        if (b === 0)
            throw new Error("No se puede dividir por cero.");
        return a / b;
    }
    btnPotencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    btnFactorial(n) {
        if (n < 0)
            throw new Error("El factorial no está definido para números negativos.");
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
const calc = new Calculadora();
function operar(operacion) {
    const num1 = Number(document.getElementById("numero1").value);
    const num2 = Number(document.getElementById("numero2").value);
    const result = document.getElementById("resultado");
    let resultado = Number.NaN;
    if (operacion === "factorial") {
        resultado = calc.btnFactorial(num1);
    }
    else {
        if (isNaN(num1) || isNaN(num2)) {
            if (result)
                result.textContent = "Por favor, ingresa ambos números.";
            return;
        }
        switch (operacion) {
            case "sumar":
                resultado = calc.btnSumar(num1, num2);
                break;
            case "restar":
                resultado = calc.btnRestar(num1, num2);
                break;
            case "multiplicar":
                resultado = calc.btnMultiplicar(num1, num2);
                break;
            case "dividir":
                resultado = calc.btnDividir(num1, num2);
                break;
            case "potencia":
                resultado = calc.btnPotencia(num1, num2);
                break;
        }
    }
    if (isNaN(resultado)) {
        if (result)
            result.textContent = "Operación no válida.";
    }
    else {
        if (result)
            result.textContent = resultado.toString();
    }
}
//# sourceMappingURL=ejercicio2.js.map