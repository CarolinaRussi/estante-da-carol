import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBookById, getSite } from '../data/content'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { id } = useParams()
  const book = id ? getBookById(id) : undefined
  const site = getSite()

  useEffect(() => {
    if (!book) {
      document.title = `Não encontrado · ${site.brand}`
      return
    }
    document.title = `${book.title} · ${site.brand}`
  }, [book, site.brand])

  if (!book) {
    return <NotFoundPage />
  }

  const hasScreenshots = Boolean(book.screenshots?.length)

  return (
    <main className="page-enter min-h-dvh">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
        <Link
          className="font-ui text-sm text-night underline-offset-4 hover:underline"
          to="/#estante"
        >
          ← Voltar à estante
        </Link>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-[minmax(180px,240px)_minmax(0,1fr)] md:gap-14">
          <div className="justify-self-center md:justify-self-start">
            {book.coverImage ? (
              <div className="book-3d">
                <div className="book-3d-inner book-3d-inner--detail">
                  <span aria-hidden className="book-3d-pages" />
                  <span
                    aria-hidden
                    className="book-3d-spine"
                    style={{ backgroundColor: book.spineColor }}
                  />
                  <div className="book-3d-cover bg-paper">
                    <img
                      alt=""
                      className="max-h-[78%] max-w-[90%] object-contain"
                      src={book.coverImage}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="detail-cover flex aspect-[2/3] w-44 flex-col justify-end rounded-md p-5 text-paper shadow-[12px_18px_32px_rgb(28_25_23_/_0.22)] md:w-52"
                style={{ backgroundColor: book.spineColor }}
              >
                <span className="font-display text-2xl leading-tight">{book.title}</span>
                {book.year ? (
                  <span className="font-ui mt-2 text-sm text-paper/70">{book.year}</span>
                ) : null}
              </div>
            )}
          </div>

          <div>
            <p className="font-ui text-sm tracking-[0.16em] text-ink-muted uppercase">
              {book.kind === 'featured' ? 'Destaque' : 'Projeto'}
              {book.year ? ` · ${book.year}` : ''}
            </p>
            <h1 className="font-display mt-2 text-4xl font-semibold text-night md:text-5xl">
              {book.title}
            </h1>
            {book.subtitle ? (
              <p className="mt-2 text-xl text-ink-muted">{book.subtitle.pt}</p>
            ) : null}

            <ul className="font-ui mt-5 flex flex-wrap gap-2 text-sm text-ink-muted">
              {book.tags.map((tag) => (
                <li key={tag} className="rounded-md border border-night/15 px-2.5 py-1">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="font-ui mt-8 flex flex-wrap gap-3">
              {book.liveUrl ? (
                <a
                  className="rounded-md bg-night px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-night-hover"
                  href={book.liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver demo
                </a>
              ) : null}
              {book.githubUrl ? (
                <a
                  className="rounded-md border border-night/25 px-4 py-2.5 text-sm font-medium text-night transition hover:border-night/50"
                  href={book.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver código
                </a>
              ) : (
                <span className="font-ui self-center text-sm text-ink-muted">
                  Código no GitHub em breve
                </span>
              )}
            </div>
          </div>
        </div>

        <section className="mt-14 max-w-3xl border-t border-night/10 pt-10">
          <h2 className="font-display text-2xl font-semibold text-night">Sinopse</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">{book.synopsis.pt}</p>
        </section>

        {book.learnings ? (
          <section className="mt-10 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-night">Capítulo</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {book.learnings.pt}
            </p>
          </section>
        ) : null}

        {hasScreenshots ? (
          <section className="mt-14 border-t border-night/10 pt-10">
            <h2 className="font-display text-2xl font-semibold text-night">Páginas</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {book.screenshots?.map((screenshot) => (
                <li key={screenshot}>
                  <img
                    alt={`Screenshot de ${book.title}`}
                    className="w-full rounded-md border border-night/10 object-cover shadow-[0_12px_28px_rgb(26_42_74_/_0.08)]"
                    src={screenshot}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-14 border-t border-night/10 pt-8">
          <Link
            className="font-ui text-sm text-night underline-offset-4 hover:underline"
            to="/#estante"
          >
            ← Mais livros na estante
          </Link>
        </div>
      </div>
    </main>
  )
}
