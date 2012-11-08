/*
**  SuperDock v0.1
**  Corey Rothwell
*/

;(function($){

	$.fn.superDock = function(opts){

		// unused
		var settings = $.extend({
	      'location': 'bottom',
	      'initial': false
	    }, opts),
	    	item = this,
	    	itemHeight = item.height(),

	    	// test function to check for position fixed. FROM: http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED
	    	test = function (){
				  var container = document.body;
				  
				  if (document.createElement && container && container.appendChild && container.removeChild) {
				    var el = document.createElement('div');
				    
				    if (!el.getBoundingClientRect) return null;
				        
				    el.innerHTML = 'x';
				    el.style.cssText = 'position:fixed;top:100px;';
				    container.appendChild(el);

				    var originalHeight = container.style.height,
				        originalScrollTop = container.scrollTop;

				    container.style.height = '3000px';
				    container.scrollTop = 500;

				    var elementTop = el.getBoundingClientRect().top;
				    container.style.height = originalHeight;
				    
				    var isSupported = (elementTop === 100);
				    container.removeChild(el);
				    container.scrollTop = originalScrollTop;

				    return isSupported;
				  }
				  return null;
				};



		if(!test()){

		    return this.each(function(){

		    		
				$(window).scroll(function(){

					item.css({
						'position': 'absolute',
						'top': ( window.innerHeight - itemHeight + $(window).scrollTop() ) + 'px',
						'left': '0'
					});

				});

			});

		}

	};


})(jQuery);