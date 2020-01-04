'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const checkToken = app.middleware.checkToken({
    secret: "xiaoAqianduanzu"
  });


  router.get('/', controller.home.index);

  router.post('/api/v1/login', controller.user.login);
  router.post('/api/v1/register', controller.user.register);
  router.get('/api/v1/logout', controller.user.logout);
  router.get('/api/v1/verifyUser', controller.user.vertify);
  //获取用户信息
  router.get('/api/v1/userMsg', checkToken, controller.user.userMsg);

  //
  router.get('/api/v1/book/public',controller.book.showPublic);
  router.get('/api/v1/book/private',checkToken, controller.book.showPrivate);
  router.post('/api/v1/book/public',controller.book.uploadToPublic);
  router.post('/api/v1/book/private',checkToken ,controller.book.uploadToPrivate);

  //查找
  router.get('/api/v1/book/search', controller.book.searchBook);

  //测试
  router.get('/test', controller.home.test);


};
