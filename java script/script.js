$("#flip").click(function(){
    $("#panel").slideDown();
  });
  $(".user").click(function(){
    $(".user-dropdown-content").fadeToggle();
  });
  
  $(".buy").click(function(){
    $(".buy-dropdown-content").fadeToggle();
  });
  
  $(".dropdown-header").click(function(){
    $(".country-dropdown-content").fadeToggle();
  });
  $("#nav-icon1").click(function(){
    $(".mobile-view-menu").toggleClass("open_menu");
  });
  $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
  });
  



