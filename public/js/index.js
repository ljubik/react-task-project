/*global $*/
function myForm() {
    window.open("forma.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
// по окончанию загрузки страницы
$(document).ready(function() {
    // вешаем на клик по элементу с id = example-1
    // $('#index').click(function() {
    //     $('.info').load('first.html');
    // })
    //     $('#index').click(function() {
    //     $('.info').load('index.html');
    // })
    $('#news').click(function() {
        $('.info').load('news.html');
    })
    $('#history').click(function() {
        $('.info').load('history.html');
    })
    $('#fakty').click(function() {
        $('.info').load('fakty.html');
    })
    $('#about').click(function() {
        $('.info').load('about.html');
    })
    $('#project').click(function() {
        $('.info').load('project.html');
    })

    $('#tsil_perekladu').click(function() {
        $('.info').load('tsil_perekladu.html');
    })
    $('#typ_perekladu').click(function() {
        $('.info').load('typ_perekladu.html');
    })
    $('#poslugy_perekladu').click(function() {
        $('.info').load('poslugy_perekladu.html');
    })
    $('#shablon_perekladu').click(function() {
        $('.info').load('shablon_perekladu.html');
    })
    $('#apostil').click(function() {
        $('.info').load('apostil.html');
    })
    $('#legalizaciya').click(function() {
        $('.info').load('legalizaciya.html');
    })
    $('#apostil_info').click(function() {
        $('.info').load('apostil_info.html');
    })
    $('#vacanciya').click(function() {
        $('.info').load('vacanciya.html');
    })
    $('#vymogy').click(function() {
        $('.info').load('vymogy.html');
    })
    $('#sertyficat_tesol').click(function() {
        $('.info').load('sertyficat_tesol.html');
    })
    $('#rozrahunok_perekladu').click(function() {
        $('.info').load('rozrahunok_perekladu.html');
    })
});



//float menu
var menu1 = null;
$(document).ready(function(){
	
	$(window).scroll(function () { 
		offset1 = menu1 + $(document).scrollTop() + "px";
		offset2 = menu2 - $('.leftm .panel').height() + $(document).scrollTop() + "px";
				
		
		$('.leftm').animate({top:offset2},{duration:1000,queue:false});
	});
	
	$('.panel ul li ul').hide();
	
    $('.panel ul li:has(ul) > a').click(function() {
        $(this).parent().find('ul').slideToggle();  
        return false;      
    });
	 
    $('a.plus').click(function(){
       $(this).parent().next().find('ul li ul').slideUp('fast');
       return false; 
    });
    
    $('a.minus').click(function(){
       $(this).parent().next().find('ul li ul').slideDown('slow');
       return false; 
    });
    
});
