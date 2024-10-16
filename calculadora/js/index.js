function calcular(n1, n2, operacion) {
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = n1 + n2;
            break;
        case 'resta':
            resultado = n1 - n2;
            break;
        case 'multiplicacion':
            resultado = n1 * n2;
            break;
        case 'division':
            if (numero2 === 0) {
                console.log('No se puede dividir por cero.');
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            console.log('Operacion invalida');
            return;
    }

    console.log(`El resultado es`, resultado);
}

const n1 = (prompt('Ingresa el primer numero:'));
const n2 = (prompt('Ingresa el segundo numero:'));
const operacion = prompt('Ingresa la operación (suma, resta, multiplicacion, division):');

calcular(numero1, numero2, operacion);
