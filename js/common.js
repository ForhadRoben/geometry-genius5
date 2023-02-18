
// to get title and input field value we can use common function and get the same output by reducing the code and also reuse it when it is needed...

function getTitleAndInputValue(title, firstInput, secondInput) {

    const cardTitle = document.getElementById(title).innerText;
    const firstCard = document.getElementById(firstInput);
    const cardFirstInput = firstCard.value;
    const secondCard = document.getElementById(secondInput);
    const cardSecondInput = secondCard.value;
    firstCard.value = '';
    secondCard.value = '';


    // validation checking for all cards 
    if (((cardFirstInput === "" || cardSecondInput === "") || (cardFirstInput <= 0 || cardSecondInput <= 0)) || (isNaN(cardFirstInput) || isNaN(cardSecondInput))) {
        alert("Please provide valid positive number !!! Your input values are not valid !!! Try again Please!!! ");
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
        <td id="newValue">${total}</td>
        <td>cm<sup>2</sup></td>
        <td>
        <button class="btn btn-accent text-white normal-case convert">Convert m<sup>2</sup></button>
        <button class="btn btn-outline btn-error delete-btn">Delete</button></td>
        
      `;
    tableContainer.appendChild(tr);

    // convert centimeter to meter : optional task
    const convertValues = document.getElementsByClassName('convert');
    for (const value of convertValues) {
        // console.log(value);
        value.addEventListener('click', function (e) {
            // console.log(parseFloat(e.target.parentNode.parentNode.childNodes[5].innerText * .0001));
            const convertValue = e.target.parentNode.parentNode.childNodes[5].innerText;
            const convertToM2 = (parseFloat(convertValue * 0.0001)).toFixed(5);
            value.innerText = convertToM2;


        })
    }

    // optional: delete table data
    const elements = document.querySelectorAll(".delete-btn");
    for (const element of elements) {
        element.addEventListener("click", function (e) {
            // console.log(e.target.parentNode.parentNode);
            e.target.parentNode.parentNode.style.display = "none";
        });
    }
}