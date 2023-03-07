`use strict`;

const login_container = document.querySelector(`.login_container`),
    tabBtn = document.querySelector(`.tabBtn`),
    login_tab = document.getElementsByClassName(`login_tab`);

const login_Box = document.getElementsByClassName(`login_Box`);

let beforeTab = login_tab[0];
login_Box[0].style.display = 'block';

tabBtn.addEventListener(`click`, (e) => {
    const targetEvent = e.target;
    e.preventDefault();

    if(targetEvent.tagName === 'A') {
        beforeTab.classList.remove(`on`);
        targetEvent.closest('li').classList.add(`on`);

        if (beforeTab.classList.contains("login_tab_mem")) {
            login_Box[1].style.display = 'block';
            login_Box[0].style.display = 'none';
        }
        if (beforeTab.classList.contains("login_tab_nomem")) {
            login_Box[0].style.display = 'block';
            login_Box[1].style.display = 'none';
        }

        beforeTab = targetEvent.closest(`li`);
    }
});