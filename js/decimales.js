/**
 * Lógica del convertidor de sistemas numéricos
 */

const boton = document.getElementById("calcular");
const inputNumero = document.getElementById("numero");
const selectUnidad = document.getElementById("unidad");
const resultado = document.getElementById("resultado");

const convertir = (numero, valorSeleccionado) => {
    // Lógica: Convertir a BINARIO (De decimal a binario)
    if (valorSeleccionado === "B") {
        const numeroDecimal = parseInt(numero);
        if (isNaN(numeroDecimal)) return "Error: Introduce un número válido";
        return numeroDecimal.toString(2);
    } 
    
    // Lógica: Convertir a DECIMAL (De binario a decimal)
    else if (valorSeleccionado === "D") {
        // Validación: solo permite 0 y 1
        if (!/^[01]+$/.test(numero)) {
            return "Error: ¡Los binarios solo usan 0 y 1!";
        }
        return parseInt(numero, 2);
    }
};

boton.addEventListener("click", () => {
    const valor = inputNumero.value.trim(); // .trim() quita espacios accidentales
    const unidad = selectUnidad.value; 
    
    if (valor === "") {
        resultado.textContent = "Por favor, introduce un número.";
        return;
    }

    const res = convertir(valor, unidad);
    resultado.textContent = `Resultado: ${res}`;
    
    // Opcional: Limpiamos el input después de calcular para facilitar la siguiente entrada
    inputNumero.value = "";
});
