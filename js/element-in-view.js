(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).on('scroll', function() {
  
  $(".about-us .icon-twist,.about-us .icon-star,.about-us .icon-block,.about-us .icon-dots,.about-us .icon-dots-8,.team-section .icon-dots-9,.sec-title h2,.icon-star-4,.news-section .icon-twist-6,.who-we-are .icon-dots-10,.process-section .title h2,.info-section h2,.info-section .icon-dots-8,.info-section .icon-block,.about-section-two .icon-twist-5,.get-ready-section .icon-star-3,.get-ready-section .icon-twist-5,.banner-section .image-column .image-box,.anim-icons .icon,.anim-icons .icon,.anim-icons .icon,.anim-icons .icon,.pricing-section .sec-title h2,.pricing-section .sub-title,.news-block-five .inner-box,.news-block-five .inner-box,.services-section .icon-twist-3,.fact-counter-section .icon-star-2,.fact-counter-section .icon-block-2,.fact-counter-section .icon-twist-2,.features-tab-section h2,.features-tab-section .title,.shop-banner-section .icon-dots-6,.shop-banner-section .icon-two-lines,.shop-banner-section .icon-twist-4").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view"); 
    } else {
      el.removeClass("now-in-view");
    }
  });
  
});

$(document).on('ready', function() {
  $(".about-us .icon-twist,.about-us .icon-star,.about-us .icon-block,.about-us .icon-dots,.about-us .icon-dots-8,.team-section .icon-dots-9,.sec-title h2,.icon-star-4,.news-section .icon-twist-6,.who-we-are .icon-dots-10,.process-section .title h2,.info-section h2,.info-section .icon-dots-8,.info-section .icon-block,.about-section-two .icon-twist-5,.get-ready-section .icon-star-3,.get-ready-section .icon-twist-5,.banner-section .image-column .image-box,.anim-icons .icon,.anim-icons .icon,.anim-icons .icon,.anim-icons .icon,.pricing-section .sec-title h2,.pricing-section .sub-title,.news-block-five .inner-box,.news-block-five .inner-box,.services-section .icon-twist-3,.fact-counter-section .icon-star-2,.fact-counter-section .icon-block-2,.fact-counter-section .icon-twist-2,.features-tab-section h2,.features-tab-section .title,.shop-banner-section .icon-dots-6,.shop-banner-section .icon-two-lines,.shop-banner-section .icon-twist-4").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("now-in-view"); 
	} else {
	  el.removeClass("now-in-view");
	}
  });
});