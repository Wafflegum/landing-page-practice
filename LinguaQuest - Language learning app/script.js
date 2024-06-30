const heroBlob = document.querySelector('#hero__blob');
const aboutBlobs = document.querySelectorAll('.blob-container')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting)
        console.log(entry)

    })
}, {
    rootMargin: "-35% 0% -35% 0%"
})

observer.observe(heroBlob)
aboutBlobs.forEach(e => {
    observer.observe(e)
})

const aboutPage = document.getElementById('about')
const aboutBtn = document.getElementById('aboutBtn')

aboutBtn.addEventListener('click', () => {
    aboutPage.scrollIntoView({behavior: 'smooth'})
})

const pricingPage = document.getElementById('pricing')
const pricingBtn = document.getElementById('pricingBtn')

pricingBtn.addEventListener('click', () => {
    pricing.scrollIntoView({behavior: 'smooth'})
})