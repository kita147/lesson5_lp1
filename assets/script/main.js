/* globals $ */

////// ハンバーガーメニュー //////
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("active"); // hamburgerにactiveクラスを切り替える
    $(".header__nav--sp").toggleClass("active"); // header__nav--spにactiveクラスを切り替える
  });
});

////// タブメニュー //////
$(document).ready(function () {
  let tabs = $(".course__tab");
  tabs.on("click", function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
    const index = tabs.index(this);
    $(".course__content").removeClass("show").eq(index).addClass("show");
  });
});
