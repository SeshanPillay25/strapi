module.exports = ({ env }) => ({
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::page.page",
          draft: {
            url: `${env("CLIENT_FRONTEND_URL")}preview/{id}`,
          },
          published: {
            url: `${env("CLIENT_FRONTEND_URL")}taos/{slug}`,
          },
        },
      ],
    },
  },
  "content-versioning": {
    enabled: true,
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
