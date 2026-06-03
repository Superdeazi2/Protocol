import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import {
  aboutLinks,
  aboutProjectCards,
  aboutSections,
  aboutTechStack,
} from '../data/aboutGameData.js'

function ExternalButton({ href, children, variant = 'secondary' }) {
  return (
    <Button
      as="a"
      className={`${variant === 'primary' ? 'btn-primary' : ''} min-h-[44px] px-[18px]`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </Button>
  )
}

function SmallCard({ title, text }) {
  return (
    <article className="panel panel-glow sci-border p-[18px] transition hover:border-[#9D7BFF]/50 hover:bg-[#6C5CE7]/10">
      <div className="mb-[14px] h-[9px] w-[9px] rotate-45 border border-[#9D7BFF] bg-[#090A1A]" />
      <h3 className="font-display text-[18px] uppercase leading-[1.2] text-[#C9A7FF]">
        {title}
      </h3>
      {text ? (
        <p className="body-text mt-[10px] text-[13px] leading-[1.6] text-[#B8B9D4]">
          {text}
        </p>
      ) : null}
    </article>
  )
}

function HeroVisual() {
  return (
    <div className="about-visual panel panel-glow sci-border">
      <div className="about-visual__core" />
      <div className="about-visual__line" />
      <div className="about-visual__platform" />
      <div className="relative z-10 flex flex-wrap gap-[10px]">
        {['Godot', 'Indie project', 'Roguelike'].map((badge) => (
          <span
            className="ui-label border border-[#6C5CE7]/30 bg-[#090A1A]/80 px-[12px] py-[8px] text-[10px] text-[#C9A7FF]"
            key={badge}
          >
            {badge}
          </span>
        ))}
      </div>
      <p className="ui-label absolute bottom-[22px] left-[22px] z-10 text-[11px] text-[#6E7191]">
        Protocol
      </p>
    </div>
  )
}

function HeroBlock() {
  return (
    <section className="main-bg">
      <div className="content-shell relative z-10 grid min-h-[480px] grid-cols-[minmax(330px,1fr)_minmax(360px,520px)] items-center gap-9 py-[15px] pb-5 max-lg:grid-cols-1 max-md:items-start max-md:py-[42px] max-md:pb-[30px]">
        <div className="w-[min(100%,520px)] min-w-0">
          <p className="ui-label text-accent m-0 mb-[18px] select-none text-[18px] max-sm:text-[14px] max-sm:leading-[1.4]">
            О проекте
          </p>
          <h1 className="main-title text-glow select-none">Об игре</h1>
          <p className="body-text text-body mt-[22px] max-w-[420px] text-[15px] leading-[1.7]">
            Protocol — тёмный sci-fi roguelike о выживании, мутациях и
            исследовании заражённых миров. Вселенная, мутации и выживание
            связаны в короткие забеги, где каждое решение меняет темп боя и
            заставляет адаптироваться.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-[14px] max-sm:flex-col">
            <ExternalButton href={aboutLinks.projectTelegram} variant="primary">
              Telegram проекта
            </ExternalButton>
            <ExternalButton href={aboutLinks.developerTelegram}>
              Связь со мной
            </ExternalButton>
          </div>
          <div className="panel sci-border ui-label text-body mt-[30px] inline-flex flex-wrap text-[11px] max-sm:grid max-sm:w-full" aria-label="Досье проекта">
            {['SCI-FI ROGUELIKE', 'GODOT', 'INDIE PROJECT'].map((item, index) => (
              <span
                className={`border-faint border-l px-[14px] py-3 first:border-l-0 max-sm:border-l-0 max-sm:border-t max-sm:first:border-t-0 ${index === 0 ? 'text-accent' : ''
                  }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

function DevelopmentStory() {
  return (
    <section className="panel panel-glow sci-border mt-[34px] p-[24px] md:p-[30px]">
      <h2 className="font-display text-[28px] uppercase leading-[1.1] text-[#C9A7FF]">
        История разработки
      </h2>
      <div className="body-text mt-[18px] grid gap-[14px] text-[14px] leading-[1.7] text-[#B8B9D4]">
        <p>Protocol разрабатывается одним разработчиком на движке Godot.</p>
        <p>
          Изначально проект задумывался как спокойная фармилка: игрок убивал
          монстров, собирал ресурсы, возвращался на базу и постепенно развивал
          территорию. Со временем стало понятно, что такой темп ощущается
          слишком спокойным и не дает нужного напряжения.
        </p>
        <p>
          После нескольких перезапусков идея сместилась в сторону более
          динамичного roguelike: быстрые забеги, мутации, заражённые зоны,
          развитие персонажа и музыка, которая усиливает ощущение боя.
        </p>
        <p>
          Сейчас Protocol развивается как самостоятельный sci-fi проект, где
          важны атмосфера, темп, повторяемость забегов и постоянное ощущение
          прогресса.
        </p>
      </div>
    </section>
  )
}

function SectionTabs() {
  return (
    <div className="mt-[34px] grid grid-cols-4 gap-[12px] max-lg:grid-cols-3 max-sm:grid-cols-2">
      {aboutSections.map((section) => (
        <button
          className="ui-label min-h-[52px] cursor-not-allowed border border-[#6C5CE7]/20 bg-[#090A1A]/55 px-[14px] text-[11px] text-[#6E7191] opacity-75"
          disabled
          key={section.id}
          type="button"
        >
          {section.label}
        </button>
      ))}
    </div>
  )
}

function SectionsUnavailable() {
  return (
    <section className="panel panel-glow sci-border mt-[18px] p-[24px]">
      <p className="ui-label text-[11px] text-[#6E7191]">Раздел</p>
      <h2 className="font-display mt-[10px] text-[30px] uppercase leading-[1.1] text-[#C9A7FF]">
        Временно недоступно
      </h2>
      <p className="body-text mt-[14px] text-[14px] leading-[1.7] text-[#B8B9D4]">
      </p>
    </section>
  )
}

function Sidebar() {
  return (
    <aside className="grid content-start gap-[14px]">
      <div className="panel panel-glow sci-border p-[18px]">
        <h2 className="ui-label text-[13px] text-[#C9A7FF]">Технологии</h2>
        <div className="mt-[14px] grid gap-[10px]">
          {aboutTechStack.map((tech) => (
            <div className="border border-[#6C5CE7]/20 bg-[#090A1A]/75 px-[12px] py-[10px] text-[13px] text-[#B8B9D4]" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="panel panel-glow sci-border p-[18px]">
        <h2 className="ui-label text-[13px] text-[#C9A7FF]">Ссылки</h2>
        <div className="mt-[14px] grid gap-[10px]">
          <a className="footer-link" href={aboutLinks.projectTelegram} rel="noreferrer" target="_blank">
            Telegram проекта
          </a>
          <a className="footer-link" href={aboutLinks.developerTelegram} rel="noreferrer" target="_blank">
            Связь со мной
          </a>
        </div>
      </div>
    </aside>
  )
}

function AboutPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="flex-1 pb-[62px]">
        <HeroBlock />
        <div className="content-shell">
          <div className="mt-[34px] grid gap-[22px] xl:grid-cols-[70fr_30fr]">
            <div className="min-w-0">
              <DevelopmentStory />
              <SectionTabs />
              <SectionsUnavailable />
              <section className="mt-[34px]">
                <h2 className="ui-label mb-[18px] text-[15px] text-[#C9A7FF]">
                  О проекте
                </h2>
                <div className="grid gap-[14px] md:grid-cols-3">
                  {aboutProjectCards.map((card) => (
                    <SmallCard key={card.title} title={card.title} text={card.text} />
                  ))}
                </div>
              </section>
            </div>
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
