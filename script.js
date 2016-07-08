var block='<div class="pixel padding"></div>';
var createRow=function(input, width){
	width=width-2;

	for (i=1; i<=input; i++){
		$('#container').append(block);
		//$('.pixel').css({"width": width, "height": width});
	}
	$('.pixel').width(width);
	$('.pixel').height(width);
}	

var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

$(document).ready(function(){
  


//populate grid at beginning
	var gridSize= $('#size').val();
	var totalPix=gridSize*gridSize;
	var pixelWidth=Math.floor(640/(gridSize)*100)/100;
	
	$('.pixel').remove();

	for(j=1;j<=gridSize;j++){


	createRow(gridSize,pixelWidth);
};


$('#placeGrid').on('click', function(){
	var gridSize= $('#size').val();
	var totalPix=gridSize*gridSize;
	var pixelWidth=Math.floor(640/(gridSize)*100)/100;
	
	$('.pixel').remove();
	$('#placeBorders').removeClass('highlighted');

	for(j=1;j<=gridSize;j++){


	createRow(gridSize,pixelWidth);
	};


});


$(document).on('click', '#placeBorders', function(){
	$('.pixel').toggleClass('borders');
	$('.pixel').toggleClass('padding');

	$(this).toggleClass('highlighted');
});

$('#trail').click(function(){
	$('#trail').addClass('highlighted');
	$('#perm').removeClass('highlighted');
});
$('#perm').click(function(){
	$('#perm').addClass('highlighted');
	$('#trail').removeClass('highlighted');
});
$('#colors').click(function(){
	$('#colors').toggleClass('highlighted');
});


$(document).on('mouseenter', '.pixel', function(){
	$(this).removeClass('fadeout');
	if ($('#colors').hasClass('highlighted')===true){
		
		$(this).css('background-color',randomColor());
	}
	else{
	$(this).css('background-color','black');	}	
	
	});




$(document).on('mouseleave', '.pixel', function(){
	
if ($('#trail').hasClass('highlighted')===true){
	$(this).addClass('fadeout');
	$(this).css({"background-color": "white"});
	

}
	});

});

