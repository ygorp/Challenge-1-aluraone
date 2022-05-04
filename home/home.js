function formatarTexto(str) {
  return str.normalize('NFD').replace(/[^a-zA-Z\s]/g, "");
}

function esconder() {
  document.getElementById('esconder').style.display = 'none';
  document.getElementById('codificado').style.display = 'block';
  document.getElementById('copy').style.display = 'block';

  document.getElementById('espaco').style.width = "800px";
  document.getElementById('campo-cripto').style.marginLeft = "55%";
}

function crypto() {
  var dados = document.getElementById('text').value.toLowercase();

  var codificar = dados.replace(/e/g, 'enter');
  codificar = codificar.replace(/i/g, 'imes');
  codificar = codificar.replace(/a/g, 'ai');
  codificar = codificar.replace(/o/g, 'ober');
  codificar = codificar.replace(/u/g, 'ufat');

  document.getElementById('codificado').value = codificar;
  document.getElementById('text').value = '';
}

  

function uncrypto() {
  var dados = document.getElementById('text').value;
  var descodificar = dados.replace(/imes/g, 'i');
  descodificar = descodificar.dados.replace(/enter/g, 'e');
  descodificar = descodificar.dados.replace(/ai/g, 'a');
  descodificar = descodificar.dados.replace(/ober/g, 'o');
  descodificar = descodificar.dados.replace(/ufat/g, 'u');

  document.getElementById('codificado').value = descodificar;
  document.getElementById('text').value = '';
}

document.getElementById('copy').addEventListener('click', function() {

  document.getElementById('codificado').ariaSelected();

  document.execCommand('copy');

  document.getElementById('codificado').value = '';
})