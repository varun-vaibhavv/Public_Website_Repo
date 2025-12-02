// MODAL FUNCTIONALITY
const modal_fac = document.getElementById('modal_fac');
const seeMoreBtn1 = document.getElementById('seeMoreBtn1');
const closeBtn1 = document.getElementById('closeBtn1');

seeMoreBtn1.addEventListener('click', () => {
    modal_fac.style.display = 'flex';
    console.log('Opening modal: modal_fac');
});

closeBtn1.addEventListener('click', () => {
    modal_fac.style.display = 'none';
    console.log('Closing modal: modal_fac');
});

const modal_prog = document.getElementById('modal_prog');
const seeMoreBtn2 = document.getElementById('seeMoreBtn2');
const closeBtn2 = document.getElementById('closeBtn2');

seeMoreBtn2.addEventListener('click', () => {
    modal_prog.style.display = 'flex';
    console.log('Opening modal: modal_prog');
});

closeBtn2.addEventListener('click', () => {
    modal_prog.style.display = 'none';
    console.log('Closing modal: modal_prog');
});

const modal_princ = document.getElementById('modal_princ');
const seeMoreBtn3 = document.getElementById('seeMoreBtn3');
const closeBtn3 = document.getElementById('closeBtn3');

seeMoreBtn3.addEventListener('click', () => {
    modal_princ.style.display = 'flex';
    console.log('Opening modal: modal_princ');
});

closeBtn3.addEventListener('click', () => {
    modal_princ.style.display = 'none';
    console.log('Closing modal: modal_princ');
});

window.addEventListener('click', (event) => {
    if (event.target === modal_fac) {
        modal_fac.style.display = 'none';
        console.log('Clicked outside: Closing modal_fac');
    }
    if (event.target === modal_prog) {
        modal_prog.style.display = 'none';
        console.log('Clicked outside: Closing modal_prog');
    }
    if (event.target === modal_princ) {
        modal_princ.style.display = 'none';
        console.log('Clicked outside: Closing modal_princ');
    }
});

// SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
