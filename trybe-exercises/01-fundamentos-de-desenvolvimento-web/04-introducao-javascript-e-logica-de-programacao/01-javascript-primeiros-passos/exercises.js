// BLOCO 4 - DIA 1 - EXERCÍCIOS PROPOSTOS
// -------------------------------------------------------------------------------------------
/* 1- Faça um programa que tenha duas variáveis, a e b ,
definidas no começo com os valores que serão operados.
Faça as operações de adição, subtração, multiplicação, divisão e modulo:*/

//Math.floor(Math.random() * (max - min +1)) + min
let a = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let b = Math.floor(Math.random() * (100 - 0 +1)) + 0;

console.log("Sendo A = " +a +" e B = " +b );

console.log("A + B = " +(a+b))
console.log("A - B = " +(a-b))
console.log("A * B = " +(a*b))
console.log("A / B = " +(a/b))
console.log("A % B = " +(a%b))

// -------------------------------------------------------------------------------------------
// 2 -Faça um programa que retorne o maior de dois números:

let a = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let b = Math.floor(Math.random() * (100 - 0 +1)) + 0;

if (a>b){
    console.log("A="+a +" maior que B=" +b);
}
else {
    console.log("B="+b +" maior que A=" +a);
}

// -------------------------------------------------------------------------------------------
// 3- Faça um programa que retorne o maior de três números:

let a = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let b = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let c = Math.floor(Math.random() * (100 - 0 +1)) + 0;

if (a>b && a>c){
    console.log("A="+a +" maior que B=" +b +" e maior que C=" +c);
}
else if (b>a && b>c){
    console.log("B="+b +" maior que A=" +a +" e maior que C=" +c);
}
else{
    console.log("C="+c +" maior que A=" +a +" e maior que B=" +b);
}

// -------------------------------------------------------------------------------------------
/* 4- Faça um programa que, dado um valor definido numa variável,
retorne "positive" se esse valor for positivo,
"negative" se for negativo e "zero" caso contrário.*/

let num = Math.floor(Math.random() * (100 - -100 +1)) + -100;

console.log("Número: " +num)

if (num>0){
    console.log("Positive number!")
}
else if (num<0){
    console.log("Negative number!")
}
else {
    console.log("Zero")
}

// -------------------------------------------------------------------------------------------
/* 5- Faça um programa que defina três variáveis com os valores dos
três ângulos internos de um triângulo. Retorne true se os ângulos
representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
    - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    - Um ângulo será considerado inválido se não tiver um valor positivo.*/

let angle_1 = Math.floor(Math.random() * (360 - -360 +1)) + -360;
let angle_2 = Math.floor(Math.random() * (360 - -360 +1)) + -360;
let angle_3 = Math.floor(Math.random() * (360 - -360 +1)) + -360;

console.log("Angulo 1: " +angle_1 +" | Angulo 2: " +angle_2 +" | Angulo 3: " +angle_3);

