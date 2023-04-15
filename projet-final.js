$(".off-canvas-menu-btn").on('click', function () {
    $("body").addClass('fix');
    $(".off-canvas-menu-wrapper").addClass('open');
});

$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
    $("body").removeClass('fix');
    $(".off-canvas-menu-wrapper").removeClass('open');	});
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
   