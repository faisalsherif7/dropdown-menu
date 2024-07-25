import './style.css'
import { Dropdown } from './dropdown'

const dropdownMenus = document.querySelectorAll('.dropdown-menu')
dropdownMenus.forEach((dropdownMenu) => {
    Dropdown(dropdownMenu)
})
