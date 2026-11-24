export function useBusiness() {
  const { business } = useAppConfig()

  const phoneLink = `tel:${business.phone.international}`

  function whatsappLink(message: string): string {
    const number = business.phone.international.replace('+', '')
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

  return { business, phoneLink, whatsappLink }
}
