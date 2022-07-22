let num1,num2
do {
    num1 = parseFloat(prompt("Ingrese su sueldo en $"))
    num2 = parseFloat(prompt("Ingrese cuanto cuesta un USD".replace(/,/, '.')))
    if(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2) ) {
        alert("Ingrese numeros validos")
        break
    }
    if(num1 > 0 || num2 > 0){
        alert(`Podes comprar ${num1 / num2} USD`)
    }

} while(isNaN(num1) || isNaN(num2))

console.log(num1 / num2)
