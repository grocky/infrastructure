jQuery(document).ready(function(e){jQuery("ul.sf-menu").supersubs({minWidth:3,maxWidth:20,extraWidth:1}).superfish({animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:200,speedOut:"normal",autoArrows:!0,dropShadows:!1,delay:400}),e(window).load(function(){e(".gallery-progression").flexslider({animation:"fade",slideDirection:"horizontal",slideshow:!1,slideshowSpeed:7e3,animationDuration:200,directionNav:!0,useCSS:!1,controlNav:!0})}),e(".synopsis-slider-pro").flexslider({animation:"fade",slideDirection:"horizontal",slideshow:!1,slideshowSpeed:7e3,animationDuration:200,directionNav:!1,controlNav:!0}),e("body").fitVids(),e(".sf-menu").mobileMenu({defaultText:"Navigate to...",className:"select-menu",subMenuDash:"&ndash;&ndash;"}),jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:"fast",slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!1,allow_resize:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!1,modal:!1,deeplinking:!1,overlay_gallery:!1,keyboard_shortcuts:!0,ie6_fallback:!0,social_tools:""}),e("#CommentForm").validate(),e(".ls-sc-accordion").accordion({heightStyle:"content"}),e(".ls-sc-toggle-trigger").click(function(){return e(this).toggleClass("active").next().slideToggle("fast"),!1}),e(".ls-sc-tabs").tabs(),e("body.resume").imagesLoaded(function(){e("body.home #page-title").backstretch(["images/demo/bigstock-Young-designer-in-office-talki-73186111.jpg"],{fade:750}),e("body.contact #page-title").backstretch(["images/demo/bigstock-Cheerful-guy-sitting-in-front--53542399.jpg"],{fade:750}),e("#contact-widget-container").backstretch(["images/demo/map-progression.jpg"],{fade:750}),e("body.resume #page-title").backstretch(["images/demo/photo-1416339684178-3a239570f315.jpg"],{fade:750}),e("body.resume #resume-portfolio-widget").backstretch(["images/demo/photo-1421757295538-9c80958e75b0.jpg"],{fade:750}),e("body.portfolio #page-title").backstretch(["images/demo/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg"],{fade:750}),e("body.single-portfolio #page-title").backstretch(["images/demo/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg"],{fade:750}),e("body.blog #page-title").backstretch(["images/demo/photo-1421757295538-9c80958e75b0.jpg"],{fade:750}),e("body.page #page-title").backstretch(["images/demo/photo-1421757295538-9c80958e75b0.jpg"],{fade:750}),e("body.blog-post.single-blog.post-id-11 #page-title").backstretch(["images/demo/photodune-792391-close-up-of-business-hand-hold-touch-screen-mobile-phone-and-buttons-m.jpg"],{fade:750})}),e("#sidebar-padding").scrollToFixed({spacerClass:"pro-spacer",marginTop:function(){var o=e(window).height()-e("#sidebar-padding").outerHeight(!0)-0;return o>=0?0:o}}),e(".show-hide-pro").click(function(){e("body").toggleClass("toggle-active-pro")}),e(".tablet-show-hide").click(function(){e("#sidebar-padding nav").toggleClass("toggle-nav-pro"),e("#navigation-sidebar-pro").toggleClass("toggle-nav-pro"),e(".tablet-show-hide").toggleClass("toggle-nav-button-pro")}),e.each(["chart"],function(o,t){var i=e("."+t);i.each(function(){new Waypoint({element:this,handler:function(o){e(function(){e(".chart").easyPieChart({barColor:"#8f8f8f",trackColor:"#d4d4d4",lineWidth:5,size:155,scaleLength:0,onStep:function(o,t,i){e(this.el).find(".percent").text(Math.round(i))}})})},offset:"bottom-in-view",group:t})})}),e.each(["skill-synopsis"],function(o,t){var i=e("."+t);i.each(function(){new Waypoint({element:this,handler:function(o){e(this.element).addClass("active-pro")},offset:"bottom-in-view",group:t})})});var o=e(window).width(),t=.015*o,i=e(".isotope");e(".isotope").imagesLoaded(function(){e(".isotope").isotope({filter:".init"});var o=e(".isotope").isotope({itemSelector:".isotope-item",layoutMode:"masonry",masonry:{gutter:t},transitionDuration:"0.8s"}),a={};e("#filters").on("click","button",function(){var t=e(this).attr("data-filter");t=a[t]||t,o.isotope({filter:t})}),e(".button-group").each(function(o,t){var i=e(t);i.on("click","button",function(){i.find(".is-checked").removeClass("is-checked"),e(this).addClass("is-checked")})}),setTimeout(function(){i.isotope("layout")},120)});var a;e(window).on("resize",function(){a=e(".isotope-item").width(),i.isotope("layout")})});