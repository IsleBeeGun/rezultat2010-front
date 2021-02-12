<?php
/**
 * rezultat2010 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package rezultat2010
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'rezultat2010_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function rezultat2010_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on rezultat2010, use a find and replace
		 * to change 'rezultat2010' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'rezultat2010', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'rezultat2010' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'rezultat2010_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'rezultat2010_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function rezultat2010_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'rezultat2010_content_width', 640 );
}
add_action( 'after_setup_theme', 'rezultat2010_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function rezultat2010_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'rezultat2010' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'rezultat2010' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'rezultat2010_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function rezultat2010_scripts() {
	wp_enqueue_style( 'rezultat2010-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'rezultat2010-style', 'rtl', 'replace' );

	wp_enqueue_script( 'rezultat2010-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'rezultat2010_scripts' );

/**
 * Set extra fiels !!!
 */
function my_extra_fields(){
      add_settings_field('my_phone','Телефон','display_phone','general');
      register_setting('general','my_phone');
      
      add_settings_field('my_email','Email','display_email','general');
      register_setting('general','my_email');
      
      add_settings_field('my_inn','ИНН','display_inn','general');
      register_setting('general','my_inn');
      
      add_settings_field('my_ogrn','ОГРН','display_ogrn','general');
      register_setting('general','my_ogrn');
      
      add_settings_field('my_company','Название компании','display_company','general');
      register_setting('general','my_company');
      
      add_settings_field('my_motto','Девиз','display_motto','general');
      register_setting('general','my_motto');
      
      add_settings_field('my_keywords','Ключевые слова','display_keywords','general');
      register_setting('general','my_keywords');
      
      add_settings_field('my_subtitle','Подпись в шапке сайта','display_subtitle','general');
      register_setting('general','my_subtitle');
}

add_action('admin_init','my_extra_fields');

function display_keywords(){
    echo "<input type='text' name='my_keywords' value='".esc_attr(get_option('my_keywords'))."'>";	
}
function display_subtitle(){
    echo "<input type='text' name='my_subtitle' value='".esc_attr(get_option('my_subtitle'))."'>";	
}
function display_phone(){
    echo "<input type='text' name='my_phone' value='".esc_attr(get_option('my_phone'))."'>";	
}
function display_email(){
    echo "<input type='text' name='my_email' value='".esc_attr(get_option('my_email'))."'>";	
}
function display_inn(){
    echo "<input type='text' name='my_inn' value='".esc_attr(get_option('my_inn'))."'>";	
}
function display_ogrn(){
    echo "<input type='text' name='my_ogrn' value='".esc_attr(get_option('my_ogrn'))."'>";	
}
function display_company(){
    echo "<input type='text' name='my_company' value='".esc_attr(get_option('my_company'))."'>";	
}
function display_motto(){
    echo "<input type='text' name='my_motto' value='".esc_attr(get_option('my_motto'))."'>";	
}
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Widgets settings. !!!
 */
require get_template_directory() . '/widgets/widget-textblock.php';
require get_template_directory() . '/widgets/widgets.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Prevent auto-formatting html !!!
 */
remove_filter('the_content', 'wpautop'); // full post
remove_filter('the_excerpt', 'wpautop'); // short post
remove_filter('comment_text', 'wpautop'); // comments

