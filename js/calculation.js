document.getElementById('first-card-calculation').addEventListener('click', function () {
    const cardTitle = document.getElementById('first-card-title').innerText;
    const cardFirstInput = document.getElementById('first-card-first-input').value;
    const cardSecondInput = document.getElementById('first-card-second-input').value;
    const totalArea = parseFloat(cardFirstInput) * parseFloat(cardSecondInput);
    displayAreaTotal(cardTitle, totalArea);
    return totalArea;
})
function displayAreaTotal(cardName, total) {
    const table = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${cardName}</td>
      <td>${total}</td>
      <button class="btn btn-accent text-white">Convert To m<sup>2</sup></button>
      
    `;
    table.appendChild(tr);
    return total
}