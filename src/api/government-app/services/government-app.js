'use strict';

/**
 * government-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::government-app.government-app');
