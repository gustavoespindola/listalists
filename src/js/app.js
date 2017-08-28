$('.full-height').css('height', $(window).height());
$('.full-height').css('width', $(window).width());

$(window).resize(function(){
	$('.full-height').css('width', $(window).width());
	$('.full-height').css('height', $(window).height());
});

$(".header .button-menu").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

$(document).ready(function(){
	// $('.menu-open').click(function(){
	// 	$('body').addClass('no-scroll');
	// 	$('.menu').show();
	// });
	// $('.menu-close').click(function(){
	// 	$('body').removeClass('no-scroll');
	// 	$('.menu').hide();
	// });

	$('.menu-open').click(function(){
		$('body').addClass('no-scroll');
		$('.projects').addClass('show');
	});
	$('.menu-close').click(function(){
		$('body').removeClass('no-scroll');
		$('.projects').removeClass('show');
	});
});

$('.main-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  cellSelector: '.carousel-cell',
  initialIndex: 1,
  setGallerySize: false,
  imagesLoaded: true,
  percentPosition: false,
  draggable: true,
  freeScroll: false
});

// $(document).ready(main);

// $(".headline").each(function() { 
// 	if ($(this).height() > 66) { 
// 		$(this).addClass("too-long") 
// 	} 
// }); 

// var $grid = $(".news-list").isotope({}); 

// var sortAscending = { title: true };
// $(".landing .news-list").matchHeight();
// $(".news-list-nav").on("click", "li", function() { 
// 	var filterValue = $(this).attr("data-filter");
// 	$grid.isotope({ filter: filterValue }) 
// });

// $("select[name='filter']").change(function(e) { console.log("Filter by: %o", $(this).val());

// $(".news-item").isotope({ 
// 	filter: $(this).val().replace(/^\.lang-\./, ".lang-") }) 
// });

// $("select[name='sort']").change(function(e) { 
// 	var val = $(this).val();
	
// 	$(".news-item").isotope({ 
// 		sortBy: val, sortAscending: sortAscending[val] || false }) 
// 	}); 

// var videoEmbed = {
// 	invoke: function(){
// 		$('body .project-video').html(function(i, html) {
// 			return videoEmbed.convertMedia(html);
// 		});
// 	},
// 	convertMedia: function(html){
// 		var pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
// 		var pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
// 		var pattern3 = /([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?(?:jpg|jpeg|gif|png))/gi;
// 		if(pattern1.test(html)){
// 		   var replacement = '<iframe width="420" height="345" src="//player.vimeo.com/video/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
// 		   var html = html.replace(pattern1, replacement);
// 		}
// 		if(pattern2.test(html)){
// 			  var replacement = '<iframe width="420" height="345" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>';
// 			  var html = html.replace(pattern2, replacement);
// 		} 
// 		if(pattern3.test(html)){
// 			var replacement = '<a href="$1" target="_blank"><img class="sml" src="$1" /></a><br />';
// 			var html = html.replace(pattern3, replacement);
// 		} 
// 		return html;
// 	}
// }
// videoEmbed.invoke();