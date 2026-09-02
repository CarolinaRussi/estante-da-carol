import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { getSite } from '../data/content'
import type { Locale, LocalizedString } from '../types/content'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (value: LocalizedString) => string
}

const STORAGE_KEY = 'estante-locale'

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'pt' ? saved : 'pt'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)
  const site = getSite()

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
    window.localStorage.setItem(STORAGE_KEY, locale)

    const description = site.ui.metaDescription[locale]
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    }
  }, [locale, site.ui.metaDescription])

  function setLocale(next: Locale) {
    setLocaleState(next)
  }

  function t(value: LocalizedString) {
    return value[locale]
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
