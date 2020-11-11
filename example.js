/* submit.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("entro");

    const mensaje=document.getElementById('mensaje');
    const valor = mensaje.value;
    console.log(valor);

    if(valor == ""){
        const feedback = document.getElementById('feedback');
        console.log("entro al fb");
        feedback.classList.add("show");
        setTimeout(function(){
            feedback.classList.remove("show");
        },2000)
    }

    else{
            document.getElementById('ultmsg').textContent = valor;
            mensaje.value = ""

    }
}); */


/*   */