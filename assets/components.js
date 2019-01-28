App.on('field.layout.components', function(field) {
  App.callmodule('customcomponents:getDisabled').then(function(data) {
      if (data && data.result) {
          data.result.forEach(function(component) {
            delete field.params.components[component];
          });
      }
  });
  window.setTimeout(function() {
    if (field.params.opts && field.params.opts.enabled !== undefined) {
      Object.keys(field.params.components).forEach(function(key) {
        if (!field.params.opts.enabled.includes(key)) {
          delete field.params.components[key];
        }
      });
    }
    if (field.params.opts && field.params.opts.disabled !== undefined) {
      Object.keys(field.params.components).forEach(function(key) {
        if (field.params.opts.disabled.includes(key)) {
          delete field.params.components[key];
        }
      });
    }
  }, 50);
});
