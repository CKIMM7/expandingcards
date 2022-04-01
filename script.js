const panels = document.querySelectorAll('.panel')
// console.log(panels)
// console.log(panels[0])

panels.forEach(panel => {
    // console.log(panel)
    //only the panel that is clicked on but
    //all panels have this eventlistner for click
    panel.addEventListener('click', () => {
        console.log('current panel')
        console.log(panel)
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        console.log(`panel from removeActive`)
        console.log(panel)
        panel.classList.remove('active')
    })
}

