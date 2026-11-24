interface NudgeOptions {
  storageKey: string
  delayMs: number
  scrollRatio: number
}

function readFlag(key: string): boolean {
  try {
    return localStorage.getItem(key) === '1'
  }
  catch {
    return false
  }
}

function writeFlag(key: string): void {
  try {
    localStorage.setItem(key, '1')
  }
  catch {
    // Storage can be blocked (private mode); the nudge then just shows once per page load.
  }
}

export function useNudge({ storageKey, delayMs, scrollRatio }: NudgeOptions) {
  const visible = ref(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  const cleanup = () => {
    clearTimeout(timer)
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onWhatsAppClick, true)
  }

  const show = () => {
    cleanup()
    if (!readFlag(storageKey)) visible.value = true
  }

  const dismiss = () => {
    visible.value = false
    writeFlag(storageKey)
    cleanup()
  }

  function onScroll() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    if (scrollable > 0 && window.scrollY / scrollable >= scrollRatio) show()
  }

  // Someone who already opened WhatsApp doesn't need the reminder.
  function onWhatsAppClick(event: MouseEvent) {
    const link = (event.target as Element | null)?.closest('a[href*="wa.me"]')
    if (link) dismiss()
  }

  onMounted(() => {
    if (readFlag(storageKey)) return
    timer = setTimeout(show, delayMs)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onWhatsAppClick, true)
  })

  onBeforeUnmount(cleanup)

  return { visible, dismiss }
}
