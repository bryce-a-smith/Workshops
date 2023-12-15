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
  const displayTodosDiv = $("#display-todos-div");

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

  function clearTodosDiv() {
    while(displayTodosDiv.firstChild) {
        displayTodosDiv.removeChild(displayTodosDiv.firstChild);
      }
  }

  async function displayTodos() {
    clearTodosDiv();

    fetch(`http://localhost:8083/api/todos/byuser/${usersSelect.value}`)
      .then((response) => response.json())
      .then((data) => {
        for (let todo of data) {
            // console.log(todo);
          buildAndDisplayCard(todo);
        }
      });
  }

  function buildAndDisplayCard(todo) {
    let currentCard = document.createElement("div");

    let currentH2 = document.createElement("h2");
    let currentH3 = document.createElement("h3");
    let currentP = document.createElement("p");
    let deadlineH4 = document.createElement("h4");
    let completedP = document.createElement("p");


    currentCard.classList.add("card");
    
    currentH2.innerText = todo.category;
    currentH3.innerText = `Priority: ${todo.priority}`;
    currentP.innerText = todo.description;
    deadlineH4.innerText = todo.deadline;
    completedP.innerText = `Completed: ${todo.completed}`;


    currentCard.appendChild(currentH2);
    currentCard.appendChild(currentH3);
    currentCard.appendChild(currentP);
    currentCard.appendChild(deadlineH4);
    currentCard.appendChild(completedP);


    displayTodosDiv.appendChild(currentCard);
  }

  //Function calls and wire-ups
  loadUsersSelect();

  usersSelect.addEventListener("change", displayTodos);
}

window.onload = init;
