$(document).ready(
    function(){
        alert("Bem vindo!");
    }
)

$.ajax({
    type:"GET",
    url:"http://192.168.10.85:9000/users",
    success: function(data){
        
        $.each(data, function(i, user){
            $("#08_aula").append(
                "<tr><td></td></tr>"
            )
        })
    },
    error: function(data){
        console.log(data);
    }
})