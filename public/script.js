let containerSection01 = document.getElementById("container-section01");
let jugador01; 
let jugador02;

let validacion = document.getElementById("validacion");
let botonJugar = document.getElementById("boton-jugar");

let section01 = document.getElementById("section01");
let section02 = document.getElementById("section02");
let section03 = document.getElementById("section03");
let section04 = document.getElementById("section04");
let section05 = document.getElementById("section05");

let img1de6 = document.getElementById("img1de6");
let img2de6 = document.getElementById("img2de6");
let img3de6 = document.getElementById("img3de6");
let img4de6 = document.getElementById("img4de6");
let img5de6 = document.getElementById("img5de6");
let img6de6 = document.getElementById("img6de6");

let carta1de6 = document.getElementById("carta1de6");
let carta2de6 = document.getElementById("carta2de6");
let carta3de6 = document.getElementById("carta3de6");
let carta4de6 = document.getElementById("carta4de6");
let carta5de6 = document.getElementById("carta5de6");
let carta6de6 = document.getElementById("carta6de6");

let titulo1de6 = document.getElementById("titulo1de6");
let titulo2de6 = document.getElementById("titulo2de6");
let titulo3de6 = document.getElementById("titulo3de6");
let titulo4de6 = document.getElementById("titulo4de6");
let titulo5de6 = document.getElementById("titulo5de6");
let titulo6de6 = document.getElementById("titulo6de6");

let desc1de6 = document.getElementById("desc1de6");
let desc2de6 = document.getElementById("desc2de6");
let desc3de6 = document.getElementById("desc3de6");
let desc4de6 = document.getElementById("desc4de6");
let desc5de6 = document.getElementById("desc5de6");
let desc6de6 = document.getElementById("desc6de6");

let resultados = [];

let close = document.getElementById("close");
let reset = document.getElementById("reset");
let afinidad = document.getElementById("afinidad");

let pic1de6 = document.getElementById("pic1de6");
let pic2de6 = document.getElementById("pic2de6");
let pic3de6 = document.getElementById("pic3de6");
let pic4de6 = document.getElementById("pic4de6");
let pic5de6 = document.getElementById("pic5de6");
let pic6de6 = document.getElementById("pic6de6");

let j01 = document.getElementById("j01");
let j02 = document.getElementById("j02");

let resultadoFinal = document.getElementById("resultadoFinal");

let irInicio = document.getElementById("irInicio");
let guardar = document.getElementById("guardar");

let partidasAnteriores = []; //guarda los *resultados*
let listaDeAnteriores = document.getElementById("listaDeAnteriores"); //es el ul donde se agregan los li con j1 y j2
let volverAVer = document.getElementById("volverAVer"); //es el botoncito que permite volver a ver la partida

let pantalla;


function random(){
    let numero = Math.round(Math.random() * (cartas.length -1)); 
    let cartaTirada = cartas[numero]; 
    resultados.push(cartaTirada);         
    cartas.splice(numero,1);
}

function probarSuerte(){
    for(i=0; i<6; i++){
            random();
    }
    mostrarResultados();
    console.log(resultados);
}

function mostrarResultados(){
    img1de6.setAttribute("src", resultados[0].img);
    img2de6.setAttribute("src", resultados[1].img);
    img3de6.setAttribute("src", resultados[2].img);
    img4de6.setAttribute("src", resultados[3].img);
    img5de6.setAttribute("src", resultados[4].img);
    img6de6.setAttribute("src", resultados[5].img);

    carta1de6.innerHTML = "Carta 1/3 - " + jugador01;
    carta2de6.innerHTML = "Carta 2/3 - " + jugador01;
    carta3de6.innerHTML = "Carta 3/3 - " + jugador01;
    carta4de6.innerHTML = "Carta 1/3 - " + jugador02;
    carta5de6.innerHTML = "Carta 2/3 - " + jugador02;
    carta6de6.innerHTML = "Carta 3/3 - " + jugador02;

    titulo1de6.innerHTML = resultados[0].nombre;
    titulo2de6.innerHTML = resultados[1].nombre;
    titulo3de6.innerHTML = resultados[2].nombre;
    titulo4de6.innerHTML = resultados[3].nombre;
    titulo5de6.innerHTML = resultados[4].nombre;
    titulo6de6.innerHTML = resultados[5].nombre;

    desc1de6.innerHTML = resultados[0].descripcion;
    desc2de6.innerHTML = resultados[1].descripcion;
    desc3de6.innerHTML = resultados[2].descripcion;
    desc4de6.innerHTML = resultados[3].descripcion;
    desc5de6.innerHTML = resultados[4].descripcion;
    desc6de6.innerHTML = resultados[5].descripcion;
}

