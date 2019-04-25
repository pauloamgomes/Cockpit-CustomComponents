App.on("field.layout.components", function(field) {
  function handleComponents(op, which) {
    Object.keys(field.params.components).forEach(function(key) {
      if ((op === "enable" && !which.includes(key)) || (op === "disable" && which.includes(key))) {
        delete field.params.components[key]
      }
    })
  }

  window.setTimeout(function() {
    if (field.params.opts && field.params.opts.enabled !== undefined) {
      handleComponents("enable", field.params.opts.enabled)
    }

    if (field.params.opts.parent && field.params.opts.parent.enabled !== undefined) {
      handleComponents("enable", field.params.opts.parent.enabled)
    }

    if (field.params.opts && field.params.opts.disabled !== undefined) {
      handleComponents("disable", field.params.opts.disabled)
    }

    if (field.params.opts.parent && field.params.opts.parent.disabled !== undefined) {
      handleComponents("disable", field.params.opts.parent.disabled)
    }
  }, 100)
})
