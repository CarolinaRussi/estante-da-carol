import { Link } from 'react-router-dom'
import { getSite } from '../data/content'
import { useLocale } from '../i18n/LocaleProvider'
import type { BookProject } from '../types/content'

type FeaturedBookProps = {
  book: BookProject
}

export function FeaturedBook({ book }: FeaturedBookProps) {
  const site = getSite()
  const { t } = useLocale()

  return (
    <section
      className="featured-enter border-y border-night/10 bg-paper-deep/40 px-6 py-16 md:py-20"
      id="destaque"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Link
          aria-label={`${t(site.ui.openBookAria)} ${book.title}`}
          className="book-3d justify-self-center md:justify-self-start"
          to={`/projeto/${book.id}`}
        >
          <div className="book-3d-inner">
            <span aria-hidden className="book-3d-pages" />
            <span
              aria-hidden
              className="book-3d-spine"
              style={{ backgroundColor: book.spineColor }}
            />
            <div className="book-3d-cover bg-paper">
              {book.coverImage ? (
                <img
                  alt=""
                  className="max-h-[78%] max-w-[90%] object-contain"
                  src={book.coverImage}
                />
              ) : (
                <span className="font-display px-4 text-center text-2xl text-night">
                  {book.title}
                </span>
              )}
            </div>
          </div>
        </Link>

        <div>
          <p className="font-ui text-sm tracking-[0.16em] text-ink-muted uppercase">
            {t(site.ui.featuredLabel)}
            {book.year ? ` · ${book.year}` : ''}
          </p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-night md:text-5xl">
            {book.title}
          </h2>
          {book.subtitle ? (
            <p className="mt-2 text-lg text-ink-muted">{t(book.subtitle)}</p>
          ) : null}
          <p className="mt-5 max-w-xl leading-relaxed text-ink">{t(book.synopsis)}</p>
          <ul className="font-ui mt-4 flex flex-wrap gap-2 text-sm text-ink-muted">
            {book.tags.map((tag) => (
              <li key={tag} className="rounded-md border border-night/15 px-2 py-1">
                {tag}
              </li>
            ))}
          </ul>
          <div className="font-ui mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-md bg-night px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-night-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night"
              to={`/projeto/${book.id}`}
            >
              {t(site.ui.openBook)}
            </Link>
            {book.liveUrl ? (
              <a
                className="rounded-md border border-night/25 px-4 py-2.5 text-sm font-medium text-night transition hover:border-night/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night"
                href={book.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                {t(site.ui.viewDemo)}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
