'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // use gzip on special route
  // const gzip = app.middleware.gzip({ threshold: 1024 });
  router.get('/', controller.home.index);
  // router.get('/gziptest', gzip, controller.home.index);
};
