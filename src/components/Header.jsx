import { useState } from 'react'
import { NavLink } from '../lib/router.jsx'
import { navigationItems } from '../data/navigation.js'
import menuBurgerIcon from '../assets/fonts/svg/menu_burgerochek.svg'
import menuBurgerOpenIcon from '../assets/fonts/svg/menu_burgerochek_open.svg'
import protocolLogo from '../assets/fonts/svg/protocol_logo.svg'
import Button from './Button.jsx'

function Logo() {
  return (
    <NavLink to="/" className="select-none cursor-default" aria-label="Protocol">
      <img
        src={protocolLogo}
        alt="logo"
        aria-hidden="true"
        draggable="false"
      />
    </NavLink>
  )
}

function Nav({ isOpen, onNavigate }) {
  return (
    <nav
      className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}
      aria-label="Основная навигация"
    >
      <ul className="m-0 flex list-none items-center gap-12 p-0 max-lg:gap-7">
        {navigationItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'site-nav__link site-nav__link--active ui-label'
                  : 'site-nav__link ui-label'
              }
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function MenuButton({ isOpen, onClick }) {
  return (
    <button
      className={`menu-button ${isOpen ? 'menu-button--open' : ''}`}
      type="button"
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <img
        className="menu-button__icon menu-button__icon--closed"
        src={menuBurgerIcon}
        alt="burger menu icon"
        aria-hidden="true"
      />
      <img
        className="menu-button__icon menu-button__icon--open"
        src={menuBurgerOpenIcon}
        alt="burger menu icon"
        aria-hidden="true"
      />
    </button>
  )
}

function LoginButton() {
  return (
    <Button className="min-h-10 w-28 px-0 max-sm:w-24">
      Войти
    </Button>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="content-shell relative z-20 flex h-[88px] items-center justify-between">
        <Logo />
        <Nav isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
        <div className="flex items-center gap-3">
          <LoginButton />
          <MenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
