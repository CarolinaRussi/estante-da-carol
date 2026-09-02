import { getSite } from '../data/content'
import { useLocale } from '../i18n/LocaleProvider'

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()
  const site = getSite()

  return (
    <div
      aria-label={t(site.ui.langToggleAria)}
      className="font-ui fixed top-4 right-4 z-50 flex overflow-hidden rounded-md border border-night/15 bg-paper/90 text-sm shadow-sm backdrop-blur-sm"
      role="group"
    >
      <button
        aria-pressed={locale === 'pt'}
        className={`px-3 py-1.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night ${
          locale === 'pt'
            ? 'bg-night text-paper'
            : 'text-ink-muted hover:text-night'
        }`}
        type="button"
        onClick={() => setLocale('pt')}
      >
        PT
      </button>
      <button
        aria-pressed={locale === 'en'}
        className={`px-3 py-1.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night ${
          locale === 'en'
            ? 'bg-night text-paper'
            : 'text-ink-muted hover:text-night'
        }`}
        type="button"
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  )
}
