const btnShow = document.querySelector('.btn__show');
const body = document.querySelector('body');

if(btnShow) {
    btnShow.addEventListener('click', () => {
        body.classList.add('show');
    })
}

if(btnBack) {
    btnShow.addEventListener('click', () => {
        body.classList.remove('sback');
    })
}