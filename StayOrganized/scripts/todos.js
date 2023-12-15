"use strict"

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
        let usersArray = [];

        fetch("http://localhost:8083/api/users")
        .then((response) => response.json())
        .then((data) => {
            for(let user of data) {
                userOptionSelect(user);
            }
        });

    }

    async function userOptionSelect(user) {
        let userOption = new Option(user.username, user.id);

        usersSelect.appendChild(userOption);
    }

    //Function calls and wire-ups
    loadUsersSelect()
}

window.onload = init;