<?php

// register TextBlock_Widget widget
function register_textblock_widget() {
    register_widget( 'TextBlock_Widget' );
}
add_action( 'widgets_init', 'register_textblock_widget' );