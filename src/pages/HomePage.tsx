import { Link } from 'react-router-dom'
import { getBooks, getFeaturedBook, getSite } from '../data/content'

export function HomePage() {
  const site = getSite()
  const books = getBooks()
  const featured = getFeaturedBook()

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div className="flex flex-wrap items-center gap-6">
        {site.about.photo ? (
          <img
            alt={site.name}
            className="h-40 w-40 rounded-full object-cover object-top ring-2 ring-night/10 md:h-52 md:w-52"
            src={site.about.photo}
          />
        ) : null}
        <div>
          <p className="font-ui text-sm tracking-wide text-ink-muted uppercase">
            Portfólio
          </p>
          <h1 className="font-display text-5xl leading-tight font-semibold text-night md:text-6xl">
            {site.brand}
          </h1>
        </div>
      </div>
      <p className="max-w-xl text-lg text-ink-muted">
        {site.name} — {site.role.pt}. {site.tagline.pt}
      </p>
      <div className="font-ui flex flex-wrap gap-3 pt-2">
        <a
          className="rounded-md bg-night px-4 py-2 text-sm font-medium text-paper transition hover:bg-night-hover"
          href={site.links.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="rounded-md border border-night/20 px-4 py-2 text-sm font-medium text-night transition hover:border-night/40"
          href={site.links.github}
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        {site.links.email ? (
          <a
            className="rounded-md border border-night/20 px-4 py-2 text-sm font-medium text-night transition hover:border-night/40"
            href={`mailto:${site.links.email}`}
          >
            E-mail
          </a>
        ) : null}
      </div>

      {featured?.coverImage ? (
        <div className="border-t border-night/10 pt-6">
          <p className="font-ui mb-3 text-sm text-ink-muted">Destaque</p>
          <Link className="inline-block" to={`/projeto/${featured.id}`}>
            <img
              alt={featured.title}
              className="max-h-28 w-auto rounded-md bg-night/5 object-contain p-3"
              src={featured.coverImage}
            />
          </Link>
        </div>
      ) : null}

      <ul className="mt-2 space-y-2 border-t border-night/10 pt-6">
        {books.map((book) => (
          <li key={book.id}>
            <Link
              className="font-ui text-night underline-offset-4 hover:underline"
              to={`/projeto/${book.id}`}
            >
              <span
                aria-hidden
                className="mr-2 inline-block h-3 w-3 rounded-sm align-middle"
                style={{ backgroundColor: book.spineColor }}
              />
              {book.title}
              {book.kind === 'featured' ? ' · destaque' : ''}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
