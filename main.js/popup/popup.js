const openPopup = document.getElementById('open_popup');
const closePopup = document.getElementById('close_popup');
const popUp = document.getElementById('popup');

openPopup.addEventListener ('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    })

closePopup.addEventListener('click', () => {
    popUp.classList.remove('active')
})