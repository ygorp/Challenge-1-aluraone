
var dados = document.getElementById("texto").value;
var resultado = dados.replace(/e/g, 'enter', /i/g, 'imes', /a/g, 'ai', /o/g, 'ober', /u/g, 'ufat');

console.log(resultado);