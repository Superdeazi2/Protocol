import Button from './Button.jsx'
import protocolBg from '../assets/bg/protocol-bg.png'
import { accountStats, playerStats } from '../data/stats.js'

function StatIcon() {
  return (
    <svg className="icon-accent h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Zm0 4.2-4.3 2.4v4.8l4.3 2.4 4.3-2.4V9.6L12 7.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function BottomInfo() {
  return (
    <section className="content-shell mt-6 grid grid-cols-[1.35fr_1fr] gap-4 max-lg:grid-cols-1">
      <div className="panel panel-glow sci-border min-h-[104px] p-5">
        <h2 className="ui-label text-accent m-0 text-[13px]">Статистика игроков</h2>
        <div className="mt-4 grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {playerStats.map((item) => (
            <div className="flex items-start gap-2" key={item.label}>
              <StatIcon name={item.icon} />
              <div>
                <div className="stat-label">{item.label}</div>
                <div className="stat-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel panel-glow sci-border min-h-[104px] p-5">
        <h2 className="ui-label text-accent m-0 text-[13px]">Ваш аккаунт</h2>
        <div className="mt-4 grid grid-cols-[48px_1fr_auto] items-center gap-4 max-md:grid-cols-[48px_1fr]">
          <img
            className="border-soft h-12 w-12 border object-cover"
            src={protocolBg}
            alt=""
          />
          <div>
            <div className="stat-value">Lv. 3</div>
            <div className="stat-label mt-1">4 250 / 7 800 XP</div>
            <div className="account-progress mt-2">
              <span style={{ width: '54%' }} />
            </div>
          </div>
          <Button className="btn-primary max-md:col-span-2">
            Войти в аккаунт
          </Button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
          {accountStats.map((item) => (
            <div key={item.label}>
              <div className="stat-label">{item.label}</div>
              <div className="stat-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BottomInfo
