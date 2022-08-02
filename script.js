class Paquete {
  constructor(destino, hotel, habitacion, noches) {
    this.destino = destino
    this.hotel = hotel
    this.habitacion = habitacion
    this.noches = noches
  }
}
//se crea el array q luego va a ser completado con datos de los imput
// consulto si existe el localStorage, sino un array vacio, creo el local storage recien cuando agrego algo
//se emplea operadorn nullish
const paquetes= JSON.parse(localStorage.getItem(paquetes)) ?? []

//creo las constantes

const formPaquetes = document.getElementById("formPaquetes")
const divPaquetes = document.getElementById("divPaquetes")
const botonPaquetes = document.getElementById("botonPaquetes")



//tomo datos del formulario desde el DOM
formPaquetes.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(e.target)
      let datForm = new FormData(e.target)
      let paquete = new Paquete(datForm.get("destino"), datForm.get("hotel"), datForm.get("habitacion"), datForm.get("noches"))
      paquetes.push(paquete)
      console.log(paquetes)
      //creo mi localStorage
      localStorage.setItem('paquetes', JSON.stringify(paquetes))
      formPaquetes.reset()
// muestro en una card los datos ingresados por el usuario
      divPaquetes.innerHTML = ""
      let miArray = JSON.parse(localStorage.getItem("paquetes"))
      miArray.forEach((paquete, indice) => {

        divPaquetes.innerHTML += `
    <div class="card border-secondary mb-3" id="paquete${indice}" style="max-width: 20rem; margin: 4px">
      <div class="card-header"><h2>${paquete.destino}</h2></div>
      <div class="card-body">
      <p class="card-title ">Hotel: ${paquete.hotel}</p>
      <p class="card-text ">Habitacion: ${paquete.habitacion}</p>
      <p class="card-text ">Noches: ${paquete.noches}</p>
      <button class="btn btn-primary">Eliminar</button>
      
      </div>
    </div>
    `
      })
//funcionalidad para el boton eliminar de la card
      miArray.forEach((paquete, indice) => {
        let botonCard = document.getElementById(`paquete${indice}`).lastElementChild.lastElementChild
        botonCard.addEventListener("click", () => {
          document.getElementById(`paquete${indice}`).remove()
          paquetes.splice(indice, 1)
          localStorage.setItem("paquetes", JSON.stringify(paquetes))
          console.log(`${paquete.destino} Eliminada`)
        })
        

        })
        
      })
      
         
   