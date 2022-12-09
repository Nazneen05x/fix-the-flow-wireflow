// let div = document.querySelector ('body > div')
// let addButton = document.getElementById("inputFieldButton")

// console.log(addButton)

// addButton.addEventListener('click', toggleAddButton)

// antwoordenArray = ["Test1", "Test2"];

// function toggleAddButton (){
//   let nieuweTekst = document.getElementById("inputField").value;
//   antwoordenArray.push(nieuweTekst);
// }

// for (let index = 0; index < antwoordenArray.length; index++) {
//   document.getElementById("TestList").innerHTML += "<li>" + antwoordenArray[index] + "</li>";
  
// }


// button selector ---- SELECTOR
let addButton = document.getElementById("inputFieldButton")

// EVENT
addButton.addEventListener('click', addListItem)

// Functie (recept)  nieuwe htlm elementen
function addListItem() {
  var newListItem = document.createElement('li');
  var newSpanItem = document.createElement('span');
  var newInfoItem = document.createElement('i');
  // var newIconItem = document.createElement('ion-icon');

  // Tekst uit input veld halen
  let input = document.querySelector('#inputField');
  let inputText = input.value;

  // VOEG TEKST TOE AAN NIEUWE LIST ITEM
  newListItem.innerHTML = inputText;

  // nesten
  // Voeg <i> to aan <span>
  newSpanItem.appendChild(newInfoItem)

  // Voeg <span> toe aan <li>
  newListItem.appendChild(newSpanItem)

  // Voeg <li> aan de <ul> in je HTML pagina
  document.querySelector('ul').appendChild(newListItem)

  // newIconItem.appendChild(ion-icon) 

  
}

