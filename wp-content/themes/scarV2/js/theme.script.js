jQuery(document).ready(function($){
	
	/////////////////////////////////////////////
	// HTML5 placeholder fallback	 							
	/////////////////////////////////////////////
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
	    var input = $(this);
	    if (input.val() == input.attr('placeholder')) {
		 input.val('');
	    }
	  })
	});
	
	/////////////////////////////////////////////
	// Scroll to top 							
	/////////////////////////////////////////////
	$('.back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	/////////////////////////////////////////////
	// Toggle menu on mobile 							
	/////////////////////////////////////////////
	$('#main-nav-wrap').prepend('<div id="menu-icon" class="mobile-button"></div>');
	
	$("#menu-icon").click(function(){
		$("#header #main-nav").fadeToggle();
		$("#header #searchform").hide();
		$(this).toggleClass("active");
	});

	/////////////////////////////////////////////
	// Toggle searchform on mobile 							
	/////////////////////////////////////////////
	$('#searchform-wrap').prepend('<div id="search-icon" class="mobile-button"></div>');

	$("#search-icon").click(function(){
		$("#header #searchform").fadeToggle();
		$("#header #main-nav").hide();
		$(this).toggleClass("active");
	});

	
	if( $('.gm-map').length > 0 && $('.gm-map').html().indexOf('iframe') == -1) {
		//we're doing this for the single map only hence no need for "each"
		
			
			$('.gm-map').addClass('gm-map-hidden');
			$('.gm-map').attr('style', '');
			txt = $('.gm-map').text();
			
			$('.gm-map').html(txt);
			$('#sidebar').prepend('<a href="#" id="scar_postMap" title="'+txt+'">' + $('.gm-map').text() + '</a>');
			
			$('#scar_postMap').click(function() {
				$('.gm-map').dialog( { modal: true, show: "blind", minWidth:775, minHeight:410, title: "Location map", draggable: true } );
				$('.gm-map').click();
				return false;
			});

			$('.gm-map').click(function() {
				$('.gm-map').removeClass('gm-map-hidden');
			});
				
		
		}
});