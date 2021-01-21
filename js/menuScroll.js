$(function(){
	$(' header nav a').click(function(){

		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top - 55;
		console.log(offSetTop);
		$('html,body').animate({'scrollTop':offSetTop}, 1000);

		return false;
	});
});