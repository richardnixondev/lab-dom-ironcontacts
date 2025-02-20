// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);



// Get the element from the spliced array
//const randomContact = splicedArr[0]; //unnecessary 
createNewLine(splicedArr[0]);

function createNewLine (contact){
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(exampleRow);

const deleteBtn = exampleRow.querySelector('.btn-delete');
deleteBtn.addEventListener('click', () => {
  exampleRow.remove(); 
});

const likeBtn = document.querySelector("#contacts > tr:nth-child(1) > td:nth-child(5) > button")
likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');

  const icon = likeBtn.querySelector('img');
  if (likeBtn.classList.contains('liked')) {
    icon.src = './images/icon-liked.png';  // Mudar a imagem ou ícone
  } else {
    icon.src = './images/icon.png';  // Voltar à imagem original
  }
});

}



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(contact => {
  createNewLine(contact); //
});

  
  // ITERATION 2 - Delete Buttons
  


 /// const deleteBtns = document.querySelectorAll('.btn-delete');  // Usar querySelectorAll

 // deleteBtns.forEach((btn) => {
 //   btn.addEventListener('click', () => {
 //     const row = btn.closest('tr');  // Encontre a linha (tr) onde o botão está
  //    row.remove();  // Remove a linha da tabela
 //   });
 // });


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
