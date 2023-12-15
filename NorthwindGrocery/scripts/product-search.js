"use strict";

function init() {
  let searchSelector = document.querySelector("#search-selector");

  async function loadCategories() {
    let response = await fetch(`http://localhost:8081/api/categories`);
    let data = await response.json();

    return data;
  }

  async function loadCategoriesSelect() {
    let categories = await loadCategories();

    
  }
}

window.onload = init;
