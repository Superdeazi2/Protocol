import protocolBg from '../assets/bg/protocol-bg.png'
import { features } from '../data/features.js'

function FeaturesSection() {
  return (
    <section className="content-shell mt-5">
      <div className="section-title select-none"><span>Особенности</span></div>
      <div className="select-none mt-4 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {features.map((feature) => (
          <article className=" feature-card panel panel-glow sci-border grid min-h-[148px] grid-cols-[96px_1fr] items-center gap-4 p-4 max-sm:grid-cols-1" key={feature.title}>
            <div className="media-tile relative h-24 w-24 overflow-hidden max-sm:w-full">
              <img
                className="h-full w-full object-cover opacity-45"
                src={protocolBg}
                alt=""
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div>
              <h3 className="font-display text-accent m-0 text-[16px] font-semibold uppercase tracking-[0.04em]">
                {feature.title}
              </h3>
              <p className="body-text text-body mt-2 text-[13px] leading-[1.5]">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
