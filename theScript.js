$(document).ready(function(){



$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       //alert("bottom!");

       window.scrollTo(0, 0);
   }
});



});