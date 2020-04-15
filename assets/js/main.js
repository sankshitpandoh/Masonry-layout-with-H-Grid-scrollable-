let elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 40,
    gutter: 5   
  });




      let scrollHor =
        document.querySelector('.wrapper');
        scrollHor.addEventListener('scroll', event =>{
            let scrolled = (scrollHor.scrollLeft / (scrollHor.scrollWidth - scrollHor.clientWidth) ) * 100
        console.log("hi")
            document.getElementById("progress-scroll-bar").style.width = scrolled + "%"
        })
