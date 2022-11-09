// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>




const inputChange = document.querySelector('input#font-size-control')
const textSize = document.querySelector('span#text')

inputChange.addEventListener('input', e => {
    textSize.style.fontSize = `${e.target.value }px`
})

// Підкажіть будь-ласка, чому з input та textSize в refs скрипт нижче не працює? Дякую





// const refs = {
//     input: document.querySelector('input#font-size-control'),
//     textSize: document.querySelector('span#text'),
// };

// refs.input.addEventListener('change', e => {
//     refs.textSize.style.fontSize = '${e.target.value }px'
// })