 function desafio001() { 

    var nome = prompt ("Digite seu nome:")
    var idade = parseInt (prompt ("Digite sua idade:"))
    var curso  = prompt ("Digite aqui sua profissão:")
    var profissao = prompt ("Digite qual e sau profissão:")

    alert (`O seu nome é ${nome}, voçe tem ${idade}, voçe a sua profissão é ${profissao} e faz o curso ${curso} `)
}


function desafio002 (){
    var  nome = prompt ("Digite seu nome:")
    var sobreNome = prompt ("Digite seu sobre nome:")
    alert (`Seu primeiro nome é ${nome} seu sobre nome é ${sobreNome}`)

}

function desafio003 (){
    var numero = prompt ("Digite um numeor para a maquina trazer o  antecessor:")
    var antecessor = numero - 1
    alert (`O antecessor do número ${numero} é ${antecessor}`)

}
function desafio004 (){
    var numero = prompt ("Digite um numero para saber o sucessor:")
    var sucessor  = numero + 1 
    alert (`O sucessor do numero ${numero} é ${sucessor}`)
}

function  desafio005 (){
    alert ("Algoritimo de soma")
    var numero1 =  Number (prompt ("Digite o primeiro valor:"))
    var numero2 = Number (prompt ("Digite  o segundo numero:"))
    soma = numero1 + numero2
    alert (`A soma dos numero ${numero1}+${numero2}=${soma}`)
}

function desafio006 (){
    alert ("Algoritimo de subtração")
    var numero1 = Number (prompt ("Digite o primeiro numero:"))
    var numero2 =  Number (prompt ("Digite o segundo numero:"))
    var subtracao = numero1 - numero2
    alert (`A subtrsção de ${numero1}-${numero2}=${subtracao}`)
}

function desafio007 (){
    alert  ("Algoritimo de multiplicação")
    var numero1 = Number (prompt ("Digite o primeiro numero:"))
    var numero2 = Number (prompt ("Digite o segundo numero:"))
    var multiplicacao = numero1 * numero2
    alert (`A multiplicação de ${numero1}*${numero2}=${multiplicacao}`)
}

function desafio008 (){
    alert ("Algoritimo de divisão")
    var numero1 = Number (prompt ("Digite o primeiro numero:"))
    var numero2 = Number (prompt ("Digite o segundo numero:"))
    var  divisao = numero1 / numero2
    alert (`A divisão de ${numero1}/${numero2}=${divisao}`)
}

function desafio009 (){
    alert ("Algoritimo do Dobro")
    var numero = Number (prompt ("Digite um numero para saber o dobro:"))
    var dobro = numero * 2
    alert (`O dobro de ${numero} é ${dobro}`)
}

function desafio010 (){
    alert ("Algoritimo da metade")
    var numero = Number (prompt ("Digite um numero para saber a metade:"))
    var metade = numero / 2
    alert (`A metade de ${numero} é ${metade}`)
}

function desafio011 (){
    alert ("Algoritimo cambio Dollar- real")
    var valor = Number (prompt ("Digite o valor em dólar para saber o valor em real"))
    var cambio = valor * 5.76
    alert (`O valor de ${valor} dólar é igual a ${cambio} reais`)
}

function  desafio012 (){
    alert ("Algoritimo cambio Real-dolar")
    var valor = Number (prompt ("Digite o valor em real para saber o valor em dólar"))
    var cambio = valor / 5.76
    alert (`O valor de ${valor} reais é igual a ${cambio} dólar`)

}

function desafio013 (){
    alert ("Algoritimo troca de valores")
    var valor1 = Number (prompt ("Digite o primeiro valor"))
    var valor2 = Number (prompt ("Digite o segundo valor"))
    var troca = valor1
    valor1 = valor2
    valor2 = troca
    alert (`O valor de ${valor1} foi trocado com o valor de ${valor2}`)
}

function desafio014 (){
    alert ("Algoritimo area de um quadrado")
    var lado = Number (prompt ("Digite o valor do lado do quadrado"))
    var area = lado * lado
    alert (`A area do quadrado é ${area}`)
}

function desafio015 (){
    alert ("Algoritimo area de um retangulo")
    var base = Number (prompt ("Digite o valor da base do retangulo"))
    var altura = Number (prompt ("Digite o valor da altura do retangulo"))
    var area = base * altura
    alert (`A area do retangulo é ${area}`)
}

