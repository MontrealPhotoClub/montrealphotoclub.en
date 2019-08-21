module.exports = {
  siteMetadata: {
    title: `MontrealPhotoClub - Powered by Novela`,
    name: `MontrealPhotoClub`,
    siteUrl: `https://montrealphoto.club`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
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
        name: `Novela by Narative`,
        short_name: `Novela`,
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
        endpoint: "", // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
