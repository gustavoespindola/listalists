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


// // init Isotope
// var $grid = $('.news-list ul').isotope({ 
// });

//   var sortAscending = {title: true};

//   $(".news-list ul").isotope({
//     layoutMode: "fitRows",
//     getSortData: {
//       // stars: "[data-stars] parseInt",
//       // forks: "[data-forks] parseInt",
//       // issues: "[data-issues] parseInt",
//       // language: "[data-language]",
//       title: "[data-title]"
//     }
//   });

//   $('.landing .news-item').matchHeight();

// // filter items on button click
// $('.news-list-nav').on( 'click', 'li', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });

// });
// $('#container').data('isotope').filteredItems; (not $filteredAtoms);

//   $("select[name='filter']").change(function(e) {
//     console.log("Filter by: %o", $(this).val());
//     $(".news-item").isotope({filter: $(this).val().replace(/^\.lang-\./, '.lang-')});
//   });

//   $("select[name='sort']").change(function(e) {
//     var val = $(this).val();
//     $(".news-item").isotope({sortBy: val, sortAscending: sortAscending[val] || false});
//   });






// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.news-list ul').isotope({ });
var $filterButtons = $('.news-list-nav li');
updateFilterCounts();
// store filter for each group
var filters = {};
$('.news-list-nav').on( 'click', 'li', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('ul');
  var filterGroup = $buttonGroup.attr('data-filter');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
  updateFilterCounts();
});

// change is-checked class on buttons
$('.news-list-nav').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

function updateFilterCounts()  {
  // get filtered item elements
  var itemElems = $grid.isotope('getFilteredItemElements');
  var $itemElems = $( itemElems );
  $filterButtons.each( function( i, button ) {
    var $button = $( button );
    var filterValue = $button.attr('data-filter');
    if ( !filterValue ) {
      // do not update 'any' buttons
      return;
    }
    var count = $itemElems.filter( filterValue ).length;
    $button.find('.filter-count').text( '(' + count +')' );
  });
}
