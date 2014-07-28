/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/how-to-create-a-parallax-scrolling-website-part-2/
 */
//$( document ).ready(function() {
//    $('selectors').balloon(options);
//    //$('.my-popup').magnificPopup({type:'image'});
//
//
//  });

//$('#more').magnificPopup({
//    items: {
//      src: 'img/popup.png'
//      
//    },
//    type: 'image', // this is default type
//    closeOnContentClick : true,
//    removalDelay: 500,
//    mainClass: 'mfp-fade',
//    //callbacks: {
//    //beforeOpen: function() {
//    //  // just a hack that adds mfp-anim class to markup 
//    //   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
//    //   this.st.mainClass = 'mfp-zoom-in';
//    //}
//  //,
//  midClick: true
//});

//$('.morebutton').magnificPopup({ 
//  delegate: 'a',
//  type: 'image',
//  removalDelay: 500, //delay removal by X to allow out-animation
//  callbacks: {
//    beforeOpen: function() {
//      // just a hack that adds mfp-anim class to markup 
//       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
//       this.st.mainClass = this.st.el.attr('data-effect');
//    }
//  },
//  closeOnContentClick: true,
//  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
//});

function IniBallons(){
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_explorer = navigator.userAgent.indexOf('Windows') > -1;
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
	if ((is_chrome)&&(is_explorer)) {is_explorer=false;}


$('#btnWebApps').balloon({
  contents: '<img src="img/dotnetandjava.png" />' /*+ navigator.userAgent*/,
	position: "right",
	tipSize: 0,
	border: "solid 0px #777",
	opacity: "0"
});
$('#btnModernApps').balloon({
  contents: '<img src="img/dotnetandjava.png" />',
	position: !is_safari && !is_explorer ? "bottom left":"bottom",
	tipSize: 0
});
$('#btnCloudApps').balloon({
  contents: '<img src="img/azure.png" />',
	position: "left",
	tipSize: 0,
	offsetX: !is_safari && !is_explorer ? -200 : 0, offsetY: -1 
});
$('#btnDatabase').balloon({
  contents: '<img src="img/sqlandoracle.png" />',
	position: " top right",
	tipSize: 0
});
$('#btnMobileApps').balloon({
  contents: '<img src="img/mobile.png" />',
	position: "top left",
	tipSize: 0,
	offsetX: !is_safari && !is_explorer ? -300 : 0, offsetY: -1
	
	
});
}



function pulseWebApps() {
	var iniOpacity = 0.5;
	var finishOpacity = 1;
	var duration = 1200;
	
	//WebApps
    $('#btnWebApps').animate({
        width: 205, height: 195, 
        opacity: iniOpacity
    }, duration, function() {
        $('#btnWebApps').animate({
            width: 205, height: 195, 
            opacity: finishOpacity
        }, duration, function() {
            pulseWebApps();
        });
    });
  };  
function pulseModernApps() {
	var iniOpacity = 0.5;
	var finishOpacity = 1;
	var duration = 1200;

	//ModernApps
    $('#btnModernApps').animate({
        width: 205, height: 195, 
        opacity: iniOpacity
    }, duration, function() {
        $('#btnModernApps').animate({
            width: 205, height: 195, 
            opacity: finishOpacity
        }, duration, function() {
            pulseModernApps();
        });
    });
  };
    	//CloudApps
  
  function pulseCloudApps() {
	var iniOpacity = 0.5;
	var finishOpacity = 1;
	var duration = 1200;
	
    $('#btnCloudApps').animate({
        width: 205, height: 195, 
        opacity: iniOpacity
    }, duration, function() {
        $('#btnCloudApps').animate({
            width: 205, height: 195, 
            opacity: finishOpacity
        }, duration, function() {
            pulseCloudApps();
        });
    });
    
      };
      
  function pulseDatabase() {
	var iniOpacity = 0.5;
	var finishOpacity = 1;
	var duration = 1200;
      
    	//Database
    $('#btnDatabase').animate({
        width: 205, height: 195, 
        opacity: iniOpacity
    }, duration, function() {
        $('#btnDatabase').animate({
            width: 205, height: 195, 
            opacity: finishOpacity
        }, duration, function() {
            pulseDatabase();
        });
    });
     };
 
    	//MobileApps     
  function pulseMobileApps() {
	var iniOpacity = 0.5;
	var finishOpacity = 1;
	var duration = 1200;

    $('#btnMobileApps').animate({
        width: 205, height: 195, 
        opacity: iniOpacity
    }, duration, function() {
        $('#btnMobileApps').animate({
            width: 205, height: 195, 
            opacity: finishOpacity
        }, duration, function() {
            pulseMobileApps();
        });
    });
};

    	//More     
  function pulseMore() {
	var iniOpacity = 0.5;
	var finishOpacity = 1;
	var duration = 700;

    $('#more').animate({
        width: 49, height: 39, 
        opacity: iniOpacity
    }, duration, function() {
        $('#more').animate({
            width: 49, height: 39, 
            opacity: finishOpacity
        }, duration, function() {
            pulseMore();
        });
    });
};
//IniBallons();
//pulseWebApps();
//pulseModernApps();
//pulseCloudApps();
//pulseDatabase();
//pulseMobileApps();
pulseMore();

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	htmlbody = $('html,body');
	var duration = 500;
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Init navigation
		      initHomepageNav();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		

		
		// Get window size
	    winH = $window.height();
	    winW = $window.width();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Init Skrollr for 768 and up
		if( winW >= 768) {
	     
		    // Init Skrollr
		    var s = skrollr.init({
			forceHeight: false
		    });
	     

		// Resize our slides
		$slide.height(winH);
		$slideTall.height(winH*2);
		$slideTall2.height(winH*3);
	     
		    s.refresh($('.homeSlide'));
	     
		} else {
	     
		    // Init Skrollr
		    var s = skrollr.init();
		    s.destroy();
		}
	    

	    
			// Check for touch
		if(Modernizr.touch) {
	     
		    // Init Skrollr
		    var s = skrollr.init();
		    s.destroy();
		}
			
		    }
		    
		function initAdjustWindow() {
		return {
		    match : function() {
			adjustWindow();
		    },
		    unmatch : function() {
			adjustWindow();
		    }
		};
	    }
 
enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

	function initHomepageNav(){
		
		var homeSlides = $('.homeSlide');
		var $slideContent = $('.hsContainer');
		var slidesCount = $(homeSlides).length;
		var activeSlide = 1;
		
		// Build HTML for Nav
		$('<div/>', {
		    'id' : 'slideNav'
		}).append($('<ul><li class="slideNavPrev"><a class="disabled" href="#" title="Go to previous slide"><span class="ico ico-up">↑</span></a></li><li><span id="activeSlide">'+activeSlide+'</span>/<span id="maxSlides">'+slidesCount+'</span></li><li class="slideNavNext"><a href="#" title="Go to next slide"><span class="ico ico-down">↓</span></a></li></ul>')).appendTo('body').delay(1200).fadeIn(duration);
		

		// Navigation highligting
		var $activeSlide = $('#activeSlide');
		var $maxSlides = $('#maxSlides');
		var $numberOfSlides = parseInt($maxSlides.text());
		var slideNavPrev = $('');
		var $slideNavNext = $('.slideNavNext');
		var $slideNavPrev = $('.slideNavPrev');	
		var $slideNavNextA = $('.slideNavNext a');
		var $slideNavPrevA = $('.slideNavPrev a');	
		
		// Highlight the section currently scrolling DOWN
		homeSlides.waypoint(function(direction) {
		  if (direction === 'down') {
		    var index = $(this).index();
			var index = index+1;
			$activeSlide.text(index);
			showHideNavItems();
		  }
		}, { offset: '50%' });
		
		// Highlight the section currently scrolling UP
		homeSlides.waypoint(function(direction) {
		  if (direction === 'up') {
			var index = $(this).index();
			var index = index+1;
			$activeSlide.text(index);
			showHideNavItems();
		  }
		}, {
		  offset: function() {
		    // This is the calculation that would give you
		    // "bottom of element hits middle of window"
		    return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
		  }
		});
		
		//Fade out unnecesary nav items
		function showHideNavItems(){
			var $activeSlideNumber = parseInt($activeSlide.text());
			
			if($activeSlideNumber == 1){
			
				$slideNavNextA.removeAttr('class');
				$slideNavPrev.animate({opacity: 0.25}).find('a').addClass('disabled');
				
			} else if ($activeSlideNumber == $numberOfSlides) {
			
				$slideNavPrevA.removeAttr('class');
				$slideNavNext.animate({opacity: 0.25}).find('a').addClass('disabled');
				
			} else {
			
				$slideNavNext.add($slideNavPrev).animate({opacity: 1});
				$slideNavNextA.add($slideNavPrevA).removeAttr('class');
				
			}
		}	
		
		//Next slide
		$slideNavNext.click(function (e) {
		    e.preventDefault();
		    var index = parseInt($activeSlide.text());
		    index++;
		    if(index <= $numberOfSlides){
		        
				scrollToSlide(index);
		        
		    }
		});
		
		//Prev slide
		$slideNavPrev.click(function (e) {
		    e.preventDefault();
		    var index = parseInt($activeSlide.text());
		    index--;
		    if(index > 0){
		        
		        scrollToSlide(index);
		        
		    }
		});
	    
	    
		function scrollToSlide(slideId){
			
			// Custom slide content offset
		    var customSlideOffset = $("#slide-"+slideId).attr('data-content-offset');
		    
		    
		    // Scroll to the top of a container if it doesn't have custom offset defined
		    if(typeof customSlideOffset === 'undefined'){
		        
		        htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top) + 'px'},'slow');
		        
		    } else {
		        
		        // Convert percentage 'eg. 25p' into pixels
		        if(customSlideOffset.indexOf('p')!=-1) {
			       
			       var customSlideOffset = parseInt(customSlideOffset.split('p')[0]);
				   var slideHeight = $slide.height();
				   
				   customSlideOffset = Math.ceil((slideHeight/100) * customSlideOffset);
				   
				   //console.log(slideHeight +' '+ customSlideOffset);
				   
				   htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top + customSlideOffset) + 'px'},'slow');
			        
		        } else {
			       
			       var customSlideOffset = parseInt(customSlideOffset);
			       
			       htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top + customSlideOffset) + 'px'},'slow');
			        
		        }
		    
		    }
		}
	    
	    
	}
		
} )( jQuery );