import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getSite } from '../data/content'

export function NotFoundPage() {
  const site = getSite()

  useEffect(() => {
    document.title = `Não encontrado · ${site.brand}`
  }, [site.brand])

  return (
    <main className="page-enter mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-4 px-6 py-16">
      <p className="font-ui text-sm tracking-[0.16em] text-ink-muted uppercase">404</p>
      <h1 className="font-display text-4xl font-semibold text-night md:text-5xl">
        Esse livro não está na prateleira
      </h1>
      <p className="max-w-md text-lg text-ink-muted">
        A página que você procurou não existe — ou o volume ainda não chegou à{' '}
        {site.brand}.
      </p>
      <Link
        className="font-ui mt-4 w-fit rounded-md bg-night px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-night-hover"
        to="/"
      >
        Voltar à home
      </Link>
    </main>
  )
}
