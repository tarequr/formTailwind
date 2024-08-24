let mainMenu = document.getElementById('mainMenu');
let mobileIcon = document.getElementById('mobileIcon');

mobileIcon.onclick = () => {
    mainMenu.classList.toggle('hidden');
}