import type { BookProject, Locale, SiteContent } from '../types/content'
import booksJson from './books.json'
import siteJson from './site.json'

const books = booksJson as BookProject[]
const site = siteJson as SiteContent

export function getSite(): SiteContent {
  return site
}

export function getBooks(): BookProject[] {
  return books
}

export function getFeaturedBook(): BookProject | undefined {
  return books.find((book) => book.kind === 'featured')
}

export function getShelfBooks(): BookProject[] {
  return books.filter((book) => book.kind === 'book')
}

export function getBookById(id: string): BookProject | undefined {
  return books.find((book) => book.id === id)
}

export function pickLocale(
  value: { pt: string; en: string },
  locale: Locale,
): string {
  return value[locale]
}
