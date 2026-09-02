import { Link, useParams } from 'react-router-dom'

export function ProjectPage() {
  const { id } = useParams()

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-4 px-6 py-16">
      <Link className="font-ui text-sm text-night underline-offset-4 hover:underline" to="/">
        ← Voltar à estante
      </Link>
      <h1 className="font-display text-4xl font-semibold text-night">Projeto</h1>
      <p className="text-ink-muted">
        Stub da rota <code className="font-ui text-ink">/projeto/{id}</code>. Conteúdo na
        Parte 1–3.
      </p>
    </main>
  )
}
