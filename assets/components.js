App.on('field.layout.components', function(field) {
  App.callmodule('customcomponents:getDisabled').then(function(data) {
      if (data && data.result) {
          data.result.forEach(function(component) {
            delete field.params.components[component];
          });
      }
  });
});