botonJugar.addEventListener("click", function(){

    jugador01 = document.getElementById("jugador01").value;
    jugador02 = document.getElementById("jugador02").value;

    if (jugador01 != "" && jugador02 != ""){
        section01.style.display= "none";
        section02.style.display= "flex";
        setTimeout(function(){
            probarSuerte();
            section02.style.display= "none";
            section03.style.display= "flex";
            pantalla = "opciones";
        },3000)
    }else {
        validacion.style.display="block";
        validacion.innerHTML = "Completá los campos porfi";
    }
})

close.addEventListener("click", function(){
    section03.style.display= "none";

    if(pantalla == "opciones") {
        section04.style.display= "flex";
        pantalla = "afinidad";
    } else {
        section05.style.display= "flex";
    }
})

reset.addEventListener("click", function(){
    section04.style.display= "none";
    section02.style.display= "flex";
    cartas = cartas.concat(resultados);
    resultados = [];
    setTimeout(function(){
        probarSuerte();
        section02.style.display= "none";
        section03.style.display= "flex"
        pantalla = "opciones";
    },3000)
})

afinidad.addEventListener("click", function(){
    section04.style.display= "none";
    section05.style.display= "flex";
    guardar.style.display= "block";
    j01.innerHTML = jugador01;
    j02.innerHTML = jugador02;
    pic1de6.setAttribute("src", resultados[0].img);
    pic2de6.setAttribute("src", resultados[1].img);
    pic3de6.setAttribute("src", resultados[2].img);
    pic4de6.setAttribute("src", resultados[3].img);
    pic5de6.setAttribute("src", resultados[4].img);
    pic6de6.setAttribute("src", resultados[5].img);

    let n = resultados[0].valor + resultados[1].valor + resultados[2].valor;
    console.log(n);
    let x = resultados[3].valor + resultados[4].valor + resultados[5].valor;
    console.log(x);

    if ((n%2) == (x%2)){
        resultadoFinal.innerHTML = "¡Increible afinidad!"
    }else{
        resultadoFinal.innerHTML = "No hay afinidad"
    }
})

irInicio.addEventListener("click", function(){
    section05.style.display= "none";
    section01.style.display= "block";
    cartas = cartas.concat(resultados);
    resultados = [];
    jugador01 = document.getElementById("jugador01");
    jugador01.value="";
    jugador02 = document.getElementById("jugador02");
    jugador02.value="";
    validacion.style.display = "none";
})

guardar.addEventListener("click", function(){
    let partidaData ={nombrej01: jugador01, nombrej02: jugador02, resultados}

    let indice = partidasAnteriores.length;

    partidasAnteriores.push(partidaData);

    section05.style.display= "none";
    section01.style.display= "block";
    containerSection01.style.display= "flex";
    listaDeAnteriores.style.display= "block";
    cartas = cartas.concat(resultados);
    resultados = [];
    let item = `<li>
                <p>${jugador01} y ${jugador02}</p>
                <svg id="volverAVer" data-indice= ${indice} onclick="mostrarAnterior(event)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                </li>`
    listaDeAnteriores.innerHTML += item;

    jugador01 = document.getElementById("jugador01");
    jugador01.value="";
    jugador02 = document.getElementById("jugador02");
    jugador02.value="";
    validacion.style.display = "none";
})

function mostrarAnterior(e){
    let svg = e.currentTarget;
    let indice = svg.getAttribute("data-indice");

    resultados = partidasAnteriores[indice].resultados;
    jugador01 = partidasAnteriores[indice].nombrej01;
    jugador02 = partidasAnteriores[indice].nombrej02;
  
    section01.style.display= "none";
    section02.style.display= "flex";
    setTimeout(function(){
        section02.style.display= "none";
        section03.style.display= "flex";
        guardar.style.display= "none";
        mostrarResultados();
    },3000)

}


