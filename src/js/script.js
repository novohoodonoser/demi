/*
const howItWorksLink = document.getElementById('howItWorks');
const offersLink = document.getElementById('offersLink');
const successStoriesLink = document.getElementById('successStoriesLink');
const successStories = document.getElementById('successStories');
const offers = document.getElementById('offers');
const about = document.getElementById('about');


const howItWorks = function () {
    about.classList.remove('invisible');
    offers.classList.add('invisible');
    successStories.classList.add('invisible')
};
const showOffers = function () {
    offers.classList.remove('invisible');
    successStories.classList.add('invisible');
    about.classList.add('invisible');
};

const showSuccessStories = function () {
    successStories.classList.remove('invisible');
    offers.classList.add('invisible');
    about.classList.add('invisible');
};

howItWorksLink.addEventListener('click',howItWorks);
offersLink.addEventListener('click',showOffers);
successStoriesLink.addEventListener('click',showSuccessStories);
*/

var slider = tns({
    container: '.pride__container',
    items: 2,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
});
