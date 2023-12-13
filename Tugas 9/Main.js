let search = document.querySelector('.fa-solid-magnifying-glass');

document.querySelector('#fa-solid-magnifying-glass').onclick = () => {
        search.classList.toggle('active');
}




let header = document.querySelector('header');
window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scroll > 0);
});