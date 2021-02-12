<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package rezultat2010
 */

get_header();
?>

    <!-- 404 -->
    <section class="r-section r-extra-margin-top-mobile" style="padding-top: 6vw">
      <div class="r-section__container">
        <h2 class="r-section__title">Ошибка 404</h2>
        <div class="r-section__line"></div>
        <div class="r-section__columns">
          <div class="r-section__text-block">
            <p>
              <br>
              Указанная страница не найдена 
              <br><br>
              <a href="/">Вернуться на главную страницу</a>
              <br>
            </p>
          </div>
        </div>
      </div>
    </section>
	
<?php
get_footer();