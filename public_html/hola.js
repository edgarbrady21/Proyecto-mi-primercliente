

//console.log("Hola mundo");
//alert("Hala mundo

$("#boton").click(function(){
    //alert("Me has apretado");
    
    $.ajax({
        url:'http://localhost:9090/hola',
        type:'get',
        success:function(datos){
            $("#etiqueta").html(datos);
    }
        
    });
    
    
    

});