class app {
  constructor() {  
  }
  foco() {
    let checkbox = document.querySelector('input.checkbox')
    checkbox.disabled = false;
  }


  desfoco() {
    elementos.querySelector('input.checkbox').disabled = false
    let clone = elementos.cloneNode(true)
    clone.querySelector('input.checkboxTexto').value = ''
    console.log(ordem)
    clone.style.order = ordem++
    elementos.after(clone) // => é inserido dps de elementos

    let arrayInputs =  document.querySelectorAll('.checkboxTexto')
    arrayInputs.forEach(d => {
      d.addEventListener("focusout", App.desfoco)
    });
  }

}
let ordem = 0
let elementos = document.querySelector('.checkboxExemplo')
elementos.style.order = ordem
const App = new app(elementos, ordem)

let checkboxText = document.querySelector('input.checkboxTexto')
checkboxText.addEventListener("focus", App.foco)
checkboxText.addEventListener("focusout", App.desfoco)