$(document).ready(function() {
  $(".veen .rgstr-btn button").click(function() {
    $(".veen .wrapper").addClass("move");
    $(".body").css(
      "background-image",
      "url(https://img4.goodfon.ru/wallpaper/nbig/a/c0/dragons-china-chinese-dragons-castle-house-pagoda-lok-du-xia.jpg)",
      "background-size",
      "cover",
      "background-repeat",
      "no-repeat"
    );
    $(".veen .login-btn button").removeClass("active");
    $(this).addClass("active");
  });
  $(".veen .login-btn button").click(function() {
    $(".veen .wrapper").removeClass("move");
    $(".body").css(
      "background-image",
      "url(https://img4.goodfon.ru/wallpaper/nbig/a/c0/dragons-china-chinese-dragons-castle-house-pagoda-lok-du-xia.jpg)",
      "background-size",
      "cover",
      "background-repeat",
      "no-repeat"
    );
    $(".veen .rgstr-btn button").removeClass("active");
    $(this).addClass("active");
  });
});
