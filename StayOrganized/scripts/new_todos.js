"use strict";

function init() {
  let $ = (selector) => document.querySelector(selector);

  const usersSelect = $("#users-select");
  const categorySelect = $("#category-select");
  const urgencySelect = $("#urgency-select");
  const descriptionTextarea = $("#description-textarea");
  const dateText = $("#date-text");

  async function loadUsersSelect() {
    fetch("http://localhost:8083/api/users")
      .then((response) => response.json())
      .then((data) => {
        for (let user of data) {
          userOptionSelect(user);
        }
      });
  }

  async function loadCategorySelect() {
    fetch("http://localhost:8083/api/categories")
      .then((response) => response.json())
      .then((data) => {
        for (let category of data) {
          categoryOptionSelect(category);
        }
      });
  }

  async function userOptionSelect(user) {
    let userOption = new Option(user.username, user.id);

    usersSelect.appendChild(userOption);
  }

  async function categoryOptionSelect(category) {
    let categoryOption = new Option(category.name, category.id);

    categorySelect.appendChild(categoryOption);
  }

  loadUsersSelect();
  loadCategorySelect();
}

window.onload = init;
