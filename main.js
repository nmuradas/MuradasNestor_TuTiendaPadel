document.addEventListener("DOMContentLoaded", function(){
        const objCompradorStr = JSON.parse(localStorage.getItem("Datos Comprador"));
        navSaludo.innerHTML = `Bienvenid@ ${objCompradorStr.id}`
    })  


function Producto (marca, modelo, precio){
    this.marca  = marca;
    this.modelo  = modelo;
    this.precio = parseFloat(precio);
    this.conIva = function(){ 
        return this.precio * IVA
    }
}

const control = new Producto("NOX", "ML10 PRO CUP", "350");
const ataque = new Producto("ADIDAS", "ADIPOWER ATTACK 2.0", "389");
const hibrida = new Producto("BULLPADEL", "VERTEX 03", "370");
let formasDePago = ["Fiado","Créditos personales con DNI","Pagaré", "Cheque","Tarjeta de crédito", "Transferencia bancaria", "Permutas"]
for (const formas of formasDePago) { 
    if (formas === "Fiado") {
        formasDePago.shift()
    }
}

formasDePago.splice(0,2)
formasDePago.pop()
formasDePago.shift()
formasDePago.push("Efectivo")
formasDePago.unshift("Cryptomonedas")
formasDePago.reverse()
const paymentsFormsObj = {
    ...formasDePago
} 
console.log(paymentsFormsObj)
// Solo para aclarar,pongo en práctica todos estos metodos de arriba en el ARRAY, solo porque me lo pide el desafio. sino no los usaria claramente.
let IVA = 1.21
let continuar = 0
let afirmar = 0
let finalizar = 0
let cierre_nombre = 0
let operacion_final = 0
let res = 0

//----------------------------------------------------------------------------------
const selectElement = document.querySelector('.opcionPaleta');
selectElement.addEventListener('change', (event) => {
    res = `${event.target.value}`;
    console.log(res)
});
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", terminar);

