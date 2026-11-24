import type { MaybeRefOrGetter } from 'vue'
import type PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export interface GalleryPhoto {
  src: string
  width: number
  height: number
  alt: string
}

export interface PhotoSwipeLabels {
  close: string
  previous: string
  next: string
  zoom: string
  error: string
}

export function usePhotoSwipe(photos: MaybeRefOrGetter<GalleryPhoto[]>, labels: MaybeRefOrGetter<PhotoSwipeLabels>) {
  let lightbox: PhotoSwipeLightbox | undefined

  async function setup() {
    lightbox?.destroy()
    const { default: Lightbox } = await import('photoswipe/lightbox')
    const text = toValue(labels)

    lightbox = new Lightbox({
      dataSource: toValue(photos).map(photo => ({ ...photo, msrc: photo.src })),
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.98,
      showHideAnimationType: 'fade',
      closeTitle: text.close,
      arrowPrevTitle: text.previous,
      arrowNextTitle: text.next,
      zoomTitle: text.zoom,
      errorMsg: text.error,
    })

    lightbox.on('uiRegister', () => {
      lightbox?.pswp?.ui?.registerElement({
        name: 'caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        onInit: (element, pswp) => {
          pswp.on('change', () => {
            element.textContent = pswp.currSlide?.data.alt ?? ''
          })
        },
      })
    })

    lightbox.init()
  }

  function open(index = 0) {
    lightbox?.loadAndOpen(index)
  }

  onMounted(setup)
  watch([() => toValue(photos), () => toValue(labels)], setup)
  onBeforeUnmount(() => lightbox?.destroy())

  return { open }
}
