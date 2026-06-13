const theme=document.querySelector('html');
const icon=document.querySelector('#themeIcon');
let isDark=false;

const getTheme=()=>{
    return theme.getAttribute('data-bs-theme');
}

const setTheme=(t)=>{
    theme.setAttribute('data-bs-theme',t);
}
const toggleTheme=()=>{
    isDark=!isDark;
    console.log(icon.getAttribute('name'))
    if(isDark){
        setTheme('dark');
        icon.setAttribute('name','sunny');
    }else{
        setTheme('light');
        icon.setAttribute('name','moon')
    }
}

icon.addEventListener('click',toggleTheme);
console.log('pagina carregada')

