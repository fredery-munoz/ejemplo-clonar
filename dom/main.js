const v1 = "veni para aka ole";
const v2 = "por que o si no mejor dicho";
const v3 = "yo no quiero ser spider man si no wolvering";
const v4 = "este no se para que pero bueno";

const batman = (peligro) =>{
    if (peligro == true){
        return `como te decia ${v1} ${v2}`;
    }else{
        return `como te decia ${v3} ${v4}`;
    }
}

// para crear un titulo
const titulo = document.createElement("h2");
titulo.textContent ="hola me llamo batman";
document.body.appendChild(titulo);  //para colocarlo en la pantalla html

// para crear un boton
const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText = "peligro";
boton2.innerText = "no peligro";

document.body.appendChild(boton);
document.body.appendChild(boton2);

// eventos en javascript con botones

boton.addEventListener("click", ()=>{
    peligro = false;
    recordadndo = batman (peligro);
    window.location.href = "clase15.html";
    document.body.innerHTML = `
    <h1>${recordando} </h1>
    <button id = 'boton2'><a href= 'clase15.html'>volver</a></button>
    `;
});