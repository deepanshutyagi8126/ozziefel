$(document).ready(function(){
  $(".mile_img").click(function(){
    $(".year_descp").toggle();

  });
$("#seventeen").click(function(){
   $(".year_descp").toggleClass("shift_div");

});
$("#eighteen").click(function(){
   $(".year_descp").toggleClass("shift_divv");  
});
$("#nineteen").click(function(){
   $(".year_descp").toggleClass("nineteen_div");  
});
$("#twenty").click(function(){
   $(".year_descp").toggleClass("twnty_div");  
});
$("#venture_tab").click(function(){
    $("#individuals").hide();
	$(".ventt").addClass("vent_showw");
  });
$("#individual_tab").click(function(){
	$(".ventt").removeClass("vent_showw");
});
$("#individual_tab").click(function(){
	$("#individuals").show();
});
});