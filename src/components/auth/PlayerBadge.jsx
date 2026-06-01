import { NavLink } from '../../lib/router.jsx'

function PlayerBadge({ user }) {
  return (
    <NavLink
      to="/account"
      className="flex min-h-10 max-w-[180px] items-center gap-[10px] rounded-[12px] border border-[#6C5CE7]/30 bg-[#0D1022]/70 px-[12px] text-left transition hover:border-[#9D7BFF]/60"
      aria-label="Профиль игрока"
    >
      <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[8px] bg-[#6C5CE7]/20 text-[14px] text-[#9D7BFF]">
        {user.avatar || 'Картинка'}
      </span>
      <span className="ui-label truncate text-[11px] text-[#EAEAF0]">
        {user.nickname || 'Игрок'}
      </span>
    </NavLink>
  )
}

export default PlayerBadge
