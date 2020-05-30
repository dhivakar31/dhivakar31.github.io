function fo()
{
    $(document).ready(function(){
     
      
        $.ajax({url: "form.html", success: function(result){
            $("body").html(result);
        
          }});
      });

}
function ft()
{
    $(document).ready(function(){
      $.ajax({url: "main.html", success: function(result){
            $("body").html(result);

          }});

      });

}
