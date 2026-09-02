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
}
