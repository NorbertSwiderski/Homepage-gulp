console.log('Cześć i czołem! ;)');
const paragraph = document.querySelector('.paragraph--js');
paragraph.innerHTML= 'Testowy paragraf JS';
function nameAndAge(name, age){
    console.log(`Mam na imię ${name}. Mam ${age} lat`);
}
nameAndAge('Norbert', 21);
navigationButton = addEventListener('click', (e) =>{
    const navigationButton = document.querySelector('.navigation__button--js');
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});