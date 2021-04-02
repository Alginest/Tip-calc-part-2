
// We need to select all 3 inputs and and the submit button
let amount = document.getElementById("bill");
let quality = document.getElementById('quility');
let people = document.getElementById('people');
const button = document.querySelector('.sub');
const text = document.querySelector('.textt');
let precent;
let bills;
let friends;

// Make sure input isnt empty
/*   if (bills === "" || precent === ""){
     alert('type in ur data');
   }
  if (friends === "" || friends <= 1) {
     friends = 1;
  }*/

// Make function to calculate the bill * tip - people

function calcTip (){
 let total = (bills * precent) / friends;
 total = Math.round(total * 100) / 100;
 total = total.toFixed(2);
  if (isNaN(total)) {
    return text.textContent = `U frogot Data.`;
  }else {
    text.textContent = `U should tip ${total}$ each.`;
  }
 
}

// Event listeners for button
button.addEventListener('click', calcTip);
amount.addEventListener('change', () => {
   bills = parseInt(amount.value);
})
quality.addEventListener('change', () => {
  precent = parseFloat(quality.value);
});
people.addEventListener('change', () => {
  friends = parseInt(people.value);
});

