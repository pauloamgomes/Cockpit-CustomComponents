<?php

// Module ACL definitions.
$this("acl")->addResource('customcomponents', [
  'manage',
]);

$app->on('admin.init', function() {
  $this->helper('admin')->addAssets('customcomponents:assets/components.js');
});
