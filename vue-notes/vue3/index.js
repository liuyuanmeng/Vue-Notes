const addButoon = document.getElementById('add')
const minusButton = document.getElementById('minus')
const countResult = document.getElementById('count')
let count = 0
countResult.innerText = count
addButoon.addEventListener('click', () => {
  count++
  countResult.innerText = count
})

minusButton.addEventListener('click', () => {
  count--
  countResult.innerText = count

})