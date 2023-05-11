const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
})

// SLIDER

let imagenes = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
];
document.Imagen.src = imagenes[0];

let sliderDerecha = document.querySelector(".slider-derecha");
let sliderIzquierda = document.querySelector(".slider-izquierda");

sliderDerecha.addEventListener("click", moverDerecha);

let contador = 0;

function moverDerecha(){
    contador++;
    if(contador > imagenes.length - 1)
    {
        contador = 0;
    }
    document.Imagen.src = imagenes[contador];
}
let intervalo = setInterval(moverDerecha, 2000);
sliderDerecha.addEventListener("click", function(){
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha, 2000);
});

function moverIzquierda(){
    contador--;
    if(contador < 0){
        contador = imagenes.length -1;
    }
    document.Imagen.src = imagenes[contador];
}
sliderIzquierda.addEventListener("click", function(){
    clearInterval(intervalo);
    moverIzquierda();
    intervalo = setInterval(moverIzquierda, 2000);

})

// observador

const imagen1 = document.getElementById('logo');
const imagen2 = document.querySelectorAll('#img-mc');

const cargarImagen = (entradas, observador) => {
    // console.log(entradas)
    // console.log(observador)

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    })
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '500px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(imagen1);
for(let image of imagen2){
    observador.observe(image);
    }
observador.observe(imagen2);