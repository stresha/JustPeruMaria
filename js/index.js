const items = [] 
const productos = document.getElementById("productos_vigentes");
// const toggleButton = document.getElementById("button-menu");
// const navWrapper = document.getElementById("nav");
const filtro = document.getElementById('filtros') 




document.addEventListener("DOMContentLoaded", (e) => {
    
    
  setTimeout( () => {
    mostrarProductos(productosVigentes);
  }, 100)

});

// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("close");
//   navWrapper.classList.toggle("show");
// });



// navWrapper.addEventListener("click", e => {
//   if (e.target.id === "nav") {
//     navWrapper.classList.remove("show");
//     toggleButton.classList.remove("close");
//   }
// });


function mostrarProductos(productosVigentes) {
  productos.innerHTML = "";
  productosVigentes.map(producto =>  {
      let {img, nombre, description ,description2, description3 } = producto;
      let caja = document.createElement('div')
      caja.className = 'producto '
      caja.innerHTML = `
                      <div class="card ">
                          <div >
                            <span class="card-title">${nombre}</span>
                            <img  class="hola " src=${img}>
                            <p> ${description}</p>
                            <p> ${description2}</p>
                            <p> ${description3}</p>
                             
                           </div>
                      </div> `
      productos.appendChild(caja)
  }
  )}



  

filtro.addEventListener('change',()=>{
    let {value} = filtro ;
    value == 'all' ? mostrarProductos(productosVigentes) :  mostrarProductos(productosVigentes.filter(elemento => elemento.category == filtro.value))
    
})