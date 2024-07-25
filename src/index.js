import './style.css'
import { Dropdown } from './dropdown'

const dropdownMenus = document.querySelectorAll('.dropdown-menu')
dropdownMenus.forEach((dropdownMenu) => {
    Dropdown(dropdownMenu)
})

function hideRestOfImageCarousel() {
    document.querySelectorAll('.image').forEach((imageElement) => {
        if (!imageElement.classList.contains('visible-image')) {
            imageElement.style.display = 'none'
        }
    })
}

function choosePreviousImage() {
    const previousImageButton = document.querySelector('.previous-image')
    previousImageButton.addEventListener('click', () => {
        const currentImageElement = document.querySelector('.visible-image')
        const previousElement = currentImageElement.previousElementSibling
        var previousImageElement
        if (previousElement === null) {
            previousImageElement =
                currentImageElement.parentNode.lastElementChild
        } else {
            previousImageElement = previousElement
        }
        currentImageElement.classList.remove('visible-image')
        currentImageElement.style.display = 'none'
        previousImageElement.classList.add('visible-image')
        previousImageElement.style.display = 'block'
    })
}

function chooseNextImage() {
    const nextImageButton = document.querySelector('.next-image')
    nextImageButton.addEventListener('click', () => {
        const currentImageElement = document.querySelector('.visible-image')
        const nextElement = currentImageElement.nextElementSibling
        var nextImageElement
        if (nextElement === null) {
            nextImageElement = currentImageElement.parentNode.firstElementChild
        } else {
            nextImageElement = nextElement
        }
        currentImageElement.classList.remove('visible-image')
        currentImageElement.style.display = 'none'
        nextImageElement.classList.add('visible-image')
        nextImageElement.style.display = 'block'
    })
}

hideRestOfImageCarousel()
choosePreviousImage()
chooseNextImage()
