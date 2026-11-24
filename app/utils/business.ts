export const business = {
  name: "Molly's Candle",
  owner: 'Simchat Dahan',
  phoneDisplay: '052-292-2388',
  phoneE164: '+972522922388',
  instagram: 'https://www.instagram.com/mollyscandel/',
  facebook: 'https://www.facebook.com/share/14pJGd8bHLx/',
} as const

export function whatsappLink(message: string): string {
  const number = business.phoneE164.replace('+', '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
