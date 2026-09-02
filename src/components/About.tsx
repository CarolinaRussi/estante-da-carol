import { getSite } from '../data/content'
import { useLocale } from '../i18n/LocaleProvider'

export function About() {
  const site = getSite()
  const { locale, t } = useLocale()
  const [blockOne, blockTwo, blockThree] = site.about.blocks[locale]

  return (
    <section className="border-t border-night/10 px-6 py-16 md:py-20" id="sobre">
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] md:gap-14">
        {site.about.photo ? (
          <img
            alt={site.name}
            className="about-photo mx-auto w-full max-w-xs rounded-lg object-cover shadow-[0_16px_36px_rgb(26_42_74_/_0.12)] ring-1 ring-night/10 md:mx-0 md:max-w-none"
            decoding="async"
            height={640}
            sizes="(max-width: 768px) 320px, 320px"
            src={site.about.photo}
            width={640}
          />
        ) : null}
        <div>
          <p className="font-ui text-sm tracking-[0.16em] text-ink-muted uppercase">
            {t(site.ui.aboutEyebrow)}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-night md:text-4xl">
            {site.name}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink">
            <p>{blockOne}</p>
            <p>{blockTwo}</p>
            <p>{blockThree}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
