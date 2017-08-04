// $(function() {
//   var share = new Share("#share-button-top", {
//     networks: {
//       facebook: {
//         app_id: "1604147083144211",
//       }
//     }
//   });

  // This is still buggy and just a band-aid
  // $(window).on('resize', function(){
  //   $('.navbar').attr('style', '').removeData('pin');
  //   $('.navbar').addClass('fixed');
  //   $('.navbar').pin({
  //     minWidth: 500
  //   });
  // });

// init Isotope
var $grid = $('.news-list').isotope({ 
});

  var sortAscending = {title: true};

  $(".news-list").isotope({
    layoutMode: "fitRows",
    getSortData: {
      // stars: "[data-stars] parseInt",
      // forks: "[data-forks] parseInt",
      // issues: "[data-issues] parseInt",
      // language: "[data-language]",
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
