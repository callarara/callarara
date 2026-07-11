
function escolher(nome){

document.getElementById("resultado").innerHTML =
"Você escolheu " + nome + "!";

}

function salvar(){

let nome=document.getElementById("nome").value;

let texto=document.getElementById("mensagem").value;

if(nome=="" || texto=="") return;

let recado=`
<div class="recado">
<h3>${nome}</h3>
<p>${texto}</p>
</div>
`;

document.getElementById("lista").innerHTML+=recado;

document.getElementById("nome").value="";
document.getElementById("mensagem").value="";

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transform="scale(1.15)";
entry.target.style.transition="1s";

}else{

entry.target.style.transform="scale(0.9)";

}

});

});

document.querySelectorAll(".musica").forEach(card=>{

observer.observe(card);

});
