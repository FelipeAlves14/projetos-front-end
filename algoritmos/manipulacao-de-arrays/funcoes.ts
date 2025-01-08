// 1. Calcular o quadrado de cada elemento do array
function quadradoForLoop(array: number[]): number[] {
    for(let i = 0; i < array.length; i++) array[i] = Math.pow(array[i], 2);
    return array;
}

function quadradoForEach(array: number[]): number[] {
    array.forEach((element, index) => array[index] = Math.pow(element, 2));
    return array;
}


// 2. Concatenar o array com " "
function concatenarArray(array: string[]): string {
    return array.join(" ");
}


// 3. Ordenar array de forma crescente
function ordenarArray(array: any[]): any[] {
    return array.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0);
}


// 4. Pegar os dois primeiros elementos do array
function pegarDoisPrimeiros(array: any[]): any[] | string {
    if(array.length < 2) return "Array contém menos de 2 elementos: " + (array.length === 1 ? "Apenas o valor -> " + array : "Está vazio");
    return array.slice(0, 2);
}


// 5. Elementos pares do array
function extrairPares(array: number[]): number[] {
    return array.filter(element => element % 2 === 0);
}

module.exports = { quadradoForLoop, quadradoForEach, concatenarArray, ordenarArray, pegarDoisPrimeiros, extrairPares };