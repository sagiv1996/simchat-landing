export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-Agent: *\nDisallow:\n\nSitemap: ${siteUrl}/sitemap_index.xml\n`
})