function  desafio016 (){
    alert ("Algoritimo area de um triangulo")
    var base = Number (prompt ("Digite o valor da base do triangulo"))
    var altura = Number (prompt ("Digite o valor da altura do triangulo"))
    var area = (base * altura) / 2
    alert (`A area do triangulo é ${area}`)
}

function desafio017 (){
    alert ("Algoritimo tabuada")
    var numero = parseInt(prompt("Digite um número para ver a tabuada:"));
    var resultado = "";
        for (var i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
}

function  desafio018 (){
    alert ("Algoritimo Media 4 valores")
    var valor1 = Number (prompt ("Digite o primeiro valor"))
    var valor2 = Number (prompt ("Digite o segundo valor"))
    var valor3 = Number (prompt ("Digite o terceiro valor"))
    var valor4 = Number (prompt ("Digite o quarto valor"))
    var media = (valor1 + valor2 + valor3 + valor4) / 4
    alert (`A media dos valores é ${media}`)
}

function desafio019 (){
    alert ("Algoritimo Salario+bonus")
    var salario = Number (prompt ("Digite o salario"))
    var bonus = Number (prompt ("Digite o bonus"))
    var salarioFinal = salario + bonus
    alert (`O salario final é ${salarioFinal}`)
}

function desafio020 (){
    alert ("Algoritimo de Formatação de Numeros para a moeda Real")
    var valor = Number (prompt ("Digite o valor"))
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency',currency: 'BRL' })
        alert (`O valor formatado é ${valorFormatado}`) 
}

function desafio021 (){
    alert ("Algoritimo de Conversão de letras para maisculo")
    var texto = prompt  ("Digite o texto")
    var  textoMaiusculo = texto.toUpperCase()
    alert (`O texto em maisculo é ${textoMaiusculo}`)
}

function desafio022 (){
    alert ("Algoritimo de   Conversão de letras para minusculo")
    var texto = prompt  ("Digite o texto")
    var textoMinusculo = texto.toLowerCase()
    alert (`O texto em minusco é ${textoMinusculo}`)
}

function desafio023(){
    alert ("Algoritimo de contar o numero de letras no primeiro nome")
    var nome = prompt ("Digite o nome")
    var nomeMinusculo = nome.toLowerCase()
    var nomeSeparado = nomeMinusculo.split(" ")
    var primeiroNome = nomeSeparado[0]
    var primeiroNomeSeparado = primeiroNome.split("");
    var primeiroNomeSeparado2 = primeiroNomeSeparado.length
    alert (`O primeiro nome tem ${primeiroNomeSeparado2} letras`)
}

function desafio024 (){
    alert ("Algoritimo De Formatar a Divisão de 10/3 com Duas Casas decimais")
    var valor1 = 10
    var valor2 = 3
    var resultado = valor1 / valor2
    var resultadoFormatado = resultado.toFixed(2)
    alert (`O resultado é ${resultadoFormatado}`)
}

function desafio025 (){
    alert ("Algoritimo para exibir o primeiro nome em maiusculas e contar as letras")
    var nome = prompt ("Digite o nome")
    var nomeMinusculo = nome.toLowerCase()
    var nomeSeparado = nomeMinusculo.split(" ")
    var primeiroNome = nomeSeparado[0]
    var primeiroNomeSeparado = primeiroNome.split("");
    var primeiroNomeSeparado2 = primeiroNomeSeparado.length
    var primeiroNomeMaiusculo = primeiroNome.toUpperCase()
    alert (`O primeiro nome em maiusculo é ${primeiroNomeMaiusculo} O primeiro nome tem ${primeiroNomeSeparado2} letras`)
}

function desafio026 (){
    alert ("Algoritimo para  calcular a media de valores com moeda brasileira")
    var valor1 = prompt ("Digite o primeiro valor")
    var valor2 = prompt ("Digite o segundo valor")
    var valor3 = prompt ("Digite o terceito valor")
    var media = (valor1 + valor2 + valor3) / 3
    var mediaFormatada = media.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits: 2})
    alert (`A media é ${mediaFormatada}`)
}

function desafio027 (){
    alert ("Algoritimo para validção deentrada para show")
    var idade = Number (prompt ("Digite sua idade"))
    if (idade >= 16) {
        alert ("Você pode ir ao show")}
        else {
            alert ("Você não pode ir ao show")}
}

function desafio028 (){
    alert ("Algoritimo para validção deentrada para show")
    var idade = Number (prompt ("Digite sua idade"))
    var verificacaoIdade  = idade > 16 ? "Pode entrar" : "Não pode entrar" 
    alert (verificacaoIdade)
}

