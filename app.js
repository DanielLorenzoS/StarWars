const inicio = document.getElementById('inicio');
const favoritos = document.getElementById('favoritos');
const navInicio = document.querySelector('.navInicio');
const navFavoritos = document.querySelector('.navFavoritos');

navInicio.addEventListener('click', () => {
	inicio.style.display = 'block';
	favoritos.style.display = 'none';
});
navFavoritos.addEventListener('click', () => {
	favoritos.style.display = 'block';
	inicio.style.display = 'none';
});


const URL = 'https://swapi.dev/api/people';
const main = document.getElementById('menuPrincipal');

let extraerDatos = e => {
	fetch(URL)
  		.then(response => response.json())
  		.then(people => extraccion(people))
  		

  	const extraccion= (people) => {
  		for (var i = 0; i <= people.results.length-1; i++) {
  			let name = people.results[i].name;
  			let height = people.results[i].height;
  			let mass = people.results[i].mass;
  			let birth = people.results[i].birth_year;

  			let nuevaTarjeta = document.createElement('div');
  			nuevaTarjeta.setAttribute('class', `tarjeta${i}`);
  			nuevaTarjeta.innerHTML = `${name} <br>
  				  					  ${height} <br> 
  									  ${mass} <br>
  									  ${birth} <br>`;

  			let añadir = document.createElement('button')
  			añadir.setAttribute('class', `btn${i}`);
  			añadir.innerHTML = 'Añadir a favoritos'

  			main.appendChild(nuevaTarjeta)
  			nuevaTarjeta.appendChild(añadir)
  		}  		
  	}

  		
}
extraerDatos();


const interseccion = document.querySelector('.inter');

const nuevoScroll = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
			extraerDatos()

		}
    }
    
const observador = new IntersectionObserver(nuevoScroll);
    
observador.observe(interseccion);


const favs = document.querySelector('.menuFavoritos');

const elemento = () => {
	let añadir = document.querySelector('.btn0');
	let tarjeta = document.querySelector('.tarjeta0');

	añadir.addEventListener('click', () => {
		let clon = tarjeta.cloneNode(true);
		favs.appendChild(clon);
		favs.style.display = 'block';
	});
}
setTimeout(elemento, 2000);



