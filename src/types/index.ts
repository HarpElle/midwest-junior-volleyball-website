export interface NavigationItem {
  name: string
  href: string
  external?: boolean
}

export interface ContactInfo {
  email: string
  phone: string
  address: {
    venue: string
    street: string
    city: string
    state: string
    zip: string
  }
}

export interface Sponsor {
  name: string
  tier: 'title' | 'platinum' | 'gold' | 'silver' | 'bronze'
  logo: string
  website: string
  description?: string
}

export interface TournamentInfo {
  year: string
  name: string
  venue: string
  location: string
  startDate?: Date
  endDate?: Date
}

export interface ScheduleEvent {
  id: string
  title: string
  date: Date
  time: string
  division?: string
  ageGroup?: string
  court?: string
  teams?: string[]
}

export interface NewsletterSubscription {
  email: string
  consent: boolean
  timestamp: Date
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  inquiryType: 'general' | 'tournament' | 'sponsorship' | 'media'
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    facebook: string
  }
}

export interface OrganizationInfo {
  founded: number
  memberships: string[]
  history: string
}

export interface PhotoGalleryItem {
  id: string
  src: string
  alt: string
  caption?: string
  category?: string
  thumbnail?: string
} 