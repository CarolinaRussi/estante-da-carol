export type Locale = 'pt' | 'en'

export type LocalizedString = {
  pt: string
  en: string
}

export type BookKind = 'featured' | 'book'

export type BookProject = {
  id: string
  title: string
  subtitle?: LocalizedString
  year?: string | number
  spineColor: string
  coverImage?: string
  screenshots?: string[]
  synopsis: LocalizedString
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  learnings?: LocalizedString
  kind: BookKind
}

export type SiteUi = {
  seeFeatured: LocalizedString
  featuredLabel: LocalizedString
  openBook: LocalizedString
  viewDemo: LocalizedString
  viewCode: LocalizedString
  codeSoon: LocalizedString
  shelfEyebrow: LocalizedString
  shelfTitle: LocalizedString
  shelfHint: LocalizedString
  aboutEyebrow: LocalizedString
  contactEyebrow: LocalizedString
  contactTitle: LocalizedString
  contactBody: LocalizedString
  backToShelf: LocalizedString
  moreBooks: LocalizedString
  featuredKind: LocalizedString
  projectKind: LocalizedString
  synopsis: LocalizedString
  chapter: LocalizedString
  pages: LocalizedString
  screenshotOf: LocalizedString
  openBookAria: LocalizedString
  notFoundTitle: LocalizedString
  notFoundBody: LocalizedString
  notFoundDocTitle: LocalizedString
  backHome: LocalizedString
  emailLabel: LocalizedString
  langToggleAria: LocalizedString
  metaDescription: LocalizedString
}

export type SiteContent = {
  name: string
  brand: string
  role: LocalizedString
  tagline: LocalizedString
  links: {
    linkedin: string
    github: string
    email: string
  }
  about: {
    photo?: string
    blocks: {
      pt: [string, string, string]
      en: [string, string, string]
    }
  }
  ui: SiteUi
}
