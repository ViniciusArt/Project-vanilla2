let dignum = document.querySelector('#dignum');


document.querySelector('#botaoOK').addEventListener('click', money);
function run(){
    alert('funciona')
    money();
}

async function buscarCotacao() {
    let respostas = await fetch("https://api.frankfurter.dev/v1/latest?from=USD&to=BRL")
    let dados = await respostas.json();
    res.innerText = `${dados.rates.BRL}`
    console.log(dados.rates.BRL)
}

async function money() {
    const moedas = await fetch ('https://api.frankfurter.dev/v1/currencies');
    const moedasBuscadas = await moedas.json();

    for (let moeda of Object.entries(moedasBuscadas)){ //object.entries coloca o objeto como array dentro de outra variavel
        console.log(moeda[0])
    }
}