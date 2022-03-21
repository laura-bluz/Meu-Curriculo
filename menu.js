const btnMobile = document.getElementById('btn-mobile');
const btnMobileClose = document.getElementById('btn-mobile-close');


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

btnMobileClose.addEventListener('click', toggleMenu);
btnMobileClose.addEventListener('touchstart', toggleMenu);


function toggleMenu(event) {
    if (event.type === 'touchstart')
        event.preventDefault();
    const nav = document.getElementById('topo-nav');
    nav.classList.toggle('active');
    if (event.type === 'click' || 'touchstart')
        btnMobileClose.classList.toggle('no-active');
}