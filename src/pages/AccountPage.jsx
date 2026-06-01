import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { NavLink, useNavigate } from '../lib/router.jsx'
import { getCurrentUser, logoutUser } from '../data/authStorage.js'

function formatDate(value) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(value))
}

function ProfileLine({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-[18px] border-b border-[#6C5CE7]/15 py-[12px] last:border-b-0">
      <span className="ui-label text-muted text-[10px]">{label}</span>
      <span className="min-w-0 truncate text-right text-[14px] text-[#EAEAF0]">
        {value}
      </span>
    </div>
  )
}

function EmptyAccount() {
  return (
    <section className="panel panel-glow w-full max-w-[480px] rounded-[8px] p-[22px] md:p-[28px]">
      <h1 className="m-0 text-[24px] font-bold text-white">
        Профиль игрока
      </h1>
      <p className="body-text text-body mt-[14px] text-[14px] leading-[1.7]">
        Вы не вошли в аккаунт.
      </p>
      <Button as={NavLink} to="/login" className="mt-[20px] w-full">
        Войти
      </Button>
    </section>
  )
}

function AccountPage() {
  const navigate = useNavigate()
  const user = getCurrentUser()

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="main-bg">
        <section className="content-shell flex min-h-[calc(100dvh-176px)] items-center justify-center py-[40px]">
          {!user ? (
            <EmptyAccount />
          ) : (
            <section className="panel panel-glow w-full max-w-[500px] rounded-[8px] p-[22px] md:p-[28px]">
              <h1 className="m-0 text-[24px] font-bold text-white">
                Профиль игрока
              </h1>

              <div className="mt-[22px] flex flex-col items-center text-center">
                <div className="flex h-[86px] w-[86px] items-center justify-center rounded-[18px] border border-[#6C5CE7]/25 bg-[#6C5CE7]/15 text-[42px] text-[#9D7BFF]">
                  {user.avatar || 'Картинка'}
                </div>
                <h2 className="m-0 mt-[14px] max-w-full truncate text-[22px] font-bold text-white">
                  {user.nickname || 'Игрок'}
                </h2>
                <p className="m-0 mt-[6px] max-w-full truncate text-[13px] text-[#8E90B0]">
                  {user.email}
                </p>
              </div>

              <div className="mt-[22px] rounded-[8px] border border-[#6C5CE7]/15 bg-[#090A1A]/70 px-[14px]">
                <ProfileLine label="Уровень" value={user.level} />
                <ProfileLine
                  label="Дата регистрации"
                  value={formatDate(user.createdAt)}
                />
              </div>

              <Button
                type="button"
                className="mt-[22px] w-full"
                onClick={handleLogout}
              >
                Выйти
              </Button>
            </section>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AccountPage
