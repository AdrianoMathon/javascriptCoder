const convertir = (numero1, numero2) => numero1 / numero2

let respuesta

do {
    let num1,num2
    do {
        num1 = parseFloat(prompt("Ingrese su sueldo en $")) // Sueldo en $
        num2 = parseFloat(prompt("Ingrese cuanto cuesta un USD".replace(/,/, '.'))) // Cuanto cuesta un USD
        if(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2) ) {    //Alerta por ingreso de numeros no válidos
            alert("Ingrese numeros validos")
            break
        }
        if(num1 > 0 || num2 > 0){
            alert(`Podes comprar ${num1 / num2} USD`) // Devuelve valor
        }
    
    } while(isNaN(num1) || isNaN(num2) || (num2 === 0))
    
respuesta = prompt("¿Quiere volver a calcular?").toLocaleLowerCase()

} while (respuesta != "no");
    
let resultado = convertir (num1, num2)
console.log(resultado)