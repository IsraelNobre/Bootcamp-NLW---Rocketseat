// Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click',cloneField)

//executar um ação 
function cloneField() {
  //Duplicar os campos
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
   // pegar os campos
   const fields = newFieldContainer.querySelectorAll('input')

    // limpar os campos
   fields.forEach(function(field){
     field.value = ""
   })

  //colocar na pagina:onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
  