if (angle_1 <0 || angle_2 <0 || angle_3 <0) {
    console.log("Erro!!! Angulo inválido.");
}
else {
    if ((angle_1 + angle_2 + angle_3) === 180){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// -------------------------------------------------------------------------------------------
/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne
os movimentos que ela faz.
    - Como desafio, faça o programa funcionar tanto se receber o nome de uma
    peça com letras maiúsculas quanto com letras minúsculas, sem aumentar
    a quantidade de condicionais.
    - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

let consulta;
let colsultaLowerCase = consulta.toLowerCase();

switch (colsultaLowerCase) {
    case (peao):
        console.log("Movimenta para frente, uma ou duas casas");
        break;
    case (torre):
        console.log("Movimenta na horizontal e na vertical, quantas casas desejar");
        break;
    case (cavalo):
        console.log("Movimenta em L, quatro casas");
        break;
    case (bispo):
        console.log("Movimenta nas diagonais, quantas casas desejar");
        break;
    case (rainha):
        console.log("Movimenta em todas as direções, quantas casas desejar");
        break;
    case (rei):
        console.log("Movimenta para qualquer casa ao seu redor, uma por vez");
    default:
        console.log("Erro. Peça inválida!");
}

// -------------------------------------------------------------------------------------------
/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100)
em conceitos de A a F. Siga essas regras: 

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for
menor que 0 ou maior que 100.*/

let nota = a = Math.floor(Math.random() * (110 - -10 +1)) + -10;

switch (nota) {
    case (nota >= 90):
        console.log("Conceito: A");
        break;
    case (nota >= 80):
        console.log("Conceito: B");
        break;
    case (nota >= 70):
        console.log("Conceito: C");
        break;
    case (nota >= 60):
        console.log("Conceito: D");
        break;
    case (nota >= 50):
        console.log("Conceito: E");
        break;
    case (nota < 50):
        console.log("Conceito: F");
        break;
    default:
        console.log("Erro!!! Valor inválido.");
}

// -------------------------------------------------------------------------------------------
/* 8 - Escreva um programa que defina três números em variáveis e retorne true
se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if . */

let num1 = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let num2 = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let num3 = Math.floor(Math.random() * (100 - 0 +1)) + 0;

console.log("Valores de entrada: " +num1 +", " +num2 +", " +num3);

if ((num1%2)===0 || (num2%2)===0 || (num3%2)===0) {
    console.log(true);
}
else {
    console.log(false);
}

// -------------------------------------------------------------------------------------------
/* 9 - Escreva um programa que defina três números em variáveis e retorne true
se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

let num1 = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let num2 = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let num3 = Math.floor(Math.random() * (100 - 0 +1)) + 0;

console.log("Valores de entrada: " +num1 +", " +num2 +", " +num3);

if ((num1%2)!==0 || (num2%2)!==0 || (num3%2)!==0) {
    console.log(true);
}
else {
    console.log(false);
}

// -------------------------------------------------------------------------------------------
/* 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes:
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro
(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
    - Atente que, sobre o custo do produto, incide um imposto de 20%.
    - Seu programa também deve emitir uma mensagem de erro e encerrar caso
      algum dos seus valores de entrada seja menor que zero.
    - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo,
      sendo que o imposto de 20% também faz parte do valor de custo.
               - valorCustoTotal = valorCusto + impostoSobreOCusto
               - lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let valorCusto = Math.floor(Math.random() * (50 - 0 +1)) + 0;
let valorVenda = Math.floor(Math.random() * (100 - 50 +1)) + 50;

let imposto = valorCusto*0.2;

let valorCustoTotal = valorCusto + imposto;
let lucro = valorVenda - valorCustoTotal;

console.log("Valor de custo: R$" +valorCusto);
console.log("Valor de venda: R$" +valorVenda);
console.log("Imposto: R$" +imposto);

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro! Valor inválido.");
}
else {
    console.log("Lucro relativo a venda de mil produtos:");
    console.log("R$" +lucro*1000);
}

// -------------------------------------------------------------------------------------------
/* 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados
de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto,
calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10.
Para as faixas de impostos, use as seguintes referências:

 - INSS (Instituto Nacional do Seguro Social):
        Salário bruto até R$ 1.556,94: alíquota de 8%
        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
        
 - IR (Imposto de Renda)
        Até R$ 1.903,98: isento de imposto de renda
        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salarioBruto = Math.floor(Math.random() * (8000 - 1045 +1)) + 1045;
let salarioBase;
let salarioLiquido;
let aliquotaINSS;
let aliquotaIR;
let IR;
let valorTotalDescontado;

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
}
else {
    aliquotaINSS = 570.88
}

salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
    deducaoImposto = 0;
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIR = salarioBase * 0.075;
    deducaoImposto = 142.80;
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIR = salarioBase * 0.15;
    deducaoImposto = 354.80;
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIR = salarioBase * 0.225;
    deducaoImposto = 636.13;
}
else {
    aliquotaIR = salarioBase * 0.275;
    deducaoImposto = 869.36;
}

IR = aliquotaIR - deducaoImposto;

salarioLiquido = salarioBase - IR

valorTotalDescontado = salarioBruto - salarioLiquido;

console.log("Salário Bruto: RS" +salarioBruto);
console.log("Salário líquido: RS" +salarioLiquido);
console.log("Valor total descontado: RS" +valorTotalDescontado);
