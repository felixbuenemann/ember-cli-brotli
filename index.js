var brotli = require('broccoli-brotli');

function setOptionOrDefault(option, defaultValue) {
  return option === undefined ? defaultValue : option;
}

module.exports = {
  name: 'ember-cli-brotli',
  included: function(app) {
    var options = this.options = app.options.brotli || {};
    options.enabled = setOptionOrDefault(options.enabled, app.env === 'production');
    options.keepUncompressed = setOptionOrDefault(options.keepUncompressed, false);
    options.appendSuffix = setOptionOrDefault(options.appendSuffix, true);
    options.extensions = setOptionOrDefault(options.extensions, ['js', 'css']);
  },
  
  postprocessTree: function (type, tree) {
    if (type === 'all' && this.options.enabled) {
      tree = brotli(tree, this.options);
    }
    return tree;
  }
};
