function bgDark(){
    const backgroundChangeContainer = document.getElementById('background');
    backgroundChangeContainer.classList.add('dark-bg');
    backgroundChangeContainer.classList.remove('green-bg');
}
function bgGreen(){
    const backgroundChangeContainer = document.getElementById('background');
    backgroundChangeContainer.classList.add('green-bg');
    backgroundChangeContainer.classList.remove('dark-bg');
}