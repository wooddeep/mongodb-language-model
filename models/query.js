var Expression = require('./expression').Expression;

/**
 * Query is the top-level Expression. It is currently just
 * an alias for Expression.
 */
module.exports = Expression.extend({
  session: {
    className: {
      type: 'string',
      default: 'Query'
    }
  }
});
