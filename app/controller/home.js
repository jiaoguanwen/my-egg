'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    const { ctx } = this;
    ctx.body = ctx.service.home.hello();
  }
}

module.exports = HomeController;
