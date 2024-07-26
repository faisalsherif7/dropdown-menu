import './style.css'
import { Dropdown } from './dropdown'

function intializeDropdowns() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu')
    dropdownMenus.forEach((dropdownMenu) => {
        Dropdown(dropdownMenu)
    })
}

function hideRestOfImageCarousel() {
    document.querySelectorAll('.image').forEach((imageElement) => {
        if (!imageElement.classList.contains('visible-image')) {
            imageElement.style.display = 'none'
        }
    })
}

function choosePreviousImage() {
    const previousImageButton = document.querySelector('.previous-image-button')
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

        updateNavigationDot()
    })
}

function chooseNextImage() {
    const nextImageButton = document.querySelector('.next-image-button')
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

        updateNavigationDot()
    })
}

intializeDropdowns()
hideRestOfImageCarousel()
choosePreviousImage()
chooseNextImage()

function updateNavigationDot() {
    const currentImageValue = document.querySelector('.visible-image').getAttribute('data-value')
    document.querySelector('.current-image-dot').classList.remove('current-image-dot')
    document.querySelector(`[class="dot"][data-value="${currentImageValue}`).classList.add('current-image-dot')
    console.log('here')
}

