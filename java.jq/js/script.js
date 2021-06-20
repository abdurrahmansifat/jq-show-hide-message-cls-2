
$(document).ready(function(){

//alert
//alert("Hello Someone!Welcome")
/*$('button').click(function(){
   alert("Hello Someone!Welcome");
});*/
//hide
$('#hide').click(function(){
$('.message').hide();

});
//show
$('#show').click(function(){
 $('.message').show();
});
//hide/show
$('#toggle').click(function(){
 $('.message').toggle();
});
//fadein
$('#fadein').click(function(){
$('.message').fadeIn(1000);

});
//fadeout
$('#fadeout').click(function(){
 $('.message').fadeOut();
});
//fadetoggle
$('#fadetoggle').click(function(){
 $('.message').fadeToggle();
});
//fadeto
$('#fadeto').click(function(){
 $('.message').fadeTo(1000,.5);
});
$('.header').click(function(){
 $('.text').slideToggle(1000);
});

});