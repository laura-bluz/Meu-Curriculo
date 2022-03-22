const btnMobile = document.getElementById('btn-mobile');
const btnMobileClose = document.getElementById('btn-mobile-close');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

btnMobileClose.addEventListener('click', toggleMenu);
btnMobileClose.addEventListener('touchstart', toggleMenu);


const nav = document.getElementById('topo-nav');

function toggleMenu(event) {
    if (event.type === 'touchstart')
        event.preventDefault();
    nav.classList.toggle('active');
}


const navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
  }

for(var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}

