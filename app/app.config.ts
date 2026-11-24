export default defineAppConfig({
  ui: {
    colors: {
      primary: 'ember',
      neutral: 'stone',
    },
  },

  business: {
    name: "Molly's Candle",
    owner: 'Simchat Dahan',
    phone: {
      display: '052-292-3855',
      international: '+972522923855',
    },
    socials: [
      { label: 'Instagram', href: 'https://www.instagram.com/mollyscandel/', icon: 'i-simple-icons-instagram' },
      { label: 'Facebook', href: 'https://www.facebook.com/share/14pJGd8bHLx/', icon: 'i-simple-icons-facebook' },
    ],
  },
})
