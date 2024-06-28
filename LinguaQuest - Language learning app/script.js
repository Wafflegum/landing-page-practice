const blobs = document.querySelectorAll('.blob')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')

        }
    })
})

blobs.forEach(e => {
    observer.observe(e)
})

