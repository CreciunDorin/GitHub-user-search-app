const dark = document.querySelector('.dark-mode');
dark.addEventListener('click', () => {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('background-color', 'dark');
});

const light = document.querySelector('.light-mode'); 
light.addEventListener('click', () => { 
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('background-color', 'light');
});

window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('background-color') === 'dark'){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
    else if(localStorage.getItem('background-color') === 'light'){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
})