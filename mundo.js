
const clickeame=()=>{
   // colorDeTexto();
     document.getElementById('primer_parrafo').style.color = "green";
}

const lineaColor=()=>{
   // colorDeTexto();
     document.getElementById('segundo_parrafo').style.background = "red";
}

document.addEventListener("DOMContentLoaded", function() {
    // Your chart creation code here
    const ctx = document.getElementById('grafica');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A','B','C','D'],
        datasets: [{
        label: 'Ventas',
        data: [10,20,15,27],
        backgroundColor: ['red','blue','green','pink'],
        borderRadius: 10
        
        }]
    }
});
});

function verificarNumero(numero, callback) {
  // Simulamos un proceso asíncrono con setTimeout
  setTimeout(() => {
    if (numero > 6) {
      callback(null, "El número es mayor que 5"); // null = no hay error
    } else {
      callback("El número es menor o igual a 5", null); // error
    }
  }, 1000); // 1 segundo de retraso
}

// Usando la función
verificarNumero(7, 
  function(error, resultado) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }

});
/*function obtenerCaracteres() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(dato => {
      const contenedor = document.getElementById('personajes');

      const personajes = dato.results.slice(0, 4);

      personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <img src="${personaje.image}" alt="${personaje.name}">
          <div class="container">
            <h4>${personaje.name}</h4>
            <p>${personaje.species}</p>
          </div>
        `;

        contenedor.appendChild(card);
      });
    })
    .catch(error => console.error(error));
}

obtenerCaracteres();*/
function getCharacters(){
  fetch('https://rickandmortyapi.com/api/character')
  .then(chunks=>{
  console.log ("Primer promesa"+chunks)
  return chunks.json()})
  .then(personajes=>{
    console.log(personajes) //It had an extra parenthesis and I needed to close the function.
  
    const primeros4 = personajes.results.slice(0, 4);
    
   // console.log(primeros4);

    //const paginas = info.pages;
    console.log(personajes.info.pages);
  })
}
function retainacharacter() {
  let id = Math.floor(Math.random() * 100) + 1;
  console.log(id);

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(caja => {

      let contenedor = document.getElementById("personajes");

      contenedor.innerHTML += `
        <div class="card">
          <img src="${caja.image}" alt="${caja.name}">
          <div class="container">
            <h4>${caja.name}</h4>
            <p>${caja.species}</p>
            <p>${caja.status}</p>
            <p>${caja.created}</p>

          </div>
        </div>
      `;
    });
  }
function rickAlive(nombre_personaje, estatus) {
  console.log("nombre", nombre_personaje)
  console.log("esttaus", estatus)

  fetch(`https://rickandmortyapi.com/api/character/?name=${nombre_personaje}&status=${estatus}`)
    .then(res => res.json())
    .then(personajes => {
      console.log(`total de ${nombre_personaje} que estan ${estatus}:`, personajes.results.length);
    })
    .catch(error => console.error(error));

    }
function ubi(){
    fetch(`https://rickandmortyapi.com/api/location`)
    .then(res => res.json())
    .then(ricks => {
      console.log("total:", ricks)
    })
    .catch(error => console.error(error));


}
