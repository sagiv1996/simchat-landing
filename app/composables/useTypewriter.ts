import type { MaybeRefOrGetter } from 'vue'

interface TypewriterOptions {
  startDelay?: number
  typeSpeed?: number
  deleteSpeed?: number
  holdTime?: number
}

export function useTypewriter(phrases: MaybeRefOrGetter<string[]>, options: TypewriterOptions = {}) {
  const { startDelay = 1800, typeSpeed = 70, deleteSpeed = 35, holdTime = 2200 } = options

  const text = ref(toValue(phrases)[0] ?? '')
  let index = 0
  let timer: ReturnType<typeof setTimeout> | undefined

  const schedule = (step: () => void, delay: number) => {
    timer = setTimeout(step, delay)
  }

  // Array.from splits by code point, so multi-unit characters are never cut in half.
  const typeStep = () => {
    const target = Array.from(toValue(phrases)[index] ?? '')
    const current = Array.from(text.value)
    if (current.length < target.length) {
      text.value = target.slice(0, current.length + 1).join('')
      schedule(typeStep, typeSpeed)
    }
    else {
      schedule(deleteStep, holdTime)
    }
  }

  const deleteStep = () => {
    const current = Array.from(text.value)
    if (current.length > 0) {
      text.value = current.slice(0, -1).join('')
      schedule(deleteStep, deleteSpeed)
    }
    else {
      index = (index + 1) % toValue(phrases).length
      schedule(typeStep, typeSpeed * 4)
    }
  }

  const start = () => {
    clearTimeout(timer)
    const list = toValue(phrases)
    index = 0
    text.value = list[0] ?? ''

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || list.length < 2) return
    schedule(deleteStep, startDelay)
  }

  onMounted(start)
  watch(() => toValue(phrases), start)
  onBeforeUnmount(() => clearTimeout(timer))

  return text
}
