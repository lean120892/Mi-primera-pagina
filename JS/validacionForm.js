



// Validar el Nombre
var CondicionNombre = /^([A-Za-z]{2,10})\s?([A-Za-z]{3,10})?\s?([A-Za-z]{3,10})?$/;
var Nombre = document.getElementById("nombre");
var ValNombre = false ;



Nombre.addEventListener("input", (e)=>{
    
   if( EvaluarCampo(Nombre, CondicionNombre, e) ) {
       ValNombre = true;
      // console.log("Nombre = " + ValNombre);
   }
   else{
       ValNombre = false;
       //console.log(ValNombre);
   }

});



// Validar el Apellido
var CondicionApellido = /^([A-Za-z]{3,10})\s?([A-Za-z]{3,10})?\s?([A-Za-z]{3,10})?$/;
var Apellido = document.getElementById("apellido");
var ValApellido = false;
Apellido.addEventListener("input", (e)=>{;

    
    if( EvaluarCampo(Apellido, CondicionApellido, e)) {
        ValApellido = true;
        //console.log("Apellido = " + ValApellido);
    }
    else{
        ValApellido = false;
        //console.log(ValApellido);
    }

});

// Validar Correo

var CondicionMail = /^([A-Za-z0-9]{3,20})@([a-z]{2,20})\.([a-z]{3,10})$/;
var Mail = document.getElementById("mail");
var ValMail = false;
Mail.addEventListener("input", (e)=>{;

   if(EvaluarCampo(Mail, CondicionMail, e)){
       ValMail = true;

   } 
   else{
       ValMail = false;
   }

});


// Validar Contraseña

var CondicionContraseña = /^[A-Za-z0-9]{8,12}$/;
var Contraseña = document.getElementById("contraseña");
var ValContraseña = false;
Contraseña.addEventListener("input", (e)=>{

    if(EvaluarCampo(Contraseña, CondicionContraseña, e)){
        ValContraseña = true;
    }
    else{
        ValContraseña = false
    }
    
});


// Validar Pais

var Pais = document.getElementById("pais");
var ValPais;
Pais.addEventListener("change",(e)=>{
    if(e.target.value == "null"){
        ValPais = false;
    }
    else{
        ValPais = true;
    }
})

// Validar Sexo

var Sexo = document.getElementById("sexo");
var ValSexo ;
Sexo.addEventListener("change", (e)=>{
    if(e.target.value == "null"){
        ValSexo = false;
    }
    else{
        ValSexo = true;
    }
});

//Validar terminos y condiciones
var Check = document.getElementById("checkbox")
var ValTeryCond;
Check.addEventListener("click", ()=>{

    if (document.getElementById("checkbox").checked){
        ValTeryCond = true;
    }
    else{
        ValTeryCond = false;
    }

})

// Validar Boton
var BotonEnviar = document.getElementById("bt-enviar");
    BotonEnviar.addEventListener("click",(e)=>{
        e.preventDefault();
        if(EvaluarBoton()){
            alert("formulario enviado");
        }
        else{
            alert("ERROR - Todos los campos son obligatorios");
        }
    })


var EvaluarCampo = function (campo, condicion, e){

    
    // Condicion correcta
    if(condicion.test(e.target.value)){
        //console.log("condicion correcta")
        campo.classList.replace("bg-danger", "bg-success");
        setTimeout( ()=>{campo.classList.remove("bg-success", "text-light")},2500 )
      return true
      
    
    }
    //Condicion incorrecta
    if(!condicion.test(e.target.value)){
        //console.log("condicion correcta")
        campo.classList.add("bg-danger", "text-light");
        //setTimeout( ()=>{campo.classList.remove("bg-danger", "text-light")},2500 )
       return false
        
    
    }
    

}

var EvaluarBoton = function(){

    if(ValNombre==false ||  ValApellido==false || ValMail==false || ValContraseña==false || ValPais==false || ValSexo==false || ValTeryCond==false )   {
        
        console.log("Todos los campos son obligatorios")
        return false;
    }
    else{

        console.log("Formulario Enviado")
        return true;
    }
}




  


