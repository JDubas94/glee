$(function(){ 
    $('.products__item-link').on('click', function(){
        $('.products__item-link').removeClass('products__item-link--active');
        $(this).addClass('products__item-link--active');
      });


    $('.star').rateYo({
        starWidth: "12px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $('.products__star').rateYo({
        starWidth: "18px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });
    

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data){
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });


    $('.top-slider__inner').slick({
        dots: true,
        arrows: false
    });
    
});
Fancybox.bind("[data-fancybox]", {

});