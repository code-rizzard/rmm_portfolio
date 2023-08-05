
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <header
    className="border-b border-brand-secondary py-6 px-4 min-h-10 "
    >
        <nav
        className="flex justify-between items-center"
        >
            NAV
            <GiHamburgerMenu/>
        </nav>
    </header>
  )
}

export default Navbar