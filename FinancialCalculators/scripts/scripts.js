"use strict";
//commit
window.onload = init;

function init() {
  const calculateMortgageBtn = document.getElementById("calculateMortgageBtn");
  const calculateFutureValueBtn = document.getElementById("calculateFutureValueBtn");
  const calculatePresentValueOfAnnuityBtn = document.getElementById("calculatePresentValueOfAnnuityBtn");

  if (calculateMortgageBtn) {
    calculateMortgageBtn.onclick = onCalculateMortgageBtnClicked;
  }
  if (calculateFutureValueBtn) {
    calculateFutureValueBtn.onclick = onCalculateFutureValueBtnClicked;
  }
  if (calculatePresentValueOfAnnuityBtn) {
    calculatePresentValueOfAnnuityBtn.onclick = onCalculatePresentValueOfAnnuityBtnClicked;
  }
}

//Input Fields.
const principalAmount = document.getElementById("principalAmountField");
const interestAsDecimal = document.getElementById("interestAsDecimalField");
const lengthInYears = document.getElementById("lengthInYearsField");
const monthlyAmount = document.getElementById("monthlyAmountField");
//Output Fields.
const monthlyPayment = document.getElementById("mortgageMonthlyPaymentField");
const totalInterest = document.getElementById("totalInterestField");
const futureValue = document.getElementById("futureValueField");
const presentValue = document.getElementById("presentValueField");

const messagePara = document.getElementById("messagePara");

function displayErrorMessage() {
  messagePara.innerText = `One or more entry is invalid.
  Try Again.`;
}

function onCalculateMortgageBtnClicked() {
  const pAmount = Number(principalAmount.value);
  const interestRate = Number(interestAsDecimal.value);
  const lengthYears = Number(lengthInYears.value);

  if (isNaN(pAmount) || isNaN(interestRate) || isNaN(lengthYears)) {
    displayErrorMessage();
  } else {
    let monthlyTotal = (pAmount * (interestRate / 12)) / (1 - (1 + interestRate / 12) ** -(lengthYears * 12));
    monthlyPayment.value = monthlyTotal.toFixed(2);
    totalInterest.value = (monthlyTotal * lengthYears * 12 - pAmount).toFixed(2);

    messagePara.innerText = "";
  }
}

function onCalculateFutureValueBtnClicked() {
  const pAmount = Number(principalAmount.value);
  const interestRate = Number(interestAsDecimal.value);
  const lengthYears = Number(lengthInYears.value);

  if (isNaN(pAmount) || isNaN(interestRate) || isNaN(lengthYears)) {
    displayErrorMessage();
  } else {
    let fv = pAmount * (1 + interestRate / 365) ** (365 * lengthYears);
    futureValue.value = fv.toFixed(2);
    totalInterest.value = (fv - pAmount).toFixed(2);

    messagePara.innerText = "";
  }
}

function onCalculatePresentValueOfAnnuityBtnClicked() {
  const monthlyPayout = Number(monthlyAmount.value);
  const interestRate = Number(interestAsDecimal.value);
  const lengthYears = Number(lengthInYears.value);

  if (isNaN(monthlyPayout) || isNaN(interestRate) || isNaN(lengthYears)) {
    displayErrorMessage();
  } else {
    let pv = monthlyPayout * ((1 - (1 + interestRate / 12) ** (-12 * lengthYears)) / (interestRate / 12));
    presentValue.value = pv;

    messagePara.innerText = "";
  }
}