function desafio029 (){
    alert ("Algoritimo de maioridade")
    var idade =  Number (prompt ("Digite sua idade"))
    var maiorIdade = idade >= 18 ? "Voçe é maior de idade" : "Voçe é menor de idade"
    alert (maiorIdade)
}

function desafio030 (){
    alert ("Algoritimo de maioridade")
    var idade =  Number (prompt ("Digite sua idade"))
    if (idade >= 18){
        alert ("Voçe é maior de idade")
    }
    else {
        alert ("Voçe é menor de idade")
    }
}

function desafio031 (){
    alert ("Algoritimo de comparação de dois numeros")
    var numero1 = Number (prompt ("Digite o primeiro numero"))
    var numero2 = Number (prompt ("Digite o segundo numero"))
    if (numero1 == numero2){
        alert ("Os numeros são iguais")
    }
    else if  (numero1 > numero2){
        alert ("O primeiro numero é maior!")
    }
    else if (numero1 < numero2){
        alert ("O segundo numero e maior!")
    }
}

function desafio032 (){
    alert ("Algoritimo de comparação de dois numeros")
    var numero1 = Number (prompt ("Digite o primeiro numero"))
    var numero2 = Number (prompt ("Digite o segundo numero"))
    var verificaNumero = numero1 == numero2 ? "Os numeros são iguais" : "Os numeros não são iguais"
    alert (verificaNumero)
}

function desafio033 (){
    alert ("Algoritimo de comparação de idade")
    var nome1 =  prompt ("Digite o nome da primeira pessoa")
    var idade1 = Number (prompt ("Digite a idade da primeira pessoa"))
    var nome2 =  prompt ("Digite o nome da segunda pessoa")
    var idade2 = Number (prompt ("Digite a idade da segunda pessoa"))
    var verificaIdade = idade1 > idade2 ? nome1 + " é maior que "+ nome2 : nome1 + " é menor que " + nome2
}

function desafio034 (){
    alert ("Algoritimo de comparação de idades")
    var nome1 = prompt ("Digite o nome da primeira pessoa")
    var idade1 = Number (prompt ("Digite a idade da primeira pessoa"))
    var nome2 = prompt ("Digite o nome da segunda pessoa")
    var idade2 = Number (prompt ("Digite a idade da segunda pessoa"))
    if (idade1 > idade2){
        alert (`${nome1} é mais velho que  ${nome2}`)
    }
    else if  (idade1 < idade2){
        alert (`${nome1} é mais novo que  ${nome2}`)
    }
}

function desafio035 (){
    alert ("Algoritimo para tirar a CNH")
    var idade = Number (prompt ("Digite sua idade para saber se pode tirar a CNH"))
    var verificaIdade = idade >= 18 ? "Voçe pode tirar a CNH !!!" : "Voçe não pode tirar a CNH );"
}

function desafio036 (){
    alert ("Algoritimo para Tirar CNH")
    var idade = Number (prompt ("Digite  sua idade para saber se pode tirar CNH"))
    if (idade >= 18){
        alert ("Voçe pode tirar CNH! (;")
    }
    else{
        alert ("Voçe não pode tirar CNH );")
    }
}

function desafio037 (){
    alert ("Algoritimo para calcular o IMC")
    var altura = Number (prompt ("Digite  sua altura"))
    var peso = Number (prompt ("Digite  seu peso"))
    var verificaIMC = peso / (altura**2)
    if (verificaIMC < 18.5 ){
        alert ("Voçe está abaixo do peso")
    }
    else if (verificaIMC < 25 ){
        alert ("Voçe está no peso ideal")
    }
    else if (verificaIMC  < 30 ){
        alert ("Voçe está acima do peso")
    }
    else if (verificaIMC   < 40 ){
        alert ("Voçe está obeso")
    }
}

function desafio038  (){
    alert ("Algoritimo de numero positivo, negativo ou zero")
    var numero = Number (prompt ("Digite um numero"))
    if (numero > 0 ){
        alert ("Voçe digitou um numero positivo")
    }
    else if (numero < 0){
        alert ("Voçe digitou um numero negativo")
    }
    else if (numero == 0){
        alert ("Voçe digitou zero")
    }
}

function desafio039 (){
    alert ("Algoritimo para calcular a nota final")
    var notaFinal = Number (prompt ("Digite a sua nota final"))
    if (notaFinal <70){
        alert ("Voçe está reprovado")
    }
    else{
        alert ("Voçe está de recuperação")
    }
}

