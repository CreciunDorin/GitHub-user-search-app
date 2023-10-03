const wrapper_anim = document.querySelector('.wrapper');

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        wrapper_anim.classList.add('active');
    }, 500);
})