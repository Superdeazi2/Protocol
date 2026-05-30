import { navigationItems } from '../data/navigation.js'
import protocolLogo from '../assets/fonts/svg/protocol_logo.svg'
import SocialIcon from './SocialIcon.jsx'

const footerLinks = [...navigationItems.slice(1), { label: 'Поддержка', to: '#' }]
const socials = ['discord', 'telegram', 'github']

function FooterLogo() {
  return (
    <a className="select-none cursor-default" href="/">
      <img
        src={protocolLogo}
        alt="logo"
      />
    </a>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell flex min-h-[68px] items-center justify-between gap-6 py-4 max-md:flex-col">
        <FooterLogo />
        <nav className="flex flex-wrap justify-center gap-6" >
          {footerLinks.map((item) => (
            <a className="footer-link" href={item.to} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {socials.map((name) => (
            <a href="#" aria-label={name} key={name}>
              <SocialIcon name={name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
