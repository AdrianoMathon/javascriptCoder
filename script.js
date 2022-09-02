/*
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

*/

/*
const productos_definidos = [
    {
    id: '1',
    nombre: 'purificador',
    precio: 2190,
    descripcion: 'purifica el agua'
    },

    {
    id: '2',
    nombre: 'purificador de ducha',
    precio: 1050,
    descripcion: 'purifica al agua'
    },

    {
    id: '3',
    nombre: 'repuestos',
    precio: 1090,
    descripcion: 'repuestos de purificadores'
    }
]


class Producto {
    constructor (id, nombre, precio, descripcion){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
    }
    obtenerInfo(){
        return `ID: ${this.id} | ${this.nombre} $${this.precio}`
    }
    obtenerAviso(){
        return `${this.nombre} >>>> valgo solo $${this.precio}`
    }
}

const carrito = []

const obtenerInfoProductos = (productosArray) => {
    return productosArray.map( (elemento) => elemento.obtenerInfo()  ).join('\n');
}

const agregarAlCarrito = (productos) => {
    const infoProductos = obtenerInfoProductos(productos);
    const id = prompt('Ingrese el ID del producto que desea agregar al carrito:\n' + infoProductos);
    const producto = productos.find((producto) => producto.id === id);
    if (!producto) return;
    carrito.push(producto);
    alert('Producto agregado al carrito');
}

const imprimirCarrito = (carritoDeProductos) => {
    carritoDeProductos.forEach((producto) => {
        console.log(producto.obtenerAviso())
    })
}

const obtenerTotal = (productosArray) => {
    let total = 0
    productosArray.forEach((producto) => {
        total += producto.precio
    })
    return total
}

const productos = productos_definidos.map(producto => new Producto (
    producto.id,
    producto.nombre,
    producto.precio,
    producto.descripcion,

))

agregarAlCarrito(productos)
agregarAlCarrito(productos)
agregarAlCarrito(productos)

imprimirCarrito(carrito)
console.log('El total es $',obtenerTotal(carrito))

*/

/*
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
    alert("Reiniciaste el color")
}
)

const divColor = document.getElementById('divColor');
const inputColor = document.getElementById('inputColor');

inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value;
    console.log(inputColor.value);
}
)
*/
/*
class Tarea {
    constructor(nombre, categoria, descripcion) {
        this.nombre = nombre
        this.categoria = categoria
        this.descripcion = descripcion
        
    }
}

let tareas = []

if(localStorage.getItem('tareas')) { //String si existe / NULL si no existe
    tareas =  JSON.parse(localStorage.getItem('tareas')) //JSON.parse() pasa de JSON a objeto
} else {
    localStorage.setItem('tareas', JSON.stringify(tareas)) //JSON.stringify() pasar de objeto a JSON
}

const form = document.getElementById("idForm")
const botonTareas = document.getElementById("botonTareas")
const divTareas = document.getElementById("divTareas")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    const tarea = new Tarea(datForm.get("nombre"), datForm.get("categoria"), datForm.get("descripcion"))
    
    tareas.push(tarea)

    localStorage.setItem('tareas', JSON.stringify(tareas))

    form.reset()
})

botonTareas.addEventListener('click', () => {
    const tarStorage = JSON.parse(localStorage.getItem('tareas'))

    divTareas.innerHTML = ""

    tarStorage.forEach((tarea, indice) => {
        divTareas.innerHTML += `
            <div class="card bg-light mb-3" id="tarea${indice}" style="max-width: 18rem;margin:3px;">
                <div class="card-header"><h2>${tarea.nombre}<h2></div>
                <div class="card-body">
                    <p class="card-title">${tarea.categoria}</p>
                    <p class="card-text">${tarea.descripcion}</p>
                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        
        `
    })

    tarStorage.forEach((tarea, indice) => {
        const tarjetaTarea = document.getElementById(`tarea${indice}`)

        tarjetaTarea.children[1].children[2].addEventListener('click', () => {
            tarjetaTarea.remove() //DOM
            tareas.splice(indice, 1) //Array
            localStorage.setItem('tareas', JSON.stringify(tareas)) //Local storage
            console.log(`${tarea.nombre} Eliminada`)
        })
    })
})
*/

