$('.grid').isotope({
  layoutMode: 'masonryHorizontal',
  itemSelector: '.grid-item',
  masonryHorizontal: {
    rowHeight: 100
  }
});

$(".mas-grid-container").mCustomScrollbar({
  axis:"x",
    theme:"dark",
  autoExpandScrollbar:true,
  advanced:{autoExpandHorizontalScroll:true}
});


