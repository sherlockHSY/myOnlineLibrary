'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    let targetDir = path.join(this.config.baseDir, 'app', "/public/userStorage/storage-2");

    
    fs.mkdir(targetDir, { recursive: true }, function (err) {
      if (err) {
        console.log('nonono')
        return console.log('创建封面目录失败，目录已存在')
      }
      console.log('创建封面目录成功');
    });
    this.ctx.body = 'test'
  }
}

module.exports = HomeController;
