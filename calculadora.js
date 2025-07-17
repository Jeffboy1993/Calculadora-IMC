
function calcularIMC(){

    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    let imc = peso / (altura * altura);

    //Saida de dados
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc;
}