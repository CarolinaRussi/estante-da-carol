import { getSite } from '../data/content'
import { CtaLinks } from './CtaLinks'

export function Contact() {
  const site = getSite()

  return (
    <section className="border-t border-night/10 bg-night px-6 py-16 text-paper md:py-20" id="contato">
      <div className="mx-auto max-w-5xl">
        <p className="font-ui text-sm tracking-[0.16em] text-paper/70 uppercase">
          Contato
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
          Bora conversar?
        </h2>
        <p className="mt-3 max-w-xl text-lg text-paper/80">
          Aberta a propostas, sobretudo remoto internacional e a freelas
          pontuais. Me chama no LinkedIn ou por e-mail.
        </p>
        <CtaLinks className="mt-8" variant="onDark" />
        <p className="font-ui mt-10 text-sm text-paper/50">{site.brand}</p>
      </div>
    </section>
  )
}
