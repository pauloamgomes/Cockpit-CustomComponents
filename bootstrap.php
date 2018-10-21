<?php

/**
 * @file
 * Cockpit module bootstrap implementation.
 */

$this->module('customcomponents')->extend([
  'getDisabled' => function() {
    $disabled = [];
    if (isset($this->app->config['components.disabled'])) {
      $disabled = array_keys(array_filter($this->app->config['components.disabled']));
    }
    return $disabled;
  },
]);

// If admin.
if (COCKPIT_ADMIN && !COCKPIT_API_REQUEST) {
  include_once __DIR__ . '/admin.php';
}
