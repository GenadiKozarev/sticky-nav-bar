const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const transformNav = () => {
    if (window.scrollY >= topOfNav) {
        // Adjust for the nav height since its sticky positioning removes it from the document flow.
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('transformed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('transformed-nav');
    }
};

window.addEventListener('scroll', transformNav);
