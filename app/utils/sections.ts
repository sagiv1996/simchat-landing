export const navSections = ['services', 'workshops', 'gallery', 'about', 'faq'] as const

export const trackedSections = [...navSections, 'contact'] as const

export type SectionId = (typeof trackedSections)[number]
