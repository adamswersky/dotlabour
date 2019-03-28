$(document).ready(function(){

 $('nav li').mouseover(function() {
   $(this).addClass('nav-hover');
 })
 $('nav li').mouseleave(function() {
   $(this).removeClass('nav-hover')
 })
});
