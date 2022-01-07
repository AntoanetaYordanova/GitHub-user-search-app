const themeToggle = document.querySelector('.themeSection');
const checkbox = document.getElementById('themeBox');
const linkEl = document.querySelector('link');
const bodyDiv = document.querySelector('.body');
const inputDiv = document.querySelector('.searchUserSection');
const userSectionDiv = document.querySelector('.userSection');
const searchInput = document.querySelector('form input');

themeToggle.addEventListener('click', changeTheme);

function changeTheme(ev) {
    if(!checkbox.checked) {
        console.log('ok');
       bodyDiv.classList.add('darkBody');
       inputDiv.classList.add('darkElBg');
       userSectionDiv.classList.add('darkElBg');
       searchInput.classList.add('darkElBg');
       
    } else {
       
    }
}
