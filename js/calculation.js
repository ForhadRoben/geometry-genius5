// blog link 
document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href = 'blog.html';
})

// optional: edit and enable input field
const Fields = document.getElementsByClassName("click-edit");
for (const field of Fields) {
  // console.log(field);
  field.addEventListener("click", function (e) {
    // console.log(e.target.parentNode.parentNode.childNodes[7].children[0])
    e.target.parentNode.parentNode.childNodes[7].children[0].removeAttribute('disabled')
    e.target.parentNode.parentNode.childNodes[7].children[2].removeAttribute('disabled')
    e.target.parentNode.parentNode.childNodes[7].children[4].removeAttribute('disabled')
  });
}



let count = 0; //initial count = 0

// triangle calculation
document.getElementById('first-card-calculation').addEventListener('click', function () {
  const cardValue = getTitleAndInputValue("first-card-title", "first-card-first-input", "first-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  count += 1;
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// rectangle calculation
document.getElementById('second-card-calculation').addEventListener('click', function () {
  const cardValue = getTitleAndInputValue("second-card-title", "second-card-first-input", "second-card-second-input")
  const totalArea = (parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  count += 1;
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// parallelogram calculation
document.getElementById('third-card-calculation').addEventListener('click', function () {
  const cardValue = getTitleAndInputValue("third-card-title", "third-card-first-input", "third-card-second-input")
  const totalArea = (parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  count += 1;
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// rhombus calculation
document.getElementById('fourth-card-calculation').addEventListener('click', function () {
  const cardValue = getTitleAndInputValue("fourth-card-title", "fourth-card-first-input", "fourth-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  count += 1;
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// pentagon calculation
document.getElementById('fifth-card-calculation').addEventListener('click', function () {
  const cardValue = getTitleAndInputValue("fifth-card-title", "fifth-card-first-input", "fifth-card-second-input")
  const totalArea = (.5 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);
  count += 1;
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})

// ellipse calculation
document.getElementById('sixth-card-calculation').addEventListener('click', function () {

  const cardValue = getTitleAndInputValue("sixth-card-title", "sixth-card-first-input", "sixth-card-second-input")
  const totalArea = (3.14 * parseFloat(cardValue.cardFirstInputValue) * parseFloat(cardValue.cardSecondInputValue)).toFixed(2);

  count += 1;
  // console.log(totalArea);
  displayAreaTotal(cardValue.cardTitleName, totalArea);

})


// background  card design randomly : bonus task
const cardBgColors = document.getElementsByClassName('card-bg');
for (const bgColor of cardBgColors) {
  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  bgColor.addEventListener('mouseenter', function () {
    const randomCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    bgColor.style.backgroundColor = randomCol;

  })
}
