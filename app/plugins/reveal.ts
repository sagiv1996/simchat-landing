import type { Directive } from 'vue'

const SHOW_RATIO = 0.15

export default defineNuxtPlugin((nuxtApp) => {
  const observers = new WeakMap<HTMLElement, IntersectionObserver>()

  const reveal: Directive<HTMLElement, number | undefined> = {
    // An attribute, not a class: Vue's hydration check compares the full class list but ignores unknown attributes.
    getSSRProps: () => ({ 'data-reveal': '' }),
    mounted(el, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

      const observer = new IntersectionObserver(([entry]) => {
        if (!entry) return
        if (entry.intersectionRatio >= SHOW_RATIO) el.setAttribute('data-revealed', '')
        else if (!entry.isIntersecting) el.removeAttribute('data-revealed')
      }, { threshold: [0, SHOW_RATIO] })

      observer.observe(el)
      observers.set(el, observer)
    },
    unmounted(el) {
      observers.get(el)?.disconnect()
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
