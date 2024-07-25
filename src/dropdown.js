function Dropdown(dropdownMenu) {
    const dropdownButton = dropdownMenu.querySelector('.dropdown-selector')
    const dropdownItems = dropdownMenu.querySelector('.dropdown-items')

    dropdownItems.style.display = 'none'
    dropdownButton.classList.add('invisible')

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

export { Dropdown }