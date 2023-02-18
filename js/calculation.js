// triangle calculation
document.getElementById('first-card-calculation').addEventListener('click', function () {

  const cardValue = getTitleAndInputValue("first-card-title", "first-card-first-input", "first-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})


// to get title and input field value we can use common function and get the same output by reducing the code and also reuse it when it is needed...

function getTitleAndInputValue(title, firstInput, secondInput) {
  const cardTitle = document.getElementById(title).innerText;
  const cardFirstInput = document.getElementById(firstInput).value;
  const cardSecondInput = document.getElementById(secondInput).value;
  const card = {
    cardTitleName: cardTitle,
    cardFirstInputValue: cardFirstInput,
    cardSecondInputValue: cardSecondInput
  };
  return card
}

// dynamically creating table body for area calculation using function named displayAreaTotal where two parameter declared for table rows

function displayAreaTotal(cardName, total) {
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${cardName}</td>
      <td>${total}</td>
      <td>
      <button class="btn btn-accent text-white normal-case" >Convert To m<sup>2</sup></button></td>
      
    `;
  tableContainer.appendChild(tr);
}

