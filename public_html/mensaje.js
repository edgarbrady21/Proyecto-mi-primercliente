

//console.log("Hola mundo");
//alert("Hala mundo



//Tabla

  $.ajax({
        url:'http://localhost:9090/mensaje',
        type:'get',
        success:function(datos){
            $.each(datos, function(i, mensaje){
                
          $("#tabla").append("<tr><td>" + mensaje.titulo + "</td><td>" + mensaje.cuerpo + "</td></tr>");
            
          
          
            });
            
        }
    
        
    });
    
    


$("#boton").click(function(){
    //alert("Me has apretado");
    
    $.ajax({
        url:'http://localhost:9090/mensaje/hola/tengo hambre',
        type:'post',
        success:function(datos){
            $("#etiqueta").html(datos);
    }
        
    });
    
    
    

});

$("#boton-buscartodos").click(function(){
    //alert("Me has apretado");
    
    $.ajax({
        url:'http://localhost:9090/mensaje',
        type:'get',
        success:function(datos){
            console.log("sasasa"+datos.length);
            //$("#etiqueta").html(datos[0].cuerpo);
            
            
    }
        
    });
    
    
    

});

$("#boton-buscartodos").click(function(){
    //alert("Me has apretado");
    
    $.ajax({
        url:'http://localhost:9090/mensaje/4/nuevo/ya cambio',
        type:'put',
        success:function(datos){
            console.log("sasasa"+datos.length);
            $("#etiqueta").html(datos);
    }
        
    });
});

$("#boton-buscartodos").click(function(){
    //alert("Me has apretado");
    
    $.ajax({
        url:'http://localhost:9090/mensaje/4',
        type:'delete',
        success:function(datos){
            console.log("sasasa"+datos.length);
            $("#etiqueta").html(datos);
    }
        
    });
});