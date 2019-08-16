'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    const { ctx } = this;
    ctx.body = ctx.service.home.hello();
  }

  reqDetail() {
    const { ctx } = this;
    ctx.body = ctx.request;
  }

  resDetail() {
    const { ctx } = this;
    ctx.body = ctx.response;
  }
}

module.exports = HomeController;
