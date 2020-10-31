const spans = document.querySelectorAll('h1 span');
spans.forEach(spans => spans.addEventListener('mouseover', function(e) {
    spans.classList.add('animated', 'rubberland')
}));
spans.forEach(spans => spans.addEventListener('mouseout', function(e) {
    spans.classList.remove('animated', 'rubberland')
}));


const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const jsBar = document.querySelector('.bar-js');
const phpBar = document.querySelector('.bar-php');
const symfonyBar = document.querySelector('.bar-symfony');

var t1 = new TimelineLite();

t1.fromTo(htmlBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeout })
    .fromTo(cssBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeout })
    .fromTo(jsBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeout })
    .fromTo(phpBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(80% - 6px)', ease: Power4.easeout })
    .fromTo(symfonyBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeout })


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: 'skills',
    triggeHook: 0
})

.setTween(t1)

.addTo(controller)


const showRequiredCategory = event => {
    const getId = event.getId
    const links = document.querySelectorAll('work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category - $ { getId }`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for (i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}