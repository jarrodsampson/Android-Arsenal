var customScripts = {
  scrollAnchors: function () {

    // SCROLL SCRIPTS
    $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutQuad');
      event.preventDefault();
    });

  },
  wowScrolls: function () {

    /* ---------------------------------------------- /*
     * WOW Animation When You Scroll
     /* ---------------------------------------------- */

    wow = new WOW({
      mobile: false
    });
    wow.init();

  },
  headroom: function () {

    var header = document.querySelector("#header");
    if(window.location.hash) {
      header.classList.add("slide--up");
    }

    new Headroom(header, {
      tolerance: {
        down : 10,
        up : 20
      },
      offset : 560,
      classes: {
        initial: "slide",
        pinned: "slide--reset",
        unpinned: "slide--up"
      },
      // callback when pinned, `this` is headroom object
      onPin : function() {},
      // callback when unpinned, `this` is headroom object
      onUnpin : function() {},
      // callback when above offset, `this` is headroom object
      onTop : function() {},
      // callback when below offset, `this` is headroom object
      onNotTop : function() {}
    }).init();

  },
  scrollTop: function () {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    // go to anchor when clicked
    $(function () {
      $('.topScroll').click(function () {

            $('html,body').animate({
              scrollTop: "0px"
            }, 1000);
            return false;
      });
    });

    // activate menu dropdown
    $(".dropdown-button").dropdown();

    // menu side bar

    $(".button-collapse").sideNav();


    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {  }, // Callback for Modal open
      complete: function() {  } // Callback for Modal close
    });

    $('#aboutModalTrigger,#aboutModalTrigger2').click(function(){
      $('#aboutModal').modal('open');
    });


  },
  intro: function () {
    $(".loader").delay(2000).fadeOut(1000);
    $("#audio").delay(31000).animate({volume: 0}, 3000);
    $(".button-collapse").sideNav();
  },
  init: function () {
    customScripts.intro();
    customScripts.scrollTop();
    //customScripts.wowScrolls();
    customScripts.headroom();
    //customScripts.swipeItBox();
    //customScripts.introTop();

  }
};
$('document').ready(function () {
  customScripts.init();
});
