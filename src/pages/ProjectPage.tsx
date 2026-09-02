import { Link, useParams } from 'react-router-dom'
import { getBookById } from '../data/content'

export function ProjectPage() {
  const { id } = useParams()
  const book = id ? getBookById(id) : undefined

  if (!book) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-4 px-6 py-16">
        <Link className="font-ui text-sm text-night underline-offset-4 hover:underline" to="/">
          ← Voltar à estante
        </Link>
        <h1 className="font-display text-4xl font-semibold text-night">Livro não encontrado</h1>
        <p className="text-ink-muted">Esse id não está no JSON da estante.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-4 px-6 py-16">
      <Link className="font-ui text-sm text-night underline-offset-4 hover:underline" to="/">
        ← Voltar à estante
      </Link>
      {book.coverImage ? (
        <img
          alt=""
          className="max-h-32 w-auto rounded-md bg-night/5 object-contain p-3"
          src={book.coverImage}
        />
      ) : null}
      <p className="font-ui text-sm text-ink-muted">{book.year}</p>
      <h1 className="font-display text-4xl font-semibold text-night">{book.title}</h1>
      {book.subtitle ? (
        <p className="text-lg text-ink-muted">{book.subtitle.pt}</p>
      ) : null}
      <p className="max-w-2xl leading-relaxed">{book.synopsis.pt}</p>
      <ul className="font-ui flex flex-wrap gap-2 text-sm text-ink-muted">
        {book.tags.map((tag) => (
          <li key={tag} className="rounded-md border border-night/15 px-2 py-1">
            {tag}
          </li>
        ))}
      </ul>
      <div className="font-ui flex flex-wrap gap-3 pt-2">
        {book.liveUrl ? (
          <a
            className="rounded-md bg-night px-4 py-2 text-sm font-medium text-paper transition hover:bg-night-hover"
            href={book.liveUrl}
            rel="noreferrer"
            target="_blank"
          >
            Demo
          </a>
        ) : null}
        {book.githubUrl ? (
          <a
            className="rounded-md border border-night/20 px-4 py-2 text-sm font-medium text-night transition hover:border-night/40"
            href={book.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            Código
          </a>
        ) : null}
      </div>
    </main>
  )
}
