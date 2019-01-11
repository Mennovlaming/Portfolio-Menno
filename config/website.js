const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Portfolio Menno Vlaming', // Navigation and Site Title
  siteTitleAlt: 'MV', // Alternative Site title for SEO
  siteTitleShort: 'MV', // short_name for manifest
  siteUrl: 'https://mennovlaming.nl', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/green.png', // Used for SEO and manifest
  siteDescription: 'Portfolio Menno Vlaming',

  

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
