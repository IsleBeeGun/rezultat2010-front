<?php

/**
 * Plugin Name: Rezultat2010 (custom blocks)
 * Author: IsleBeeGun
 * Version: 1.0.0
 */

function loadMyBlockFiles() {
  wp_enqueue_script(
    'my-super-unique-handle',
    plugin_dir_url(__FILE__) . 'rezultat2010-custom-blocks.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
}
 
add_action('enqueue_block_editor_assets', 'loadMyBlockFiles');