$(document).ready(function(){
  $('li img').click(function(){
    var Y=$(this).attr('src');
    // console.log(Y);
    $(this).attr('src', $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', Y);
  });
  $( function() {
   $( "#sortable" ).sortable();
   $( "#sortable" ).disableSelection();
 } );
});
