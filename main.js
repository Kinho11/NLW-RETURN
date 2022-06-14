window.addEventListener('scroll' , onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)



}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2


    //veficar se a seçao passou da linha
    //quais dados vou precisar?

    //o topo da seçao
    const sectionTop = section.offsetTop

    //a altura da seçao
    const sectionHeight = section.offsetHeight

    //o top da seçao chegou ou ultrapassou a linha alto
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


    //verificar se a base esta abaixo da linha alvo
    //quais dados vou precisar?
    const sectionEndsAt = sectionTop + sectionHeight


    //o final da seçao passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


    // limites da seçao
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}] `)


    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }

}

function showNavOnScroll() {
    let navigation = document.querySelector('#navigation')
    
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButton(){
    let backToTop = document.querySelector('#backToTopButton')

    if(scrollY > 550){
        backToTop.classList.add('show')
    } else{
        backToTop.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expended')

}

function closeMenu(){
    document.body.classList.remove('menu-expended')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:700,
}).reveal(`#home,
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
`);


