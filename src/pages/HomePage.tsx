import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { FeaturedBook } from '../components/FeaturedBook'
import { Hero } from '../components/Hero'
import { Shelf } from '../components/Shelf'
import { getFeaturedBook, getShelfBooks } from '../data/content'

export function HomePage() {
  const featured = getFeaturedBook()
  const shelfBooks = getShelfBooks()

  return (
    <main>
      <Hero />
      {featured ? <FeaturedBook book={featured} /> : null}
      <Shelf books={shelfBooks} />
      <About />
      <Contact />
    </main>
  )
}
