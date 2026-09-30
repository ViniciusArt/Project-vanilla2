money();//commit: chamei a função no inicio do codigo para obter as informações da API assim que a pagina carregar
let dignum = document.querySelector('#dignum');
let select1 = document.querySelector('#moeda1');
let select2 = document.querySelector('#moeda2');


document.querySelector('#botaoOK').addEventListener('click', run);
function run(){
    if(dignum.value == '')
        {
            alert('Digite um valor')
        }
        else
            {
                alert('funciona')
            }
        }

async function money() { //pega as moedas que vão para os selects
    const moedas = await fetch ('https://api.frankfurter.dev/v1/currencies');
    const moedasBuscadas = await moedas.json();
    let opcoes1 = ''
    let opcoes2 = ''

    //pegar opcoes para select1
    for (let moeda of Object.entries(moedasBuscadas)){ //object.entries coloca o objeto como array dentro de outra variavel
        opcoes1 = new Option(moeda[1], moeda[0]) //coloca uma nova option dentro do html
        // console.log(opcoes);
        select1.add(opcoes1);
        // select2.add(opcoes2);

    }
        //pegar opcoes para select2
    for (let moeda2 of Object.entries(moedasBuscadas)){ //object.entries coloca o objeto como array dentro de outra variavel
        opcoes2 = new Option(moeda2[1], moeda2[0]) //coloca uma nova option dentro do html
        // console.log(opcoes2);
        select2.add(opcoes2);

    }
}

