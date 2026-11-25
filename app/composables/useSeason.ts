import type { Season } from '~/utils/season'

// The site is prerendered, so the build-time answer is reused for hydration
// and the real date is checked once the page is running in the browser.
export function useSeason(season: Season): Ref<boolean> {
  const active = useState(`season:${season.id}`, () => isSeasonActive(season))

  onMounted(() => {
    active.value = isSeasonActive(season)
  })

  return active
}