function desafio040 (){
    alert ("Algoritimo para verificar o periodo")
    var hora  = Number (prompt ("Digite que horas são, para saber qual o periodo "))
    if (hora >= 5 && hora <11 ){
        alert ("Bom dia")
    }
    else if (hora >= 12 && hora <17 ){
        alert ("Boa tarde")
    }
    else if  (hora >= 18 && hora <23 ){
        alert ("Boa noite")
    }
    else {
        alert ("Boa madrugada")
    }

}

function desafio041 (){
    alert ("Algoritimo para verificar se o numero e par ou impar")
    var numero = Number (prompt ("Digite um numero"))
    if (numero % 2 == 0 ){
        alert ("O numero e par")
    }
    else{
        alert ("O numero e impar")
    }
}

function desafio041() {
    alert("Algoritmo para fazer desconto em uma compra");
    
    var preco = Number(prompt("Digite o preço da compra:"));
    var cupom = prompt("Digite o cupom de desconto:");

    if (cupom === "DESC10") {
        var desconto = preco * 0.10
        var precoComDesconto = preco - desconto
        alert(`Você ganhou um desconto de 10%! O preço final é R$ ${precoComDesconto.toFixed(2)}`)
    } 
    else {
        alert(`Cupom inválido. O preço permanece R$ ${preco.toFixed(2)}`);
    }
}

function desafio043 (){
    alert ("Algoritimo para verificação de emprego de palavras")
    var palavra =  prompt ("Digite uma linguagem")
    if (palavra === "JavaScript"){
        alert ("Você escolheu a linguagem certa")
    }
    else {
        alert ("Você escolheu a linguagem errada")
    }
}

function desafio044 (){
    alert ("Algoritimo de verificação de comprimento de nome")
    var nome = prompt ("Digie seu nome")
    if (nome.length <= 3 ){
        alert ("Seu nome é muito curto")
    }
    else {
        alert ("Seu nome é muito longo")
    }
}

function desafio045 (){
    alert ("Algoritimo para ver a condição climatica")
    var temperatura = Number(prompt ("Digite a temperatura"))
    if (temperatura <= 15 ){
        alert ("Está frio")
    }
    else if (temperatura <= 25 ){
        alert ("Está agradável")
    }
    else {
        alert ("Está quente")
    }
}

function desafio046 (){
    alert ("Algoritimo para classificar a nota de uma escola")
    var nota = Number(prompt ("Digite sua nota"))
    if (nota >= 9){
        alert ("Sua nota esta Excelente")
    }
    else if (nota >= 7){
        alert ("Sua nota esta boa")
    }
    else if (nota >= 5){
        alert ("Sua nota esta regular")
    }
    else {
        alert ("Sua nota esta insuficiente")
    }
}

function desafio047 (){
    alert ("Algoritimo para verificar amaior da idade internacional")
    var idade = Number(prompt ("Digite sua idade")) 
    if (idade >= 18 && idade <21 ){
        alert ("Voçe  é maior de idade apenas no Brasil no Estados Unidos voçe é menor de idade")
    }
    else if (idade >= 18 &&  idade >= 21 ){
        alert ("Voçe é maior de idade em todos os países")
    }
    else {
        alert ("Voçe é menor de idadeem todos os países")
    }
}

function desafio048 (){
    alert ("Algoritimo para conversão de celsius para fahrenheit")
    var temperatura = Number(prompt ("Digite a temperatura em celsius"))
    var temperaturaFahrenheit = (temperatura * 9/5) + 32
    alert ("A temperatura em fahrenheit é " + temperaturaFahrenheit)
}

function desafio049 (){
    alert ("Algoritimo para calcular a media de notas")
    var nota1 = Number (prompt ("Digite a nota da sua primeira prova"))
    var nota2 = Number (prompt ("Digite a nota da sua segunda prova"))
    var nota3 = Number (prompt ("Digite a nota da sua terceira prova"))
    var media = (nota1 + nota2 + nota3) / 3
    if  (media >= 7){
        alert ("Voçe foi aprovado")
    }
    else {
        alert ("Voçe foi reprovado")
    }
}

function desafio050 (){
    alert ("Algoritimo para ver se um produto e caro ou barato")
    var preco = Number (prompt ("Digite o preco do produto"))
    if (preco < 20){
        alert ("O produto e barato")
    }
    else if (preco < 100){
        alert ("O produto e caro")
    }
    else {
        alert ("O produto e muito caro")
    }
}

