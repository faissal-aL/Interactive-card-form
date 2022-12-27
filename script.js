const holderName = document.getElementById("name");
const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const confirmButton = document.getElementById("confirm");

const cardInfos = document.getElementById("card-infos");
const thanksMessage = document.getElementById("thanks-message");

const nameCard = document.getElementById("name-card");
const numberCard = document.getElementById("number-card");
const dateCardMonth = document.getElementById("date-month");
const dateCardYear = document.getElementById("date-year");
const cvcCard = document.getElementById("cvc-card");

const errorName = document.getElementById("name-error");
const errorNumber = document.getElementById("number-error");
const errorDate = document.getElementById("date-error");
const errorCvc = document.getElementById("cvc-error");

// mask for the card number input to be written like 0000 0000 0000 0000
// mask is imported from library IMask

const maskNumberInput = { mask: "0000 0000 0000 0000" };
const mask = IMask(number, maskNumberInput);
const dateMonthMask = IMask(month, { mask: "00" });
const dateYearMask = IMask(year, { mask: "00" });

const numberRegex = /[\d]/;

window.onload = function () {
  holderName.addEventListener("keyup", function () {
    nameCard.innerHTML = holderName.value;
  });
  number.addEventListener("keyup", function () {
    numberCard.innerHTML = number.value;
  });
  cvc.addEventListener("keyup", function () {
    cvcCard.innerHTML = cvc.value;
  });
  month.addEventListener("keyup", function () {
    dateCardMonth.innerHTML = month.value;
  });
  year.addEventListener("keyup", function () {
    dateCardYear.innerHTML = year.value;
  });

  confirmButton.addEventListener("click", function () {
    let validName = holderName.value == "";
    let validNumber = number.value.length < 19;
    let validMonth = month.value == "";
    let validYear = year.value == "";
    let validCvc = cvc.value == "";

    if (validName) {
      errorName.style.display = "block";
      holderName.classList.add("error-border");
    } else {
      errorName.style.display = "none";
      holderName.classList.remove("error-border");
    }

    if (validNumber) {
      errorNumber.style.display = "block";
      number.classList.add("error-border");
    } else {
      errorNumber.style.display = "none";
      number.classList.remove("error-border");
    }

    if (validMonth || validYear) errorDate.style.display = "block";
    else errorDate.style.display = "none";

    if (validMonth) month.classList.add("error-border");
    else month.classList.remove("error-border");

    if (validYear) year.classList.add("error-border");
    else year.classList.remove("error-border");

    if (validCvc) {
      errorCvc.style.display = "block";
      cvc.classList.add("error-border");
    } else {
      errorCvc.style.display = "none";
      cvc.classList.remove("error-border");
    }

    if (!validName && !validNumber && !validMonth && !validYear && !validCvc) {
      cardInfos.style.visibility = "hidden";
      thanksMessage.style.display = "block";
    }
  });
};
