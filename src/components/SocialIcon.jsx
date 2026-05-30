import discordIcon from '../assets/icons/discord-icon.svg'
import githubIcon from '../assets/icons/github.svg'
import telegramIcon from '../assets/icons/telegram.svg'

const icons = {
  discord: {
    icon: discordIcon,
    href: 'https://discord.gg/2MCPa5YKPG',
  },
  telegram: {
    icon: telegramIcon,
    href: 'https://t.me/ProtocolGame',
  },
  github: {
    icon: githubIcon,
    href: 'https://github.com/Superdeazi2',
  },
}

function SocialIcon({ name }) {
  const social = icons[name]

  if (!social) return null

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <img
        className="social-icon"
        src={social.icon}
        alt={name}
      />
    </a>
  )
}

export default SocialIcon