import { newsItems } from '../data/news.js'

function NewsPanel() {
  return (
    <aside className="panel panel-glow sci-border w-[330px] p-[22px] max-lg:w-full" aria-label="Последние новости">
      <h2 className="ui-label m-0 mb-[18px] text-[14px]">Последние новости</h2>

      <div className="grid gap-[14px]">
        {newsItems.map((item) => (
          <article className="border-faint surface-card grid grid-cols-[74px_1fr] items-center gap-3 border p-[10px]" key={item.title}>
            <div className="media-tile h-[58px]" />
            <div>
              <div className="ui-label text-accent flex justify-between gap-2 text-[10px]">
                <span>{item.tag}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="body-text text-body m-0 mt-1.5 text-[13px] leading-[1.35]">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </aside>
  )
}

export default NewsPanel
