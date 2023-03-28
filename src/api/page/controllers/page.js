"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  //Change to findById
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::page.page", query);

    const sanitizedEntity = await this.sanitizeOutput(post);

    return this.transformResponse(sanitizedEntity[0]);
  },

  async findOnebyId(ctx) {
    const { id } = ctx.params;

    const query = {
      filters: { id },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::page.page", query);

    const sanitizedEntity = await this.sanitizeOutput(post);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
