'use strict';

/**
 * perp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::perp.perp');
