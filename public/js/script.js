( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            // console.log(data.curTop);
        }
    });
} )( jQuery );


//Remove class when resizing//
(function($) {
    var $window = $(window),
        $hvr = $('.pizzaBoxes');

    function resize() {
        if ($window.width() < 541) {
            return $hvr.removeClass('hvr-grow');
        }
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);


//Google Map//
function initMap() {
	var uluru = {lat: 47.618753, lng: -122.325937};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 14,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}

$(document).ready(function(){
	var $this;
	var scroll_pos = 0;
	//Animate Dinos Brand on Scroll//
	$(document).scroll(function() {
		$this = $(this);
		scroll_pos = $this.scrollTop();
		if (scroll_pos > 150) {
			$('#nav').css('background-color', 'rgba(0,0,0,.85)');
			$('#navBrand').stop().animate({width: '15%'});
		}
		else {
			$('#navBrand').stop().animate({width: '25%'});
			$('#nav').css('background-color', 'rgba(0,0,0,1)');
		}
		console.log(scroll_pos);
	});
	//Add 'active' class to navigation item when clicked//
	$('nav ul li').click(function(e){
		$('nav ul li.active').removeClass('active');
		$this = $(this);
		$this.addClass('active');
		// e.preventDefault();
	});
});

