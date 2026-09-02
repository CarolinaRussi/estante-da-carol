import { getSite } from '../data/content'
import { useLocale } from '../i18n/LocaleProvider'
import { CtaLinks } from './CtaLinks'

export function Hero() {
  const site = getSite()
  const { t } = useLocale()

  return (
    <section className="relative px-6 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-ui mb-3 text-sm tracking-[0.18em] text-ink-muted uppercase">
          {site.name}
        </p>
        <h1 className="font-display max-w-3xl text-5xl leading-[1.05] font-semibold text-night md:text-7xl">
          {site.brand}
        </h1>
        <p className="mt-4 max-w-xl text-xl text-ink md:text-2xl">{t(site.role)}</p>
        <p className="mt-3 max-w-xl text-lg text-ink-muted">{t(site.tagline)}</p>
        <CtaLinks className="mt-8" />
        <p className="font-ui mt-10 text-sm text-ink-muted">
          <a className="underline-offset-4 hover:underline" href="#destaque">
            {t(site.ui.seeFeatured)}
          </a>
        </p>
      </div>
    </section>
  )
}
