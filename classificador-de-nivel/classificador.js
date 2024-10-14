const readline = require("readline")
const interface = readline.createInterface({input: process.stdin, output: process.stdout})

function classifica(){
    interface.question("Diga o nome do seu herói ou digite 0 para sair: ", (nome) => {
        if(nome != "0"){
            interface.question("Quanto de XP seu herói tem? ", (xp) => {
                let nivel = ""
                if(xp <= 1000) nivel = "Ferro"
                else if(xp <= 2000) nivel = "Bronze"
                else if(xp <= 3000) nivel = "Prata"
                else if(xp <= 4000) nivel = "Ouro"
                else if(xp <= 5000) nivel = "Platina"
                else if(xp <= 6000) nivel = "Diamante"
                else if(xp <= 7000) nivel = "Ascendente"
                else if(xp <= 8000) nivel = "Imortal"
                else if(xp > 8000) nivel = "Radiante"
                if(xp > 0) console.log(`\nO Herói ${nome} está no ${nivel}\n`)
                else console.log("\nEssa quantidade de XP é inválida, insira um XP maior que 0\n")
                classifica()
            })
        }
        else interface.close()
    })
}

classifica()