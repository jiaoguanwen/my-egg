'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  hello() {
    const helloStr = 'Hello Egg';
    return helloStr;
  }
}

module.exports = HomeService;
