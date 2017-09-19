switch (process.env.NODE_ENV) {
  case 'prod':
    module.exports = require('./config/webpack.prod');
    break;
  case 'test':
    module.exports = require('./config/webpack.test');
    break;
  case 'dev':
    module.exports = require('./config/webpack.dev');
  default:
    module.exports = require('./config/webpack.common')
}
