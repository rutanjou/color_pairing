// good luck

    

    $("input").css("background", function(){
           return $(this).data("color");
    });

    $("input").on("click",function(){
         var colors = $(this).data("color");
         var checkbox = $("[type='checkbox']");
    // $("body").css("background",colors);
      
       var checked = checkbox.is(':checked');
       console.log(checked);
       if (checked){
       	$(".main").css('color',colors);
       }else{
       	$("body").css('background',colors);
       };

});

/* Si je click alors{
	si (cochér){
	je change le texte
	}si non (je change le fond);



}*/



    






    










