var context = require.context('./test', true, /.+\.spec\.jsx?$/);

require('cores-js/es5');

context.keys().forEach(context);
module.exports = context;