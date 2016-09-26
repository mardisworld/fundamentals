// $ is synonymous with jQuery
$(document).ready(function(){
	//alert("jQuery is alive!!")

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(10000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", { pieces:1000}, 5000);
	});

//tried to do toggle effect from https://api.jqueryui.com/bounce-effect/
	//$("#toggle").click(function() {
	//	$("#image").toggle("bounce", { times:3}, "slow");//


	$("#slideUp").click(function(){
		$("#image").slideUp(2000).slideDown(1000);
	});
});

