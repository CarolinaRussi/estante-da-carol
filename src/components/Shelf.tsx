import { Link } from 'react-router-dom'
import type { BookProject } from '../types/content'

type ShelfProps = {
  books: BookProject[]
}

const spineHeights = ['13.5rem', '15rem', '14rem', '15.5rem']

export function Shelf({ books }: ShelfProps) {
  return (
    <section className="px-6 py-16 md:py-20" id="estante">
      <div className="mx-auto max-w-5xl">
        <p className="font-ui text-sm tracking-[0.16em] text-ink-muted uppercase">
          A estante
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-night md:text-4xl">
          Outros livros que eu construí
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          No desktop, puxa uma lombada. No celular, abre pela capa.
        </p>

        {/* Mobile: mini livros de frente */}
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 md:hidden">
          {books.map((book) => (
            <li key={book.id} className="flex justify-center">
              <Link
                aria-label={book.title}
                className="shelf-mobile-book"
                to={`/projeto/${book.id}`}
              >
                <span aria-hidden className="shelf-mobile-pages" />
                <span
                  className="shelf-mobile-cover"
                  style={{ backgroundColor: book.spineColor }}
                >
                  <span className="font-display text-lg leading-snug text-paper">
                    {book.title}
                  </span>
                  <span className="font-ui mt-2 text-xs text-paper/75">
                    {book.subtitle?.pt}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: lombadas delicadas */}
        <div className="shelf-stage mt-14 hidden md:block">
          <div className="shelf-row">
            {books.map((book, index) => (
              <Link
                key={book.id}
                aria-label={book.title}
                className="shelf-spine"
                style={{
                  backgroundColor: book.spineColor,
                  height: spineHeights[index % spineHeights.length],
                  ['--spine-tilt' as string]: `${-4 + index * 2.2}deg`,
                }}
                to={`/projeto/${book.id}`}
              >
                <span aria-hidden className="shelf-spine-edge" />
                <span className="shelf-spine-title font-display">
                  {book.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="shelf-ledge" />
          <div className="shelf-shadow" />
        </div>
      </div>
    </section>
  )
}
