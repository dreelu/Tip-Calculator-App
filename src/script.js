let TipPercantage = null
let BillInput = document.querySelector("input#bill")
let PeopleAmount = document.querySelector("input#npeople")
let tipPerson = document.querySelector("p#tipPerson")
let totalPerson = document.querySelector("p#totalPerson")
let resetButton = document.querySelector("button#resetButton")

function TipValue(n) {
    TipPercantage = n/100
}

function CustomTipPercantage() {
    let CustomTipBrute = document.querySelector("input#customTip")
    let CustomTip = CustomTipBrute.value
    TipPercantage = CustomTip/100
}

const tipButtons = document.querySelectorAll('.botao-fake-focus');

tipButtons.forEach(botao => {
  botao.addEventListener('click', () => {

    tipButtons.forEach(b => b.classList.remove('active'));

    botao.classList.add('active');
  });
});

function CalculateTip() {
    let BillValue = BillInput.value
    let peopleValue = PeopleAmount.value

    if (BillValue !== '' && 
      peopleValue !== '' && 
      TipPercantage !== '') {

      let TipAmount = (BillValue / peopleValue) * TipPercantage
      let Total = BillValue / peopleValue + TipAmount

      tipPerson.innerHTML =`${TipAmount.toFixed(2)}`
      totalPerson.innerHTML = `${Total.toFixed(2)}`
      resetButton.classList.add('active-rb')
    }
}

function reset() {
  if (resetButton.classList.contains('active-rb')) {
    tipButtons.forEach(button => {
    button.classList.remove('active')
    })

    BillInput.value = ''
    PeopleAmount.value = ''
    TipPercantage = ''
    tipPerson.innerHTML = '$0.00'
    totalPerson.innerHTML = '$0.00'

    resetButton.classList.remove('active-rb')
  }
}

setInterval(CalculateTip, 1000);

   // Matemática:
    //  Tip Amount = (Bill * 15%) / 5
    // Total: Bill / 5 + Tip Amount

