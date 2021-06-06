const dishPrice = document.querySelector('.price');
const dishTip = document.querySelector('.tip');
const numOfPeople = document.querySelector('.people');
const clearAll = document.querySelector('.clearBtn');

function Calc(){
    let tip = (dishPrice.valueAsNumber) * (dishTip.value / 100);
    let totalAmount = (dishPrice.valueAsNumber) + (tip);
    let tipPerPerson = tip / numOfPeople.value;
    let totalPerPerson = totalAmount / numOfPeople.value;
   
    
    if (dishPrice.valueAsNumber=="" || dishTip.value=="" || numOfPeople.value=="") {
            document.querySelector('h2').textContent = "Please input all fields correctly.";
            document.querySelector('h2').style.textAlign = "center";
      } else{
            document.querySelector('.p1').innerHTML = "Tip:";
            document.querySelector('.p5').innerHTML = "$" + tip.toFixed(2);

            document.querySelector('.p2').innerHTML = "Total Amount:";
            document.querySelector('.p6').innerHTML = "$" + totalAmount.toFixed(2);

            document.querySelector('.p3').innerHTML = "Tip Per Person:";
            document.querySelector('.p7').innerHTML = "$" + tipPerPerson.toFixed(2);

            document.querySelector('.p4').innerHTML = "Total Per Person:";
            document.querySelector('.p8').innerHTML = "$" + totalPerPerson.toFixed(2);

            document.querySelector('h2').innerHTML = "RESULT";
            document.querySelector('h2').style.backgroundColor = "#477721";
            document.querySelector('h2').style.color = "#ffffff";
            document.querySelector('h2').style.padding = "10px";
      }
}

let inputs = document.querySelectorAll('input');

clearAll.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '');

    document.querySelector('h2').innerHTML = '';
    document.querySelector('h2').style = '';

    document.querySelector('.p1').innerHTML = '';
    document.querySelector('.p5').innerHTML = '';

    document.querySelector('.p2').innerHTML = '';
    document.querySelector('.p6').innerHTML = '';

    document.querySelector('.p3').innerHTML = '';
    document.querySelector('.p7').innerHTML = '';
    
    document.querySelector('.p4').innerHTML = '';
    document.querySelector('.p8').innerHTML = '';
});
