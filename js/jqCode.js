$(window).ready(function(){
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
   /////////////////////////////////////////
    //calendar
   $('#example').calendar({
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    color: '#999',
    onSelect: function (event) {
       document.querySelector(".selected-date").innerHTML=event.label;
    }
   });
   ///////////////////////////////
   //preloading screen 

});
$(function(){
    $("#preloading").fadeOut(1000);
})
