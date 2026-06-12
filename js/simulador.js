function simular(){

const cultura =
document.getElementById("cultura").value;

const temp =
Number(
document.getElementById("temperatura").value
);

const chuva =
Number(
document.getElementById("chuva").value
);

let resposta = "";

if(cultura==="soja"){

if(temp>35){

resposta =
"⚠ Temperatura elevada para soja.";

}else{

resposta =
"✅ Boas condições para soja.";
}

}

if(cultura==="milho"){

if(chuva<20){

resposta =
"⚠ Pouca chuva para milho.";

}else{

resposta =
"✅ Chuva adequada para milho.";
}

}

if(cultura==="cafe"){

if(temp>32){

resposta =
"⚠ Risco de estresse térmico.";

}else{

resposta =
"✅ Clima favorável para café.";
}

}

document.getElementById("resultado")
.innerHTML =
`<h2>${resposta}</h2>`;
}