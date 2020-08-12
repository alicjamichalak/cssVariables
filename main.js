let isDark = false;

let button = document.querySelector('.homework__button');

button.addEventListener('click', () => {
    if(isDark){
        document.documentElement.style.setProperty('--background-color','#fefefe');
        document.documentElement.style.setProperty('--text-color','#333333');
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color','#333333');
        document.documentElement.style.setProperty('--text-color','#fefefe');
        isDark = true;
    }
})