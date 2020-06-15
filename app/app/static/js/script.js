
$(document).ready(function () {
  //   $(".profile_block").delegate(".profile_line", "click", function(e) {
  //   $(".profile_block").removeClass("show");
  //   $(this).closest(".profile_block").addClass("show");
  // });

  $("#submenu a").click(function () {
    return false;
  });

  $(".options").click(function () {
    var childpos = $(this).offset();
    var parentpos = $(this).parent().offset();

    var posLeft = childpos.left - parentpos.left;

    $("#submenu")
      .css({
        top: childpos.top - 10 + "px",
        left: posLeft + 420 + "px",
      })
      .fadeIn(200);
    $("#submenu").mouseleave(function () {
      $(this).fadeOut(200);
    });
  });

  $(".profile_line").click(function () {
    $("#profile_block").toggleClass("show");
  });
  $("#btn_fil").click(function () {
    $("#btn_fil").toggleClass("btn-success");
    $("#btn_fil").toggleClass(
      "btn-outline-success"
    );
    $("#fil_block").toggleClass("show");
  });

  $("#toggleMenu .list").click(function () {
    $(".item_name").css({
      opacity: 1,
      "margin-left": "10px",
    });
    $("#sidebar-menu li span").animate({
      "margin-left": "0px",
    });
    $("#sidebar-menu").toggleClass("animate");
    $("#sidebar").css({ width: "230px" });
    $("#toggleMenu .list").fadeOut();
    $("#toggleMenu .thumbs").fadeIn();
  });

  $("#toggleMenu .thumbs").click(function () {
    $(".item_name").css({
      opacity: 0,
      "margin-left": "10px",
    });
    $("#sidebar-menu").toggleClass("animate");
    $("#sidebar").css({ width: "80px" });
    $("#toggleMenu .thumbs").fadeOut();
    $("#toggleMenu .list").fadeIn();
  });

  $("#sidebar-menu li").click(function () {
    $("#sidebar-menu li")
      .not(this)
      .removeClass("selected");
    $(this).toggleClass("selected");
  });

  $("#drop-select").click(function () {
    $("#dropdown-list").toggleClass("animate");
  });

  $("#dropdown-list li").click(function () {
    $("#dropdown-list").removeClass("animate");
  });

  $("#play").click(function () {
    pjs.show()
  });
});