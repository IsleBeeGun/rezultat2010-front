<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title><?php bloginfo('name') ?></title>
    <meta name="description" content="<?php bloginfo('description') ?>" />
    <meta name="keywords" content="<?php echo get_option('my_keywords'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="theme-color" content="#010742" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="<?php bloginfo('template_directory') ?>/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="<?php bloginfo('template_directory') ?>/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="<?php bloginfo('template_directory') ?>/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="<?php bloginfo('template_directory') ?>/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="<?php bloginfo('template_directory') ?>/favicon/safari-pinned-tab.svg"
      color="#454d92"
    />
    <meta name="msapplication-TileColor" content="#454d92" />
    <meta name="theme-color" content="#454d92" />
    <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/css/bundle.a12eab7c.css" />
  </head>
  <body>
    <div class="modal-backdrop"></div>
    <div class="modal-window">
      <span class="modal-exit">&times;</span>
      <div class="content">
        <img class="modal-image" src="" alt="Просмотр изображения" />
      </div>
    </div>
    <div class="r-hero__pseudo"></div>
    <header class="r-hero">
      <div class="r-hero__body">
        <div class="r-hero__container">
          <div class="r-hero__columns">
            <div class="r-hero__col-1">
              <div>
                <div>
                  <h1><span><?php echo get_option('my_company'); ?></span> <?php echo get_option('my_motto'); ?></h1>
                  <div class="r-hero__line"></div>
                </div>
                <p><?php echo get_option('my_subtitle'); ?></p>
              </div>
            </div>
            <div class="r-hero__col-2">
              <img class="r-hero__logo" src="<?php bloginfo('template_directory') ?>/img/rez-logo.svg" alt="ООО Результат" />
            </div>
            <div class="r-hero__col-3">
              <div>
                <p>тел: <a href="tel:<?php echo preg_replace('/[^0-9\+]/i', '', get_option('my_phone')); ?>"><?php echo get_option('my_phone'); ?></a></p>
                <div>
                  <div class="r-hero__line"></div>
                  <p>
                    e-mail:
                    <a href="mailto:<?php echo get_option('my_email'); ?>"
                      ><?php echo get_option('my_email'); ?></a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>