export interface Season {
  id: string
  showFrom: Date
  showUntil: Date
}

export const hanukkah: Season = {
  id: 'hanukkah-2026',
  showFrom: new Date('2026-11-15T00:00:00+02:00'),
  showUntil: new Date('2026-12-12T23:59:59+02:00'),
}

export function isSeasonActive(season: Season, now: Date = new Date()): boolean {
  return now >= season.showFrom && now <= season.showUntil
}