class Producto {
    constructor(id, nombre, precio, descripcion){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
    }
}

const purificador = new Producto(1, "Filtro Purificador", 2190, "Filtro purificador de 14 litros")
const domoCeramica = new Producto(2, "Domo de cerámica", 490, "Repuesto domo de cerámica")
const cilindro = new Producto(3, "Cilindro multicapas", 590, "Repuesto cilindro multicapas")
const piedrasMinerales = new Producto(4, "Piedras minerales", 490, "Repuesto piedras minerales")
const filtroDucha = new Producto(5, "Filtro para ducha", 1090, "Filtro para ducha de máxima calidad")

const productos = [purificador, domoCeramica, cilindro, piedrasMinerales, filtroDucha]



///////// Variables

const renderProductos = document.querySelector(".renderProductos")
const tablaCarrito = document.querySelector(".tablaCarrito")
const botonesProductos = document.getElementsByClassName("botonesProductos")
const subTotal = document.querySelector(".subtotal")



function renderProd() {

productos.forEach(producto => {
    renderProductos.innerHTML += `
    <div class="card border-primary mb-3" style="max-width: 20rem;margin:4px;">
      <div class="card-header">${producto.nombre}</div>
        <div class="card-body">
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">Precio: $${producto.precio}</p>
            <div class="btn btn-secondary botonesProductos" onclick="añadirAlCarrito(${producto.id})">Agregar al carrito</div>
      </div>
    </div>
    `
})}

renderProd()


///////// Array Carrito

let carrito = []

////////// Añadir al carrito

function añadirAlCarrito(id){ 
    // chequea si el producto estaba agregado

    if(carrito.some((item) => item.id === id)){
        cambiarNumeroDeUnidades("aumentar", id)
    } else {
    const item = productos.find((producto) => producto.id === id)
    carrito.push({
        ...item,
        numeroDeUnidades : 1,
    })
        
}

actualizarCarrito()

}

console.log(carrito)

///////// Actualizar carrito

 function actualizarCarrito(){
    renderCarrito()
    renderSubtotal()
}


///////// Render subtotal

function renderSubtotal() {
    let precioTotal = 0 
    let totalItems = 0

    carrito.forEach((item) => {
    precioTotal += item.precio * item.numeroDeUnidades
    totalItems += item.numeroDeUnidades  
    
})

subTotal.innerHTML = `Subtotal (${totalItems} items): $${precioTotal}`

}



////////// Render carrito

function renderCarrito(){
    tablaCarrito.innerHTML += ""
    carrito.forEach( (item) => {
        tablaCarrito.innerHTML += `
    <div class="container">
		<hr>
		<table class="table">
			<thead>
			  <tr>
				<th scope="col">${item.id}</th>
				<th scope="col">${item.nombre}</th>
                <th class="btn" scope="col" onclick="cambiarNumeroDeUnidades('disminuir', ${item.id})">-</th>
				<th scope="col">${item.numeroDeUnidades}</th>
                <th class="btn" scope="col" onclick="cambiarNumeroDeUnidades('aumentar', ${item.id})">+</th>
				<th scope="col">${item.precio}</th>
                <th class="btn" scope="col" onclick="eliminarItem (${item.id})">Eliminar</th>
			  </tr>
			</thead>
			<tbody id="items"></tbody>
		  </table>
		<div class="row" id="cards"></div>
	</div>
    `
    })

}


///////// Funcion aumentar/disminuir items

function cambiarNumeroDeUnidades(action, id) {
    carrito = carrito.map((item) =>  {
        let numeroDeUnidades = item.numeroDeUnidades

        if(item.id === id) {
            if(action === "disminuir" && numeroDeUnidades > 1){
                numeroDeUnidades--
            } else if(action === "aumentar"){
                numeroDeUnidades++
            }
        }
        return {
            ...item,
            numeroDeUnidades
        }
    })
    actualizarCarrito()
}


///////// Funcion eliminar del carrito

function eliminarItem (id) {
carrito = carrito.filter( (item) => item.id !== id)

actualizarCarrito()
}

///////// Alerta de agregado al carrito

for(let i = 0; i < botonesProductos.length; i++) {
    botonesProductos[i].addEventListener('click', () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 2000
          })
        })
    } 

    