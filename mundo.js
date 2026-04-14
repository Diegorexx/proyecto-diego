
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
  console.log("estatus", estatus)

    const traduccion = {
    alive: "Vivo",
    dead: "Muerto"
  };


  fetch(`https://rickandmortyapi.com/api/character/?name=${nombre_personaje}&status=${estatus}`)
    .then(res => res.json())
    .then(personajes => {
      console.log(`total de ${nombre_personaje} que estan ${traduccion[estatus]}:`, personajes.results.length);
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

const formulario = document.getElementById('miFormulario');

formulario.addEventListener("submit", async function (evento) {
  evento.preventDefault();

  const personaje = document.getElementById('nombres_personajes').value;
  const estatus = document.getElementById('estatus').value;
  const mensajeError = document.getElementById('mensajeError');

  mensajeError.innerText = "";

  if (personaje === "" || estatus === "") {
    mensajeError.innerText = "Debes seleccionar un personaje y un estatus.";
    return;
  }

  console.log("Esperando...");

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("Formulario enviado sin recargar");

  rickAlive(personaje, estatus);
});

/*function recurso() {
  console.log("Esta es una prueba post");

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',//etiqueta 
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("Error:", error));
}*/
function recurso() {
  console.log("Esta es una prueba post");
  const resultado = document.getElementById("resultadoAPI");

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Nuevo Post',
      body: 'Este es un post creado desde JS',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(json => {
      resultado.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`;
    });
}

function recurso2() {
  const resultado = document.getElementById("resultadoAPI");

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Post actualizado COMPLETO',
      body: 'Reemplazo total',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(json => {
      resultado.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`;
    });
}

function recurso3() {
  console.log("Esta es una prueba PATCH");

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      
      title: 'holaa',

    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function recursoEliminacion() {
  console.log("Esta es una prueba Delete");

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((response) => {
      console.log("Eliminado:", response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function recursoFiltracion() {
  console.log("Esta es una prueba de filtracion");

  fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function recursoAnidado() {
  console.log("Esta es una prueba de anidado");

  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error('Error:', error);
    });
}