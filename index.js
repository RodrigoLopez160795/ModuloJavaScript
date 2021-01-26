function enviar(){
    let frase = document.getElementById("myinput").value;
    let target=document.getElementById("figuras").value;
    document.getElementById(target).innerHTML = frase;
  }
  function borrar(){
    let frase = document.getElementById("myinput").value;
    let target=document.getElementById("figuras").value;
    document.getElementById(target).innerHTML = "";
  }