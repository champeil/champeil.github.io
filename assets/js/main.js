function toggleMenu() {
  var nav = document.getElementsByClassName("site-header-nav")[0];
  if (nav.style.display == "inline-flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "inline-flex";
  }
}

/* 深海青主题明暗切换：localStorage 持久化，默认跟随系统 */
function toggleTheme() {
  var el = document.documentElement;
  var next = (el.getAttribute("data-theme") === "dark") ? "light" : "dark";
  el.setAttribute("data-theme", next);
  try { localStorage.setItem("cp-theme", next); } catch (e) {}
}
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("theme-toggle");
  if (btn) { btn.addEventListener("click", toggleTheme); }
});

jQuery(function() {
  // 回到顶部
  function toTop () {
    var $toTop = $(".gotop");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= $(window).height()) {
        $toTop.css("display", "block").fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $toTop.on("click", function (evt) {
      var $obj = $("body,html");
      $obj.animate({
        scrollTop: 0
      }, 240);

      evt.preventDefault();
    });
  }

  toTop();
});
