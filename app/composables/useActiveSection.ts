export const useActiveSection = () => useState<SectionId | null>('active-section', () => null)

export function useSectionTracking(ids: readonly SectionId[]) {
  const active = useActiveSection()
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const intersecting = new Set<string>()

    // A section counts as active while it crosses the vertical middle of the viewport.
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) intersecting.add(entry.target.id)
        else intersecting.delete(entry.target.id)
      }
      active.value = ids.find(id => intersecting.has(id)) ?? null
    }, { rootMargin: '-50% 0px -50% 0px' })

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    active.value = null
  })

  watch(active, (id) => {
    const url = `${location.pathname}${location.search}${id ? `#${id}` : ''}`
    history.replaceState(history.state, '', url)
  })
}
