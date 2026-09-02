import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <p className="font-ui text-sm tracking-wide text-ink-muted uppercase">
        Portfólio
      </p>
      <h1 className="font-display text-5xl leading-tight font-semibold text-night md:text-6xl">
        Estante da Carol
      </h1>
      <p className="max-w-xl text-lg text-ink-muted">
        Carolina Russi Ferla — desenvolvedora fullstack. Fundação do site no ar;
        a prateleira chega na próxima parte.
      </p>
      <div className="font-ui flex flex-wrap gap-3 pt-2">
        <a
          className="rounded-md bg-night px-4 py-2 text-sm font-medium text-paper transition hover:bg-night-hover"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="rounded-md border border-night/20 px-4 py-2 text-sm font-medium text-night transition hover:border-night/40"
          href="https://github.com/CarolinaRussi"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <Link
          className="rounded-md border border-dashed border-night/30 px-4 py-2 text-sm text-ink-muted"
          to="/projeto/entrelivros"
        >
          Exemplo: /projeto/entrelivros
        </Link>
      </div>
    </main>
  )
}
