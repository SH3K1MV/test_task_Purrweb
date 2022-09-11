function scrollTo(element) {
    window.scroll({
        left: 0,
        top:element.offsetTop,
        behavior: "smooth"
    })
}

const button = document.querySelector('.smooth');
const spotlight = document.querySelector('.spotlight')

button.addEventListener('click' , () => {
    scrollTo(spotlight);
})

const get = document.querySelector('#getstarted');
const contactUs = document.querySelector('.contact_us')

get.addEventListener('click' , () => {
    scrollTo(contactUs);
})