function desafio051 (){
    alert ("Algoritimo  para comprarb maça")
    var quantidadeMaca = Number (prompt ("Digite a quantidade de maça comprada"))
    var precoMaca
    if (quantidadeMaca <= 12){
        precoMaca = quantidadeMaca * 1.30
        alert (`Voçe comprou ${quantidadeMaca} que ficou no valor de R$:${precoMaca}`)
    }
    else {
        precoMaca = quantidadeMaca * 1.00
        alert (`Voçe comprou ${quantidadeMaca} que ficou no valor de R${precoMaca}`)
        }
}

function desafio052 (){
    
    alert ("Algoritimo para saber o maior dos tres numeros inteiros")
    var numero1 = Number  (prompt ("Digite o primeiro numero"))
    var numero2 = Number (prompt ("Digite o segundo numero"))
    var numero3 = Number (prompt ("Digite o terceiro numero"))
    if ( numero1 > numero2 && numero1 > numero3){
        alert (`O maior numero e ${numero1}`)
    }
    else if ( numero2 > numero1 && numero2 > numero3){
        alert (`O maior numero é ${numero2}`)
    }
    else {
        alert (`O maior numero é ${numero3}`)
    }
}

const desafio053 = () => {
    alert ("Algoritimo para calcular o desconto")
    var preco = Number (prompt ("Digite o preco do produto"))
    if (preco > 100){
        preco = preco - preco * 0.10
        alert (`O preco do produto ficou em R$ ${preco}`)
    }
    else {
        alert (`O preco do produto ficou em R$ ${preco}`)
    }
}

function desadio054 (){
    alert ("Algoritimo para classificar a temperatura")
    var temperatura = Number (prompt ("Digite a temperatura em graus celsius"))
    if (temperatura < 0){
        alert (`A temperatura esta muito frio`)
        }
    else if (temperatura == 0 && temperatura < 20){
        alert (`A temperatura é fria`)
    }
    else if (temperatura >= 21 && temperatura <= 30){
        alert (`A temperatura é agradavel`)
    }
    else if (temperatura > 31 && temperatura <= 40){
        alert (`A temperatura é quente`)
    }
}

function desafio055 (){
    alert ("Algoritimo para verificação de votação obrigatoria")
    var idade = Number (prompt ("Digite a idade do eleitor"))
    if (idade >= 18){
        alert (`O eleitor e maior de idade e pode votar`)
    }
    else {
        alert (`O eleitor e menor de idade e não pode votar`)
    }
}
function desafio056 (){
    alert ("Classificar nota em conceito")
    var nota = Number (prompt ("Digite a nota do aluno"))
    if (nota >= 90){
        alert (`A nota do aluno e A`)
    }
    else if (nota >= 80 && nota < 90){
        alert (`A nota do aluno e B`)
    }
    else if (nota >= 70 && nota < 80){
        alert (`A nota do aluno e C`)
    }
    else if (nota >= 60 && nota < 70){
        alert (`A nota do aluno e D`)
    }
    else {
        alert (`A nota do aluno e E`)
    }
}

function desafio057 (){
    alert ("Algoritimo para validar a classificação de venda de ingresso")
    var idade = Number (prompt ("Digite a idade do espectador"))
    if (idade >= 64){
        alert (`igresso SENIOR`)
    }
    else if (idade >= 18 && idade < 64){
        alert (`O ingresso Adulto`)
    }
    else if (idade >= 12 && idade < 17){
        alert (`O ingresso Adolescente`)
    }
    else {
        alert (`O ingresso Infantil`)
    }
}

function desafio058 (){
    alert ("Algoritimo para conversão de fahrenheit para celsius")
    var fahrenheit = Number (prompt ("Digite a temperatura em fahrenheit"))
    var celsius = (fahrenheit - 32) * 5/9
    alert (`A temperatura em celsius e ${celsius}`)
}

function desafio059 (){
    alert ("Algoritimo para calcular a distancia percorrida com velocidade e tempo")
    var velocidade = Number (prompt ("Digite a velocidade em Km"))
    var tempo = Number (prompt ("Digite o tempo em horas"))
    var distancia = velocidade * tempo
    alert (`A distancia percorrida e ${distancia}`)
}

function desafio060 (){
    alert ("Algoritimo para calcular a porcentagem de aumento de salario")
    var salario = Number (prompt ("Digite o salario atual"))
    var aumento = Number (prompt ("Digite o aumento"))
    var salarioNovo = salario + (salario * aumento / 100)
    alert (`O salario novo e ${salarioNovo}`)
    }
    

