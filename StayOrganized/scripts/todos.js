"use strict";

function init() {
  //query selector function
  // function $(selector) {
  //     return document.querySelector(selector);
  // }
  let $ = (selector) => document.querySelector(selector);

  //Get HTML elements
  // const usersSelect = document.querySelector("#users-select");
  const usersSelect = $("#users-select");

  //Functions
  async function loadUsersSelect() {
    fetch("http://localhost:8083/api/users")
      .then((response) => response.json())
      .then((data) => {
        for (let user of data) {
          userOptionSelect(user);
        }
      });
  }

  async function userOptionSelect(user) {
    let userOption = new Option(user.username, user.id);

    usersSelect.appendChild(userOption);
  }

  async function displayTodos() {
    fetch(`http://localhost:8083/api/todos/byuser/${usersSelect.value}`)
      .then((response) => response.json())
      .then((data) => {
        for (let todo of data) {
            console.log(todo);
          userOptionSelect(todo);
        }
      });
  }

//   async function buildAndDisplayCard(todo) {
//     let currentCard = document.createElement("div");

//     let currentH3 = document.createElement("h3");
//     let currentH5 = document.createElement("h5");
//     let currentP = document.createElement("p");
//     let currentP2 = document.createElement("p");

//     currentCard.classList.add("card");


//     currentH3.innerText = park.LocationName;
//     currentH5.innerText = `${park.Address}\n${park.City}, ${park.State} ${park.ZipCode}`;
//     currentP.innerText = `Phone: ${park.Phone}\nFax: ${park.Fax}`;
//     currentP2.innerText = `(${park.Latitude},${park.Longitude})`;



//     currentCard.appendChild(currentH3);
//     currentCard.appendChild(currentH5);
//     currentCard.appendChild(currentP);
//     currentCard.appendChild(currentP2);


//     displayParksDiv.appendChild(currentCard);
//   }

  //Function calls and wire-ups
  loadUsersSelect();

  usersSelect.addEventListener("change", displayTodos);
}

window.onload = init;
