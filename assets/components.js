App.on("field.layout.components", function(field) {
  window.setTimeout(function() {
    if (field.params.opts && field.params.opts.enabled !== undefined) {
      Object.keys(field.params.components).forEach(function(key) {
        if (!field.params.opts.enabled.includes(key)) {
          delete field.params.components[key];
        }
      });
    }
  }, 50);
});
