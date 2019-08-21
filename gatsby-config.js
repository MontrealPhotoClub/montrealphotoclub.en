module.exports = {
  siteMetadata: {
    title: `MontrealPhotoClub - Powered by Novela`,
    name: `MontrealPhotoClub`,
    siteUrl: `https://montrealphoto.club`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `We're a friendly gathering of photographers and we're hosting regular events in Montréal.`,
      subcta: `Make sure you don't miss out our future events. Join now for free 👇`,
      maxWidth: 1080,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/montrealphotoclub`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/montrealphotoclub`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MontrealPhoto.club`,
        short_name: `MontrealPhotoClub`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://club.us12.list-manage.com/subscribe/post?u=82813799388b14db2174b8591&amp;id=428156c588", // add your MC list endpoint here; see plugin repo for instructions
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://montrealphoto.club`,
        sitemap:`https://montrealphoto.club/sitemap.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
  ],
};
