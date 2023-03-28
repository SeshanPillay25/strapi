"use strict";

/**
 * page router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::page.page");
const defaultRouter = createCoreRouter("api::page.page");

// function to add to or override default router methods
const customRouter = (innerRouter, routeOveride = [], extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes;

      const newRoutes = routes.map((route) => {
        let found = false;

        routeOveride.forEach((overide) => {
          if (
            route.handler === overide.handler &&
            route.method === overide.method
          ) {
            found = overide;
          }
        });

        return found || route;
      });

      return newRoutes.concat(extraRoutes);
    },
  };
};

// Overide the default router with the custom router to use slug.
const myOverideRoutes = [
  //Uncomment
  // {
  //   method: "GET",
  //   path: "/pages/:slug",
  //   handler: "api::page.page.findOneBySlug",
  // },
];

const myExtraRoutes = [
  {
    //Change to find by ID
    method: "GET",
    path: "/pages/slug/:slug",
    handler: "api::page.page.findOneBySlug",
  },
];

module.exports = customRouter(defaultRouter, myOverideRoutes, myExtraRoutes);
