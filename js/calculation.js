// blog link 
document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href = 'blog.html';

})

let count = 0;

// triangle calculation
document.getElementById('first-card-calculation').addEventListener('click', function () {
  count += 1;
  const cardValue = getTitleAndInputValue("first-card-title", "first-card-first-input", "first-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// rectangle calculation
document.getElementById('second-card-calculation').addEventListener('click', function () {
  count += 1;
  const cardValue = getTitleAndInputValue("second-card-title", "second-card-first-input", "second-card-second-input")
  const totalArea = (parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// parallelogram calculation
document.getElementById('third-card-calculation').addEventListener('click', function () {
  count += 1;
  const cardValue = getTitleAndInputValue("third-card-title", "third-card-first-input", "third-card-second-input")
  const totalArea = (parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// rhombus calculation
document.getElementById('fourth-card-calculation').addEventListener('click', function () {
  count += 1;
  const cardValue = getTitleAndInputValue("fourth-card-title", "fourth-card-first-input", "fourth-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// pentagon calculation
document.getElementById('fifth-card-calculation').addEventListener('click', function () {
  count += 1;
  const cardValue = getTitleAndInputValue("fifth-card-title", "fifth-card-first-input", "fifth-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// ellipse calculation
document.getElementById('sixth-card-calculation').addEventListener('click', function () {
  count += 1;
  const cardValue = getTitleAndInputValue("sixth-card-title", "sixth-card-first-input", "sixth-card-second-input")

  const totalArea = (3.14 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);

  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})


// to get title and input field value we can use common function and get the same output by reducing the code and also reuse it when it is needed...

function getTitleAndInputValue(title, firstInput, secondInput) {

  const cardTitle = document.getElementById(title).innerText;
  const cardFirstInput = document.getElementById(firstInput).value;
  const cardSecondInput = document.getElementById(secondInput).value;
  if (((cardFirstInput == "" || cardSecondInput === "") || (cardFirstInput <= 0 || cardSecondInput <= 0)) || (isNaN(cardFirstInput) || isNaN(cardSecondInput))) {
    alert("please provide valid positive number !!! Your input values are not valid !!! Try again Please!!! ");
    return;
  }

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
      <td>${count}</td>
      <td>${cardName}</td>
      <td class="abc">${total}<span>cm<sup>2</sup></span></td>
      <td>
      <button class="btn btn-accent text-white normal-case convert">Convert To m<sup>2</sup></button>
      <button class="btn btn-outline btn-error delete-btn">Delete</button></td>
      
    `;
  tableContainer.appendChild(tr);

  const convertValues = document.querySelectorAll(".convert");
  for (const value of convertValues) {
    value.addEventListener('click', function (e) {
      // console.log(e.target.parentNode.parentNode.childNodes[3].childNodes[0]);
      // let convertValue = totalArea / 10000;
      const convertValues = e.target.parentNode.parentNode.childNodes[3].childNodes[0];
      const cls = document.getElementsByClassName('abc')
      for (const cl of cls) {
        const convertToM2 = (parseFloat(convertValues.data / 10000));
        cl.innerText = convertToM2;
      }
      // .innerText = convertToM2
      // convertValue.innerText = newValue;
    })
  }


  const elements = document.querySelectorAll(".delete-btn");
  for (const element of elements) {
    element.addEventListener("click", function (e) {
      // console.log(e.target.parentNode.parentNode);
      e.target.parentNode.parentNode.style.display = "none";
    });
  }
}
// function setTextElementValueById(elementId, newValue) {
//   // const convertValues = document.querySelectorAll(".convert");
//   const convertValues = (elementId);
//   convertValues[0].innerText = newValue;
// }
