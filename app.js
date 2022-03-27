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
  			main.appendChild(añadir)
  		}  		
  	}

  		
}
extraerDatos();
extraerDatos();

const favs = document.querySelector('.menuFavoritos');
let count = 2;
let wait = (num) => {

	let elemento = setTimeout(function (){
			let añadir = document.querySelectorAll(`.btn${num}`);
			let tarjeta = document.querySelector(`.tarjeta${num}`);

			for (var i = 0; i < count; i++) {
				
			añadir[i].addEventListener('click', () => {
				let text = tarjeta.innerHTML;
				favs.style.display = 'grid';
				let copiaTarjeta = document.createElement('div');
				copiaTarjeta.setAttribute('class', `nuevaTarjeta${num}`);
				copiaTarjeta.innerHTML = text;

				let remover = document.createElement('button')
  				remover.setAttribute('class', `remove${num}`);
  				remover.innerHTML = 'Quitar de favoritos'

				favs.appendChild(copiaTarjeta)
				favs.appendChild(remover)
	
				let remove = document.querySelector(`.remove${num}`);

				remove.addEventListener('click', () => {
					favs.removeChild(copiaTarjeta)
					favs.removeChild(remover)
					if (favs.childNodes.length == 1) {
						favs.style.display = 'none';
					}
				});
			});
		
		}
	},2000);
}

let activate = () => {

	wait('0');
	wait('1');
	wait('2');
	wait('3');
	wait('4');
	wait('5');
	wait('6');
	wait('7');
	wait('8');
	wait('9');	
}
activate()

const interseccion = document.querySelector('.inter');

const nuevoScroll = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
			extraerDatos();
			count++;
			activate();
		}
    }
    
const observador = new IntersectionObserver(nuevoScroll);
    
observador.observe(interseccion);
