

/* Pase de fotos automatico - header */
setInterval(CambiarImg, 2500);

FotoPrincipal = document.getElementById("fotoprincipal");
FotoDerecha = document.getElementById("fotoderecha");
FotoIzquierda = document.getElementById("fotoizquierda");

let Imagenes = [
    '/MiPaginaWeb/Static/carrusel/1.jpg',
    '/MiPaginaWeb/Static/carrusel/2.jpg',
    '/MiPaginaWeb/Static/carrusel/3.jpg'
     
    
] 
console.log(Imagenes.length)
let n1 =0;
let n2 =1;
let n3 =2;
    

function CambiarImg(){
  //  document.getElementById("fotoprincipal").src = Imagenes[2];

    if ( n1 < Imagenes.length && n1 != 2){
        n1++

    }
    else{n1 = 0}

    if ( n2 < Imagenes.length && n2 != 2){
        n2++

    }
    else{n2 = 0}

    if ( n3 < Imagenes.length && n3 != 2){
        n3++

    }
    else{n3 = 0}


  FotoIzquierda.src = Imagenes[n1];
  FotoPrincipal.src= Imagenes[n2];
  FotoDerecha.src= Imagenes[n3];

}

/* Menu desplegable */
const Menu = document.getElementById("menu");
const Nav = document.getElementById("nav");
const BarraNav = document.getElementById("barra_nav");

BarraNav.addEventListener("mouseover",(e)=>{ 
  Nav.classList.add("navegador_mostrar");
  })



 BarraNav.addEventListener("mouseout",()=>{
  Nav.classList.remove("navegador_mostrar");
 })

