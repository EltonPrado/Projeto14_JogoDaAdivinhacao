const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.querySelector('keydown', function(event) {
  if(event.key == 'Enter' && screen1.classList('hide')) {
    handleResetClick()
  }
})

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Parabéns! Você acertou em ${xAttempts} tentativas`
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("O número não pode ser inserido. Digite um valor entre 0 a 10")
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}