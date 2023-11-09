function tocaSomRisada(){
    document.querySelector(idElementAudio).play()
}
document.querySelector(".tecla_risada").oncloick=tocaSomRisada;

let lista= document.querySelectorAll(".tecla");
let contador=0;
while(contador< lista.leght){
    const efeito = lista[contador].classlist[1];
    const idAudio = "#som_"+efeito;
    lista[contador].onclick= function(){
        tocaSom(idAudio);
    }
    contador++;
}