function responder(){

let pergunta =
document.getElementById("pergunta")
.value.toLowerCase();

let resposta = "";

if(pergunta.includes("água") || pergunta.includes("agua")){

resposta =
"Sensores de umidade ajudam a economizar até 30% de água.";

}
else if(pergunta.includes("praga")){

resposta =
"Monitore frequentemente a lavoura e utilize controle integrado.";

}
else if(pergunta.includes("solo")){

resposta =
"A análise do solo ajuda a aumentar a produtividade.";

}
else if(pergunta.includes("drone")){

resposta =
"Drones identificam falhas e monitoram a plantação rapidamente.";

}
else{

resposta =
"Posso responder sobre água, solo, drones e pragas.";
}

document.getElementById("chatbox")
.innerHTML +=
`
<p><b>Você:</b> ${pergunta}</p>
<p><b>Agrinho:</b> ${resposta}</p>
<hr>
`;
}