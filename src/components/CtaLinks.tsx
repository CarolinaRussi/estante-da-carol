import { getSite } from '../data/content'
import { useLocale } from '../i18n/LocaleProvider'

type CtaLinksProps = {
  className?: string
  variant?: 'default' | 'onDark'
}

export function CtaLinks({ className = '', variant = 'default' }: CtaLinksProps) {
  const { links, ui } = getSite()
  const { t } = useLocale()
  const isDark = variant === 'onDark'

  const primary = isDark
    ? 'rounded-md bg-paper px-4 py-2.5 text-sm font-medium text-night transition hover:bg-paper-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper'
    : 'rounded-md bg-night px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-night-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night'

  const secondary = isDark
    ? 'rounded-md border border-paper/35 px-4 py-2.5 text-sm font-medium text-paper transition hover:border-paper/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper'
    : 'rounded-md border border-night/25 px-4 py-2.5 text-sm font-medium text-night transition hover:border-night/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night'

  return (
    <div className={`font-ui flex flex-wrap gap-3 ${className}`}>
      <a className={primary} href={links.linkedin} rel="noreferrer" target="_blank">
        LinkedIn
      </a>
      <a className={secondary} href={links.github} rel="noreferrer" target="_blank">
        GitHub
      </a>
      {links.email ? (
        <a className={secondary} href={`mailto:${links.email}`}>
          {t(ui.emailLabel)}
        </a>
      ) : null}
    </div>
  )
}
