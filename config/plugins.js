module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: 'http://localhost:3000/preview/',
            query: {
              // type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: `${env("CLIENT_FRONTEND_URL")}{slug}`,
          },
        },
      ]
    }

  },
  "content-versioning": {
		enabled:  true,
	},
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
      seo: {
        enabled: true,
      },
    },
  },
});
