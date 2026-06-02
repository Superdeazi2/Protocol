import protocolBg from '../assets/bg/protocol-bg.png'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { newsItems } from '../data/newsItems.js'
import { NavLink } from '../lib/router.jsx'

function NewsCover({ item, className = '' }) {
  return (
    <div className={`media-tile relative select-none overflow-hidden ${className}`.trim()}>
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src={protocolBg}
        alt={item.imageLabel}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#070816]/35" />
      <span className="ui-label absolute bottom-[18px] left-[18px] text-[11px] text-[#C9A7FF]">
        {item.imageLabel}
      </span>
    </div>
  )
}

function NewsVersion({ value }) {
  return (
    <span className="ui-label text-muted text-[11px]">
      Version <span className="text-accent">{value}</span>
    </span>
  )
}

function MainNews({ item }) {
  return (
    <article className="panel panel-glow sci-border mt-[34px] grid min-h-[360px] grid-cols-[55fr_45fr] overflow-hidden max-lg:grid-cols-1">
      <NewsCover item={item} className="min-h-[360px] max-lg:min-h-[300px] max-sm:min-h-[230px]" />

      <div className="flex min-h-[360px] flex-col p-[30px] max-sm:min-h-0 max-sm:p-[18px]">
        <div className="ui-label select-none flex flex-wrap items-center gap-x-[16px] gap-y-2 text-[12px]">
          <span className="text-accent">{item.category}</span>
          <span className="text-muted">{item.date}</span>
        </div>

        <h2 className="font-display text-glow select-none mt-[28px] text-[34px] leading-[1.05] uppercase text-[#9D7BFF] max-sm:text-[26px]">
          {item.title}
        </h2>

        <p className="body-text text-body mt-[18px] max-w-[430px] text-[15px] leading-[1.7]">
          {item.description}
        </p>

        <div className="border-faint mt-auto border-t pt-[22px]">
          <div className="flex flex-wrap items-center justify-between gap-[14px]">
            <NewsVersion value={item.version} />
            <Button as={NavLink} to={`/news/${item.slug}`} className="btn-primary min-h-[42px] px-[18px] hover:shadow-[0_0_34px_rgba(157,123,255,0.38)]">
              Читать подробнее
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

function NewsCard({ item }) {
  return (
    <NavLink to={`/news/${item.slug}`} className="feature-card panel panel-glow sci-border flex min-h-[288px] flex-col p-[14px]">
      <article className="flex flex-1 flex-col">
        <div className="ui-label select-none flex items-start justify-between gap-3 text-[10px]">
          <span className="text-accent">{item.category}</span>
          <span className="text-muted text-right">{item.date}</span>
        </div>

        <NewsCover item={item} className="mt-[14px] h-[106px]" />

        <h3 className="font-display text-accent select-none mt-[14px] text-[16px] leading-[1.2] uppercase">
          {item.title}
        </h3>

        <p className="body-text text-body mt-[10px] text-[13px] leading-[1.5]">
          {item.description}
        </p>

        <div className="mt-auto pt-[14px]">
          <NewsVersion value={item.version} />
        </div>
      </article>
    </NavLink>
  )
}

function NewsPage() {
  const [mainNews, ...historyNews] = newsItems

  return (
    <div className="page-shell">
      <Header />
      <main className="flex-1 pb-[62px] pt-[46px]">
        <div className="content-shell">
          <p className="ui-label text-accent m-0 mb-[18px] text-[18px] max-sm:text-[14px] max-sm:leading-[1.4] select-none">
            Новости Protocol
          </p>
          <h1 className="main-title text-glow select-none">
            Новости
          </h1>
          <p className="body-text text-body mt-[18px] max-w-[560px] text-[15px] leading-[1.7]">
            Обновления проекта, заметки разработки и важные изменения игры.
          </p>

          <MainNews item={mainNews} />

          <div className="mt-[42px] flex select-none items-center gap-[18px]">
            <h2 className="ui-label text-accent m-0 shrink-0 text-[15px]">
              История новостей
            </h2>
            <div className="h-px flex-1 bg-[#9D7BFF]/20" />
          </div>

          <div className="mt-[18px] grid grid-cols-5 gap-[14px] max-lg:grid-cols-2 max-sm:grid-cols-1">
            {historyNews.map((item) => (
              <NewsCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NewsPage
