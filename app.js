document.getElementById("iniciar-sesion").addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});


const aside =  document.getElementById("aside");
document.getElementById("agregar-definicion").addEventListener("click", function() {
    this.style.display = "none";
    aside.style.height = "20px";
});

const likeGato = document.getElementById("like-gato");
const likeGolden = document.getElementById("like-golden");
let contLikeGato = 22;
let contLikeGolden = 45;

document.getElementById("meGustaGato").addEventListener("click", function() {
    alert("Gato Antigrado was liked");
    contLikeGato+=1;
    likeGato.innerText = contLikeGato;
});


document.getElementById("meGustaGolden").addEventListener("click", function() {
    alert("Golden Retriever was liked");
    contLikeGolden+=1;
    likeGolden.innerText = contLikeGolden;
});



