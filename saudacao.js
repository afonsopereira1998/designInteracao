function greetings(){
    var saudacao;
    var tempo = new Date().getHours();
    if (tempo < 7){
        saudacao = "É tarde: bom descanso";
    }
    else if (tempo < 12){
        saudacao = "Bom Dia";
    }
    else if (tempo <= 24){
        saudacao = "Boa Tarde";
    }
    document.getElementById("dia").innerHTML = saudacao;
}