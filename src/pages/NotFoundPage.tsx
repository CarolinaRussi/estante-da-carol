import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-4 px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-night">Página não encontrada</h1>
      <p className="text-ink-muted">Esse livro não está nesta prateleira.</p>
      <Link className="font-ui text-night underline-offset-4 hover:underline" to="/">
        Voltar à home
      </Link>
    </main>
  )
}
