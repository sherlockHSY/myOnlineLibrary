'use strict';

const Service = require('egg').Service;

class BookService extends Service {
 
  async insert(id, insertInfo) {

    if (Object.keys(insertInfo).length === 0) {
      this.ctx.status = 400;
      return false;
    }
    insertInfo.book_id = id;
    let result = await this.app.mysql.insert('book', insertInfo)
    if (result.affectedRows === 1) {
      return true;
    }
    this.ctx.status = 400;
    return false;
  }

  async update(id, updateInfo) {
    if (Object.keys(updateInfo).length === 0) {
      this.ctx.status = 400;
      return false;
    }
    let result = await this.app.mysql.update('book', updateInfo, {
      where: {
        book_id: id
      }
    })

    console.log(result)
    if (result.affectedRows === 1) {
      return true;
    }
    this.ctx.status = 400;
    return false;

  }

  async destroy(id) {
    let result1 = await this.app.mysql.delete('book', {
      book_id: id

    })
    if (result1.affectedRows === 1) {
      return true;
    }
    this.ctx.status = 400;
    return false;
  }
}

module.exports = BookService;
