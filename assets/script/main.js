/* globals $ */

$(document).ready(function () {
  $(".hamburger").on("click", function () {
    // ハンバーガーメニューのアクティブ状態を切り替え
    $(this).toggleClass("active");
    $(".header__nav--sp").toggleClass("active");
  });
});
