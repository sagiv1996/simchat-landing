export const business = {
  name: "Molly's Candle",
  owner: 'Simchat Dahan',
  phoneDisplay: '052-292-2388',
  phoneE164: '+972522922388',
  instagram: 'https://www.instagram.com/mollyscandel/',
  facebook: 'https://www.facebook.com/share/14pJGd8bHLx/',
} as const

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export const socials: SocialLink[] = [
  { label: 'Instagram', href: business.instagram, icon: 'i-simple-icons-instagram' },
  { label: 'Facebook', href: business.facebook, icon: 'i-simple-icons-facebook' },
]

export function whatsappLink(message: string): string {
  const number = business.phoneE164.replace('+', '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
