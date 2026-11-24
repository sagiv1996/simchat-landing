import type { Directive } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const observers = new WeakMap<HTMLElement, IntersectionObserver>()

  const reveal: Directive<HTMLElement, number | undefined> = {
    getSSRProps: () => ({ class: 'reveal' }),
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`

      const observer = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return
        el.classList.add('is-visible')
        observer.disconnect()
      }, { threshold: 0.15 })

      observer.observe(el)
      observers.set(el, observer)
    },
    unmounted(el) {
      observers.get(el)?.disconnect()
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
