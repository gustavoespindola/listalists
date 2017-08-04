// init Isotope
var $grid = $('.news-list').isotope({ 
});

  var sortAscending = {title: true};

  $(".news-list").isotope({
    layoutMode: "fitRows",
    getSortData: {
      title: "[data-title]"
    }
  });

  $('.landing .news-item').matchHeight();

// filter items on button click
$('.news-list-nav').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

});

  $("select[name='filter']").change(function(e) {
    console.log("Filter by: %o", $(this).val());
    $(".news-item").isotope({filter: $(this).val().replace(/^\.lang-\./, '.lang-')});
  });

  $("select[name='sort']").change(function(e) {
    var val = $(this).val();
    $(".news-item").isotope({sortBy: val, sortAscending: sortAscending[val] || false});
  });


