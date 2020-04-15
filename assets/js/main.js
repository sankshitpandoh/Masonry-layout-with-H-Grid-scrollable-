(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector(".wrapper").scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.querySelector(".wrapper").addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.querySelector(".wrapper").addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.querySelector(".wrapper").addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.querySelector(".wrapper").attachEvent("onmousewheel", scrollHorizontally);
    }
})();


let elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 40,
    // gutter: 5   
  });




      let scrollHor =
        document.querySelector('.wrapper');
        scrollHor.addEventListener('scroll', event =>{
            let scrolled = (scrollHor.scrollLeft / (scrollHor.scrollWidth - scrollHor.clientWidth) ) * 100
            document.getElementById("progress-scroll-bar").style.width = scrolled + "%"
        })
