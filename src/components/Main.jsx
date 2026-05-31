import Button from './Button.jsx'
import NewsPanel from './NewsPanel.jsx'

const statusItems = [
  'СТАТУС ПРОЕКТА',
  'СБОРКА: 0.0.1',
  'ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ: 1 ДЕНЬ НАЗАД',
]

function Main() {
  return (
    <section className="main-bg">
      <div className="content-shell relative z-10 grid min-h-[480px] grid-cols-[minmax(330px,1fr)_330px] items-center gap-9 py-[34px] pb-5 max-lg:grid-cols-1 max-md:items-start max-md:py-[42px] max-md:pb-[30px]">
        <div className="w-[min(100%,520px)] min-w-0">
          <p className="ui-label text-accent m-0 mb-[18px] text-[18px] max-sm:text-[14px] max-sm:leading-[1.4] select-none">Планета расколота</p>
          <h1 className="main-title text-glow select-none">Protocol</h1>
          <p className="body-text text-body mt-[22px] max-w-[420px] text-[15px] leading-[1.7]">
            Когда весь мир пал под натиском паразитического роя, надежды почти не осталось. Но в твоих руках оказался древний кристалл, способный поднимать зараженные земли в небо. Очисти каждый фрагмент, стань сильнее и верни планету к жизни.
          </p>

          <div className="select-none mt-[30px] flex flex-wrap gap-[14px] max-sm:flex-col">
            <Button className="btn-primary">Играть</Button>
            <Button>Смотреть трейлер</Button>
          </div>

          <div className="panel sci-border ui-label text-body mt-[30px] inline-flex flex-wrap text-[11px] max-sm:grid max-sm:w-full " aria-label="Статус проекта">
            {statusItems.map((item, index) => (
              <span
                key={item}
                className={`border-faint border-l px-[14px] py-3 first:border-l-0 max-sm:border-l-0 max-sm:border-t max-sm:first:border-t-0 ${index === 0 ? 'text-accent' : ''
                  }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <NewsPanel />
      </div>
    </section>
  )
}

export default Main
