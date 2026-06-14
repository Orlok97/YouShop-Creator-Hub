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
    if(isDark){
        setTheme('dark');
        icon.setAttribute('name','sunny-outline');
    }else{
        setTheme('light');
        icon.setAttribute('name','moon-outline');
    }
    
    icon.setAttribute('size','large');
    icon.setAttribute('style','cursor:pointer;');
}

icon.addEventListener('click',toggleTheme);
console.log('pagina carregada');