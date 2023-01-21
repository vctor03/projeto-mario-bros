window.sr = ScrollReveal({reset:true});

sr.reveal('.mario',{duration:5000})

sr.reveal('.container',{duration:5000})

const buttonAparecer = document.getElementById("aparecer");
const buttonVoltar = document.getElementById("voltar");
const modalContainer = document.getElementById("modal-container")

buttonAparecer.addEventListener("click", (e) => {
    console.log("opa",(modalContainer.classList.contains("modal")))
    if(modalContainer.classList.contains("aberto")){
    modalContainer.classList.remove("aberto");
    }else modalContainer.classList.add("aberto");
  })

  buttonVoltar.addEventListener("click", (e) => {
    modalContainer.classList.remove("aberto");
  })

 