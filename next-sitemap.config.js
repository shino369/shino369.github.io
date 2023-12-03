/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASEURL || 'https://example.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }