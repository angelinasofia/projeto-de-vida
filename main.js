const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


for (let i = 0; i < botoes.length; i++) {


    botoes[i].onclick = function () {


        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }


        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
};


const contadores = document.querySelectorAll(".contador");
//Define os objetivos de tempo para os contadores
const tempoObjetivo1 = new Date("2026-11-05T14:00:00");
const tempoObjetivo2 = new Date("2023-11-05T14:00:00");
const tempoObjetivo3 = new Date("2026-11-05T14:00:00");
const tempoObjetivo4 = new Date("2026-11-05T14:00:00");


//Armezena as datas em array para facilitar o acesso 
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


//Função que calcula o tempo restante até a data do objetivo 
function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();//Pega o tempo atual
    let tempoFinal = tempoObjetivo - tempoAtual;//Calcula a diferença em milissegundos


    //Converter o tempo restante para dias, horas, minutos e segundos
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);


    //Ajustar os valores para mostrar os restos de cada unidade
    segundos %= 60;
    minutos %= 60;
    horas %= 24;


    //Se o tempo ainda não chegou, exibe a contagem regressiva formatada


    if (tempoFinal > 0){
        return [dias, horas, minutos, segundos];
    } else{
        return [0, 0, 0, 0];
    }
}


//Função que atualiza todos os contadores na tela
function atualizaCronometro(){


    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];


    for (let i = 0; i < contadores.length; i++){
        //contadores[i].textContent = calculaTempo(tempos[i]);
    }
}


//Função que indica a atualização automática dos cronômetros
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}


comecaCronometro();




