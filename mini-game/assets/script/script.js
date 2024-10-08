const valores = {
    values: {
        tempo: 40,
        pontuacao: 0,
        vidas: 3,
        idBallon: 0,
        combo: 0,
    },
    views: {
        ballonDor: document.querySelector(".ballon-dor"),
        quadrados: document.querySelectorAll(".quadrado"),
        titulo: document.querySelector("#titulo"),
        temporizador: document.querySelector("#temporizador"),
        pontos: document.querySelector("#pontos"),
        vidaTotal: document.querySelector("#vida")
    }
}

function moverBallon(){
    if(valores.values.tempo != 0){
        valores.views.quadrados.forEach((quadrado) => {
            quadrado.classList.remove("ballon-dor")
        })
        do{
            valores.values.idBallon = Math.floor(Math.random() * 9)
        }while(valores.views.ballonDor == valores.views.quadrados[valores.values.idBallon])
        let novoBallonDor = valores.views.quadrados[valores.values.idBallon]
        novoBallonDor.classList.add("ballon-dor")
        valores.views.ballonDor = novoBallonDor
    }
}

function contagemRegressiva(){
    if(valores.values.tempo == 0 || valores.values.vidas == 0){
        valores.views.titulo.textContent = (valores.values.pontuacao >= 30) ? `Parabéns, sua pontuação foi de ${valores.values.pontuacao} pontos, VOCÊ É O NOSSO BOLA DE OURO!` : `Sua pontuação foi de ${valores.values.pontuacao} pontos, que pena... Essa temporada não foi sua.`
        clearInterval(movimento)
        clearInterval(contagem)
        let audio = new Audio("./assets/audios/final.mp3")
        audio.play()
    }
    if(valores.values.combo == 10) valores.views.titulo.textContent = "Você está com TUDO!! Pontuação dobrada"
    else{
        valores.values.tempo--
        valores.views.temporizador.textContent = valores.values.tempo
    }
}

function pontuar(){
    valores.views.quadrados.forEach((quadrado) => {
        quadrado.addEventListener("mousedown", () => {
            if(quadrado == valores.views.ballonDor){
                valores.values.pontuacao = (valores.values.combo >= 10) ? valores.values.pontuacao + 2 : valores.values.pontuacao + 1
                ++valores.values.combo
                let audio = new Audio("./assets/audios/acertou.ogg")
                audio.volume = 0.2
                audio.play()
            }
            else{
                valores.values.combo = 0
                valores.values.pontuacao -= 3
                valores.values.vidas--
                if(valores.values.vidas == 0) contagemRegressiva()
                else valores.views.titulo.textContent = `Tome cuidado, você só tem ${valores.values.vidas} vida agora!`
                let audio = new Audio("./assets/audios/errou.ogg")
                audio.volume = 0.2
                audio.play()
            }
            valores.views.pontos.textContent = valores.values.pontuacao
            valores.views.vidaTotal.textContent = `x${valores.values.vidas}`
        })
    })
}

pontuar()
var movimento = setInterval(moverBallon, 600)
var contagem = setInterval(contagemRegressiva, 1000)