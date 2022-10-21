const logoLink = () => {
    window.location.href = "home.html";
}

const gerarCodigo = () => {  
  let code = Math.floor(Date.now() * Math.random()).toString(36)
  document.getElementById('generated-code').innerHTML = code
}


let input = ""
let btn = document.querySelector("#ok-confirme-presence")

btn.onclick = function() {
 
  input = document.querySelector("#insert-code");
  const texto = input.value;

  console.log(texto)
}




