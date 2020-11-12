$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})
$(document).ready(function(){
    $( '.input-range').each(function(){
        var value = $(this).attr('data-slider-value');
        var separator = value.indexOf(',');
        if( separator !== -1 ){
            value = value.split(',');
            value.forEach(function(item, i, arr) {
                arr[ i ] = parseFloat( item );
            });
        } else {
            value = parseFloat( value );
        }
        $( this ).slider({
            formatter: function(value) {
                console.log(value);
                var IR_val = new Intl.NumberFormat('ja-JP').format(value);
                return  IR_val + ' ' + 'تومان';
            },
            min: parseInt( $( this ).attr('data-slider-min') ),
            max: parseFloat( $( this ).attr('data-slider-max') ), 
            range: $( this ).attr('data-slider-range'),
            value: value,
            tooltip_split: $(this ).attr('data-slider-tooltip_split'),
            tooltip: $( this ).attr('data-slider-tooltip')
        });
        // var Min = $(this).prevAll('.label').find('#min');
        // Min.text(value + $(this).text())

    });

    $('.cancel').attr('style' , 'display : none !important');
    $('.form-comment').attr('style' , 'display : none !important');

    $('.replay').on('click' , function(){
        $(this).parents('.comment-box-detail').attr('style' , 'display : none !important');
        $(this).parents('.comment-box-detail').next('.cancel').attr('style' , 'display : flex !important')
        $(this).parents('.comment-box-detail').nextAll('.form-comment').attr('style' , 'display : block !important')
    })

    $('.cancel').on('click' , function(){
        $(this).attr('style' , 'display : none !important');
        $(this).prev('.comment-box-detail').attr('style' , 'display : flex !important');
        $(this).next('.form-comment').attr('style' , 'display : none !important')
    })

    // var Like_prev = $('.agency-brand').children('.like').find('.val').text().toString().split('' , 6).join('');
    // var Like_1 = "12";
    // console.log($('.val').text());
    // console.log(Like_prev);
    $('.like').find('.fa-heart').on('click' , function() {
        // var Like = $(this).parent().text();
        // console.log(Like_1.search(Like_prev));
        // if ($(this).parent().text() == Like_1.search(Like_prev)) {
        //     ++ Like;
        //     var empty = $(this).parent().find('.val').empty();
        //     empty.text(Like);
        // } else {
        //     -- Like;
        //     var empty = $(this).parent().find('.val').empty();
        //     empty.text(Like);
        // }
        $(this).toggleClass('fas');
    });



    let into_gallery = $('.into-gallery');
    if (into_gallery.length && $.fn.owlCarousel) {
        into_gallery.owlCarousel({
            rtl : true ,
            nav : false ,
            autoplay : true ,
            autoplayTimeout : 4000 ,
            dots : false,
            loop : true,
            margin : 10,
            autoWidth : true,
            autoplayHoverPause: true,
            mouseDrag : true,
        });
    }
    var slider = $('.slider-owl .slider');
    if (slider.length && $.fn.owlCarousel) {
        slider.owlCarousel({
            rtl : true ,
            nav : false ,
            animateOut: 'fadeOut',
            loop:true,
            margin:0,
            navSpeed:3000,
            smartSpeed:3000,
            nav:false,
            dots:true,
            autoplay: 8000,
            items:1,
            mouseDrag : false,
            dotsClass: [
                'pagination-slider'
            ],
        });
        $(".slider-owl .next").click(function(){
            slider.trigger('next.owl.carousel');
        });
        $(".slider-owl .prev").click(function(){
            slider.trigger('prev.owl.carousel');
        });
    }

    let customer = $('.card-cage');
    if (customer.length && $.fn.owlCarousel) {
        customer.owlCarousel({
            rtl : true ,
            nav : true ,
            items : 2 ,
            margin: 15,
            loop : true ,
            autoplay : true ,
            autoplayTimeout : 4000 ,
            dots : false,
            autoplayHoverPause: true,
            navText : ['<i class="fas fa-chevron-right"></i>' , '<i class="fas fa-chevron-left"></i>'],
            navClass: [
                'arrow-right d-flex justify-content-center align-items-center',
                'arrow-left d-flex justify-content-center align-items-center'
            ],
            responsive : {
                768 : {
                    items : 2
                },
                0 : {
                    items : 1
                }
            }
        });
    }

    let adverb = $('.adv');
    if (adverb.length && $.fn.owlCarousel) {
        adverb.owlCarousel({
            rtl : true ,
            nav : false ,
            items : 1 ,
            margin:0,
            autoplay : true ,
            autoplayTimeout : 4000 ,
            dots : false,
            autoplayHoverPause: true,
            mouseDrag : false,
        });
        $(".sideBar-controls .next-v2").click(function(){
            adverb.trigger('next.owl.carousel');
        });
        $(".sideBar-controls .prev-v2").click(function(){
            adverb.trigger('prev.owl.carousel');
        });
    }
    let side_Bar = $('.owl-slider');
    if (side_Bar.length && $.fn.owlCarousel) {
        side_Bar.owlCarousel({
            rtl : true ,
            nav : false ,
            items : 1 ,
            margin:0,
            autoplay : true ,
            autoplayTimeout : 4000 ,
            dots : false,
            autoplayHoverPause: true,
        });
    }
});

// window.onload = function() {
//     baguetteBox.run('.lightbox', {
//         animation: 'fadeIn',
//         noScrollbars: true
//     });
// };

window.onload = function() {
    $('.lightgallery').lightGallery({
        selector: 'a',
        thumbnail: false,
    });
}


var typed = new Typed('#typejs', {
    strings: ['وبسایت املاک امین در خدمت مشتریان وهمکاران عزیز', 'وبسایت املاک امین بهترین در خدمت', 'خدمت گذاری وظیفه ماست'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 100,
    smartBackspace: true, // this is a default
    loop: true
});