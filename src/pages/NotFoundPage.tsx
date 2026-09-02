import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getSite } from '../data/content'
import { useLocale } from '../i18n/LocaleProvider'

export function NotFoundPage() {
  const site = getSite()
  const { t } = useLocale()

  useEffect(() => {
    document.title = `${t(site.ui.notFoundDocTitle)} · ${site.brand}`
  }, [site.brand, site.ui.notFoundDocTitle, t])

  return (
    <main className="page-enter mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-4 px-6 py-16">
      <p className="font-ui text-sm tracking-[0.16em] text-ink-muted uppercase">404</p>
      <h1 className="font-display text-4xl font-semibold text-night md:text-5xl">
        {t(site.ui.notFoundTitle)}
      </h1>
      <p className="max-w-md text-lg text-ink-muted">{t(site.ui.notFoundBody)}</p>
      <Link
        className="font-ui mt-4 w-fit rounded-md bg-night px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-night-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night"
        to="/"
      >
        {t(site.ui.backHome)}
      </Link>
    </main>
  )
}
