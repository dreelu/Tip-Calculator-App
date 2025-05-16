let TipPercantage = null

function TipValue(n) {
    TipPercantage = n/100
}

function customTip() {
  let customTipBrute = document.querySelector("input#customTip")
  let customTip = customTipBrute.value
  
    TipPercantage = customTip/100
}

function CalculateTip() {
    let BillInput = document.querySelector("input#bill")
    let PeopleAmount = document.querySelector("input#npeople")

    let BillValue = BillInput.value
    let PoeopleValue = PeopleAmount.value

    let TipAmount = (BillValue / PoeopleValue) * TipPercantage
    let Total = BillValue / PoeopleValue + TipAmount

    window.alert(`${TipPercantage}`) // Debug Test
}

   // Matemática:
    //  Tip Amount = (Bill * 15%) / 5
    // Total: Bill / 5 + Tip Amount