function terminar(e){
    e.preventDefault(e);
console.log(selectElement.attribute)
let compradorForm = document.getElementById("NombreForm")
let edadCompradorForm = document.getElementById("EdadForm")
let emailCompradorForm = document.getElementById("emailComprador")
const objComprador = {id: compradorForm.value, edad: edadCompradorForm.value, email: emailCompradorForm.value}
let comprador = objComprador.id
let edadComprador = objComprador.edad
let emailComprador = objComprador.email
console.log(comprador)
console.log(edadComprador)
const objCompradorJson = JSON.stringify(objComprador);
localStorage.setItem("Datos Comprador", objCompradorJson)
const objCompradorStr = JSON.parse(localStorage.getItem("Datos Comprador"));
console.log(objCompradorStr)

//--------------------------------
objCompradorStr.id ? crearNac() : false
function crearNac(){
navSaludo.innerHTML = `Bienvenid@ ${objCompradorStr.id}`
}
//-----------------------------------------------------

let swalWithBootstrapButtons;

if(comprador != "" && edadComprador != "" && emailComprador != "" && res != 0){
    switch(res){
        
        case "1":

            swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'btn btn-success ms-5',
                cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
                title: 'Operación Exitosa',
                text: "Muchas gracias por elegir TU TIENDA PADEL🎾. ¿Queres recibir en tu correo todas las novedad que tenemos para vos?",
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Me encataria',
                cancelButtonText: 'Prefiero pasar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Gracias por suscribirte a nuestros novedades',
                    'Hasta tu próxima visita',
                    'success'
                )
                } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                    'Has decidido pasar',
                    'Tranquil@, no te enviaremos novedades a tu correo electrónico',
                    'error'
                )
                }
            })

            content.innerHTML = `<div class="card mt-0 ms-0" style="width: 20rem;"> 
            <img src="./assets/img/noxml10procup.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${control.marca} ${control.modelo}</h5>
            <p class="card-text">Muchas gracias por haber utilizado nuestra Web! La siguiente oferta tiene una validez de 5 días habiles, para adquirir su paleta ${control.marca} ${control.modelo}. En el local deberá abonar el valor de $ ${control.conIva()} pesos. El precio incluye IVA.<br> Le informamos las formas de pago habilitadas: ${(formasDePago.join(", "))}. </p>
            <a href="./pages/ubicacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Ubicación TU TIENDA PADEL</a>
            </div>
            </div>`
            break
            case "2":

            swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                    confirmButton: 'btn btn-success ms-5',
                    cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                })
                
                swalWithBootstrapButtons.fire({
                    title: 'Operación Exitosa',
                    text: "Muchas gracias por elegir TU TIENDA PADEL🎾. ¿Queres recibir en tu correo todas las novedad que tenemos para vos?",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Me encataria',
                    cancelButtonText: 'Prefiero pasar',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Gracias por suscribirte a nuestros novedades',
                        'Hasta tu próxima visita',
                        'success'
                    )
                    } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                    ) {
                    swalWithBootstrapButtons.fire(
                        'Has decidido pasar',
                        'Tranquil@, no te enviaremos novedades a tu correo electrónico',
                        'error'
                    )
                    }
                })

            content.innerHTML = `<div class="card mt-0 ms-0" style="width: 20rem;"> 
            <img src="./assets/img/adipower.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${ataque.marca} ${ataque.modelo}</h5>
            <p class="card-text">Muchas gracias por haber utilizado nuestra Web! La siguiente oferta tiene una validez de 5 días habiles, para adquirir su paleta ${ataque.marca} ${ataque.modelo}. En el local deberá abonar el valor de $ ${ataque.conIva()} pesos. El precio incluye IVA.<br> Le informamos las formas de pago habilitadas: ${(formasDePago.join(", "))}. </p>
            <a href="./pages/ubicacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Ubicación TU TIENDA PADEL</a>
            </div>
            </div>`
            break
            case "3":

            swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                    confirmButton: 'btn btn-success ms-5',
                    cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                })
                
                swalWithBootstrapButtons.fire({
                    title: 'Operación Exitosa',
                    text: "Muchas gracias por elegir TU TIENDA PADEL🎾. ¿Queres recibir en tu correo todas las novedad que tenemos para vos?",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Me encataria',
                    cancelButtonText: 'Prefiero pasar',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Gracias por suscribirte a nuestros novedades',
                        'Hasta tu próxima visita',
                        'success'
                    )
                    } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                    ) {
                    swalWithBootstrapButtons.fire(
                        'Has decidido pasar',
                        'Tranquil@, no te enviaremos novedades a tu correo electrónico',
                        'error'
                    )
                    }
                })

            content.innerHTML = `
            <div class="card mt-0 ms-0" style="width: 20rem;"> 
            <img src="./assets/img/vertex.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${hibrida.marca} ${hibrida.modelo}</h5>
            <p class="card-text">Muchas gracias por haber utilizado nuestra Web! La siguiente oferta tiene una validez de 5 días habiles, para adquirir su paleta ${hibrida.marca} ${hibrida.modelo}. En el local deberá abonar el valor de $ ${hibrida.conIva()} pesos. El precio incluye IVA.<br> Le informamos las formas de pago habilitadas: ${(formasDePago.join(", "))}. </p>
            <a href="./pages/ubicacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Ubicación TU TIENDA PADEL</a>
            </div>
            </div>`
            break
        }        
    }else{
        console.log("Hay un campo obligatorio sin completar")
    }
    if (comprador == ""){
        Swal.fire('Por favor ingrese su nombre')
    }else if(emailComprador == ""){
        Swal.fire('Por favor ingrese su email')
    }else if(edadComprador == ""){
        Swal.fire('Por favor ingrese su edad')
    }else if(res == 0){
        Swal.fire('Por favor seleccione el tipo de paleta en el formulario')
    }}

img_ataque.addEventListener("click", ()=>{
    detalles_paletas.setAttribute("src", "./assets/img/ataquetipo.jpg")
}) 

img_control.addEventListener("click", ()=>{
    detalles_paletas.setAttribute("src", "./assets/img/controltipo.jpg")
}) 
img_hibridas.addEventListener("click", ()=>{
    detalles_paletas.setAttribute("src", "./assets/img/hibridatipo.jpg")
}) 


const obtenerDatosJson = ()=>{
    fetch("./aside.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((datos)=>{
        mostrarHTML(datos)
    })
    .catch((error)=>{  
        console.log("Ocurrio un error:" + error)
    })
}

mostrarHTML = (objJson)=>{
    const {marca, modelo, descripcion, precio} = objJson
    aside.innerHTML = `<div class="card mt-0 ms-0" style="width: 20rem;"> 
    <img src="./assets/img/noxbahia.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Nuestra promo semanal ${marca} ${modelo}</h5>
    <p class="card-text">Llevatela esta semana por $${precio * IVA}. El precio incluye IVA.<br>  Te informamos las formas de pago habilitadas: ${(formasDePago.join(", "))}.  <br>${descripcion}.</p>
    <a href="https://www.youtube.com/watch?v=opKU5_1KKys" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Conocé más sobre esta paleta</a>
    </div>
    </div>`
}

const aside = document.getElementById("aside");
document.addEventListener("DOMContentLoaded", obtenerDatosJson) 

