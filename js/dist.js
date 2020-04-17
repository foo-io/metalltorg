$("#catalogMenu").click(function() {
    $("#overlay").toggleClass('on');
});

$( ".product__hidden-button" ).on( "click", function() {
    
    $(this).addClass("blackZone"),
    setTimeout(function(){
        //var imgtodrag = $(".blackZone").find('img').eq(0);
        var imgtodrag = $(".blackZone").parents('.product');
      var cart = $('.widget__block-link i.icon.cart');
      if (imgtodrag) {
          var imgclone = imgtodrag.clone()
              .offset({
              'top': imgtodrag.offset().top,
              'left': imgtodrag.offset().left
          })
              .css({
              'opacity': '.75',
              //'background-color': '#BAD528',
              'position': 'absolute',
              'padding': '1rem',
              'border-radius': '3px',
              //'height': '50px',
              //'width': '50px',
              'z-index': '1000',
              'min-height': 'auto',
              //'box-shadow': '0px 8px 35px rgba(132, 132, 132, 0.6)'

          })
              .appendTo('body')
              .animate({
                  'top': cart.position().top + 10,
                  'left': cart.position().left + 10,
                  'width': 0,
                  'height': 0
          }, 1000);

          imgclone.animate({
                'width': 0,
                'height': 0
          }, function () {
              $(this).detach()
          });

          $(".blackZone").removeClass('blackZone');
      };
  }, 0);
});

//$('#click').click().

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div2 = $(".vertical.medium-horizontal.menu.dropdown"); // тут указываем ID элемента
        if (!div2.is(e.target) // если клик был не по нашему блоку
            && div2.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".is-dropdown-submenu-parent.opens-right").removeClass('is-active').attr("data-is-click", "false");
            $(".vertical.menu.submenu.is-dropdown-submenu.first-sub.dropdown").removeClass('js-dropdown-active');
        }

    var div = $(".catalog"); // тут указываем ID элемента
    var div3 = $("#dropdown-auth"); // тут указываем ID элемента

    // $(".catalog__link").click(function() {
    // 	if ( $("#overlay").hasClass('on') ){
    // 		$("#overlay").removeClass('on');
    // 	} else {
    // 		$("#overlay").addClass('on');
    // 	}
    // });
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("#overlay").removeClass('on');
        }
    if (!div3.is(e.target) // если клик был не по нашему блоку
        && div3.has(e.target).length === 0) { // и не по его дочерним элементам
            $('#dropdown-auth').foundation('close');
        }
});

// search show for tablet
$('.search__tablet').click(function() {
    $('div.search').toggle();
    $('a.search__tablet i').toggleClass('search').toggleClass('close');
    $('.widget').toggle();
})

// раскрывающийся список
$('.more-cats').click(function(){
    $(this).text($(this).text() == 'Свернуть' ? 'Все подкатегории' : 'Свернуть');
    $(this).toggleClass('up');
});

//slider price
$(function(){

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 0, 1000 ],
        slide: function( event, ui ) {
            $( ".price__1" ).val(ui.values[ 0 ]).text(ui.values[ 0 ]);
            $( ".price__2" ).val(ui.values[ 1 ]).text(ui.values[ 1 ]);
        }
    });
    $( ".price__1" ).val($( "#slider-range" ).slider( "values", 0 )).text($( "#slider-range" ).slider( "values", 0 ));
    $( ".price__2" ).val($( "#slider-range" ).slider( "values", 1 )).text($( "#slider-range" ).slider( "values", 1 ));

});

//readmore
$('.fullcard__description').readmore({
    collapsedHeight: 140,
    // heightMargin: 5
});

// Slick Slider

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    arrows: false,
    adaptiveHeight: true,
    });
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 592,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 468,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 320,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


