const proxy = [
    {
        context: 'localhost:4200',
        target: 'localhost:55388',
        pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;