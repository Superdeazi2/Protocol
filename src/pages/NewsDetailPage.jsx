import protocolBg from '../assets/bg/protocol-bg.png'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { newsItems } from '../data/newsItems.js'
import { NavLink } from '../lib/router.jsx'

function NewsVisual({ item }) {
  return (
    <div className="media-tile sci-border relative mt-[28px] min-h-[330px] select-none overflow-hidden max-sm:min-h-[230px]">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src={protocolBg}
        alt={item.imageLabel}
      />
      <div className="absolute inset-0 bg-[#070816]/38" />
      <div className="absolute bottom-[24px] left-[24px] max-w-[70%]">
        <span className="ui-label text-[12px] text-[#C9A7FF]">
          {item.imageLabel}
        </span>
      </div>
    </div>
  )
}

function NavNewsLink({ label, item }) {
  if (!item) {
    return (
      <div className="border-faint bg-[#090A1A]/45 border p-[12px] opacity-55">
        <span className="ui-label text-muted text-[10px]">{label}</span>
        <p className="body-text text-muted m-0 mt-[6px] text-[12px]">
          Нет записи
        </p>
      </div>
    )
  }

  return (
    <NavLink
      className="border-faint bg-[#090A1A]/55 block border p-[12px] transition hover:border-[#9D7BFF]/40 hover:bg-[#090A1A]/80"
      to={`/news/${item.slug}`}
    >
      <span className="ui-label text-muted text-[10px]">{label}</span>
      <div className="ui-label mt-[7px] flex flex-wrap gap-x-[10px] gap-y-1 text-[10px]">
        <span className="text-accent">v{item.version}</span>
        <span className="text-muted">{item.date}</span>
      </div>
      <p className="body-text text-body m-0 mt-[7px] text-[12px] leading-[1.45]">
        {item.title}
      </p>
    </NavLink>
  )
}

function InfoLine({ label, value }) {
  return (
    <div className="border-faint flex items-center justify-between gap-4 border-t py-[12px] first:border-t-0">
      <span className="ui-label text-muted text-[10px]">{label}</span>
      <span className="ui-label text-accent text-right text-[11px]">{value}</span>
    </div>
  )
}

function NewsSidebar({ item, previousItem, nextItem }) {
  return (
    <aside className="grid gap-[14px]">
      <div className="panel panel-glow sci-border p-[18px]">
        <h2 className="ui-label text-accent m-0 mb-[10px] select-none text-[13px]">
          Информация
        </h2>
        <InfoLine label="Категория" value={item.category} />
        <InfoLine label="Дата" value={item.date} />
        <InfoLine label="Версия" value={item.version} />
      </div>

      <div className="panel panel-glow sci-border p-[18px]">
        <h2 className="ui-label text-accent m-0 mb-[12px] select-none text-[13px]">
          Навигация
        </h2>
        <div className="grid gap-[10px]">
          <NavNewsLink label="Предыдущее обновление" item={previousItem} />
          <NavNewsLink label="Более новое обновление" item={nextItem} />
        </div>
      </div>
    </aside>
  )
}

function NewsNotFound() {
  return (
    <div className="page-shell">
      <Header />
      <main className="flex-1 pb-[70px] pt-[54px]">
        <div className="content-shell">
          <div className="mx-auto max-w-[760px]">
            <div className="panel panel-glow sci-border p-[28px] text-center">
              <h1 className="font-display text-accent m-0 select-none text-[34px] uppercase">
                Новость не найдена
              </h1>
              <p className="body-text text-body mx-auto mt-[14px] max-w-[430px] text-[14px] leading-[1.7]">
                Такой записи нет в списке новостей Protocol или ссылка была изменена.
              </p>
              <Button as={NavLink} to="/news" className="btn-primary mt-[22px]">
                Вернуться к новостям
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function NewsDetailPage({ params = {} }) {
  const itemIndex = newsItems.findIndex((item) => item.slug === params.slug)
  const item = newsItems[itemIndex]

  if (!item) {
    return <NewsNotFound />
  }

  const previousItem = newsItems[itemIndex + 1]
  const nextItem = newsItems[itemIndex - 1]

  return (
    <div className="page-shell">
      <Header />
      <main className="flex-1 pb-[70px] pt-[44px]">
        <div className="content-shell">
          <Button as={NavLink} to="/news" className="min-h-[40px] px-[18px]">
            ← Все новости
          </Button>

          <div className="ui-label mt-[28px] flex select-none flex-wrap items-center gap-x-[16px] gap-y-2 text-[12px]">
            <span className="text-accent">{item.category}</span>
            <span className="text-muted">{item.date}</span>
            <span className="text-muted">
              Version <span className="text-accent">{item.version}</span>
            </span>
          </div>

          <h1 className="font-display text-glow mt-[18px] max-w-[880px] select-none text-[48px] leading-[1.05] uppercase text-[#9D7BFF] max-md:text-[40px] max-sm:text-[32px]">
            {item.title}
          </h1>

          <p className="body-text text-body mt-[18px] max-w-[680px] text-[16px] leading-[1.7]">
            {item.description}
          </p>

          <NewsVisual item={item} />

          <div className="mt-[24px] grid grid-cols-[minmax(0,1fr)_300px] gap-[18px] max-lg:grid-cols-1">
            <article className="panel panel-glow sci-border bg-[#090A1A]/80 p-[24px] max-sm:p-[18px]">
              {item.content.map((section) => (
                <section
                  className="border-faint border-t py-[20px] first:border-t-0 first:pt-0 last:pb-0"
                  key={section.title}
                >
                  <h2 className="font-display text-accent m-0 select-none text-[22px] uppercase">
                    {section.title}
                  </h2>
                  <ul className="body-text text-body m-0 mt-[12px] grid list-none gap-[8px] p-0 text-[14px] leading-[1.75]">
                    {section.items.map((text) => (
                      <li className="flex gap-[10px]" key={text}>
                        <span className="text-accent select-none">-</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </article>

            <NewsSidebar
              item={item}
              previousItem={previousItem}
              nextItem={nextItem}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetailPage
