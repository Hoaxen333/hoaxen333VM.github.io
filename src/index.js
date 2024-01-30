const ham = document.querySelector('#ham')
const nav = document.querySelector('#navi');

ham.addEventListener('click',() => {
    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
    }
    else{
        nav.classList.add('hidden');
    }
});