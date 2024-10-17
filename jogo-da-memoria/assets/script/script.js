const cartas = ["🍕", "🍥", "🥨", "🌮", "🍍", "🍗", "🥟", "🍭", "🍕", "🍥", "🥨", 
"🌮", "🍍", "🍗", "🥟", "🍭", "🍟", "🍟", "🌭", "🌭", "🥞", "🥞", "🍪", "🍪"]
cartas.sort(() => Math.random() - 0.5)
let cartasViradas = []
let cartasCorretas = 0
const meioDoJogo = document.querySelector(".cartas")
for(let i = 0; i < cartas.length; i++){
    let carta = document.createElement("div")
    carta.innerHTML = cartas[i]
    carta.className = "carta"
    carta.onclick = virarCarta
    meioDoJogo.appendChild(carta)
}

function virarCarta(){
    cartasViradas.push(this)
    this.classList.add("virada")
    if(cartasViradas.length === 2){
        if(cartasViradas[0].innerHTML === cartasViradas[1].innerHTML){
            cartasCorretas += 2
            cartasViradas[0].onclick = null
            cartasViradas[1].onclick = null
            cartasViradas[0].style.backgroundColor = "lightgreen"
            cartasViradas[1].style.backgroundColor = "lightgreen"
            if(cartasCorretas === cartas.length){
                let h1 = document.querySelector("h1")
                h1.textContent = "Você venceu!"
            }
            cartasViradas = []
        }else{
            setTimeout(() => {
                cartasViradas[0].classList.remove("virada")
                cartasViradas[1].classList.remove("virada")
                cartasViradas = []
            }, 500)
        }
    }
}