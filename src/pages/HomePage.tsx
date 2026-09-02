import { useEffect } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { FeaturedBook } from '../components/FeaturedBook'
import { Hero } from '../components/Hero'
import { Shelf } from '../components/Shelf'
import { getFeaturedBook, getShelfBooks, getSite } from '../data/content'

export function HomePage() {
  const featured = getFeaturedBook()
  const shelfBooks = getShelfBooks()
  const site = getSite()

  useEffect(() => {
    document.title = site.brand
  }, [site.brand])

  return (
    <main className="page-enter">
      <Hero />
      {featured ? <FeaturedBook book={featured} /> : null}
      <Shelf books={shelfBooks} />
      <About />
      <Contact />
    </main>
  )
}
