
function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>obirigado por clicar</b>"; 
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://www.pexels.com/pt-br/procurar/contato/");
    //window.location.href = "https://www.pexels.com/pt-br/procurar/contato/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mause";
}
 function voltar(elemento){
     //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
     elemento.innerHTML = "Passe o mouse";
 }

 function load(){
     alert("pagina carregada");
 }
 function funcaoChange(elemento){
     console.log(elemento.value)
 }

/*
function soma(n1, n2){
    return n1 + n2;
}
var validadar =0;
function validaridade(idade){
    var validadar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("qual a sua idade:");
validaridade(idade)
console.log(validar);

//alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual a sua idade?");
if (idade >=18) {
 alert("maior de idade");
} else {
alert("menor de idade"); 
};
*/

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"pera", cor:"amarelo"}]
//console.log(frutas);
//alert(frutas[0].nome);

//var lista = ["maça", "pera", "jaca"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" + "));
//var nome = "Isma sant ";
//var n1 = 5;
//var n2 = 3;
//var frase = "gremio é o melhor time do mundo";
//alert(nome + "tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("gremio", "brasil"));
