import './style.css';

const dropdownSelector = document.querySelector('.dropdown-selector')
const dropdownItems = document.querySelector('.dropdown-items')

dropdownItems.style.display = 'none'
dropdownSelector.classList.add('invisible')

function Dropdown(dropdownButton, dropdownItems) {
    dropdownButton.addEventListener('click', (event) => {
        if (dropdownButton.classList.contains('invisible')) {
            dropdownButton.classList.remove('invisible')
            dropdownItems.style.display = 'block'
        } else {
            dropdownButton.classList.add('invisible')
            dropdownItems.style.display = 'none'
        }
    })
}

Dropdown(dropdownSelector, dropdownItems)