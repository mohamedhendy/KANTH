$(function() {
  //Start Actions with buttons

  $("#about").click(function() {
    $(".left").animate({ top: "100vh" }, 700);
    $(".right").animate({ top: "-100vh" }, 700);
    $(".leftwanted").animate({ top: "0vh" }, 700);
    $(".rightwanted").animate({ top: "0vh" }, 700);
  });
  $(".back").click(function() {
    $(".left").animate({ top: "0vh" }, 700);
    $(".right").animate({ top: "0vh" }, 700);
    $(".leftwanted").animate({ top: "-100vh" }, 700);
    $(".rightwanted").animate({ top: "200vh" }, 700);
  });
  $("#serv").click(function() {
    $(".left").animate({ top: "100vh" }, 700);
    $(".right").animate({ top: "-100vh" }, 700);
    $(".leftserv").animate({ top: "0vh" }, 700);
    $(".rightserv").animate({ top: "0vh" }, 700);
  });
  $(".servid").click(function() {
    $(".left").animate({ top: "0vh" }, 700);
    $(".right").animate({ top: "0vh" }, 700);
    $(".leftserv").animate({ top: "-100vh" }, 700);
    $(".rightserv").animate({ top: "200vh" }, 700);
  });
  $("#conta").click(function() {
    $(".left").animate({ top: "100vh" }, 700);
    $(".right").animate({ top: "-100vh" }, 700);
    $(".leftcont").animate({ top: "0vh" }, 700);
    $(".rightcont").animate({ top: "0vh" }, 700);
  });
  $(".conid").click(function() {
    $(".left").animate({ top: "0vh" }, 700);
    $(".right").animate({ top: "0vh" }, 700);
    $(".leftcont").animate({ top: "-100vh" }, 700);
    $(".rightcont").animate({ top: "200vh" }, 700);
  });
  //Selection Option
  $(".dropdown-menu li").on("click", function() {
    var getValue = $(this).text();
    $(".dropdown-select").text(getValue);
  });

  // Date picker

  $(".form_datetime").datetimepicker({
    format: "dd MM yyyy - hh:ii"
  });
  // Window less than 1200px
  if ($(window).width() < 1200) {
    $("#disappear").click(function() {
      $(".doroplist").slideUp();
    });
    $("#info").click(function() {
      $(".doroplist").slideDown();
    });
  } else {
    $("#info").click(function() {
      $(".left").animate({ top: "-100%" }, 700);
      $(".doroplist").animate({ top: "0%" }, 700);
    });
    $("#disappear").click(function() {
      $(".left").animate({ top: "0%" }, 700);
      $(".doroplist").animate({ top: "200%" }, 1000);
    });
  }
  // Open fancy Box
  $('[data-fancybox="video"]').fancybox();

  // SETTINGS PANEL

  $(".btn-settings").on("click", function() {
    $(this)
      .parent()
      .toggleClass("active");
  });

  $(".bg-list div").on("click", function() {
    if ($(this).hasClass("active")) return false;
    if (!$(".switch-handle").hasClass("active"))
      $(".switch-handle").trigger("click");

    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    var cl = $(this).attr("class");
    $("body").attr("class", cl);
  });

  $(".color-list div").on("click", function() {
    if ($(this).hasClass("active")) return false;

    $("link.color-scheme-link").remove();

    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    var src = $(this).attr("data-src"),
      colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');

    colorScheme.attr("href", src).appendTo("head");
  });

  // reload nice scroll
  // Nice scroll
  $("html, body, .leftserv, .rightserv, .left, .leftcont, .rightcont, .doroplist, .rightwanted, .leftwanted").niceScroll({
    cursorcolor: "#EF0D33",
    // cursorwidth: "5px",
    zindex: "100",
    horizrailenabled: false
  });
  var iframeContetWindow = document.getElementById("map_frame").contentWindow;

  $("#hendi1").on("click", function(e) {
    e.preventDefault();
    iframeContetWindow.triggreButtonAction(1);
  });
  $("#hendi2").on("click", function(e) {
    e.preventDefault();
    iframeContetWindow.triggreButtonAction(2);
  });
  $("#hendi3").on("click", function(e) {
    e.preventDefault();
    iframeContetWindow.triggreButtonAction(3);
  });
  $("#hendi4").on("click", function(e) {
    e.preventDefault();
    iframeContetWindow.triggreButtonAction(4);
  });
  $("#hendi5").on("click", function(e) {
    e.preventDefault();
    iframeContetWindow.triggreButtonAction(5);
  });
  
}); // End of use strict
