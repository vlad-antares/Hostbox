$(document).ready(function() {
    if ( $(".js-example-basic-single").exists()){
    	$(".js-example-basic-single").select2();
    };
});


jQuery.fn.exists = function(){ return this.length > 0; }

/*     SELECT      */

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)




