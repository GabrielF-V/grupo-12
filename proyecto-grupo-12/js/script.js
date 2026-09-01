let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let email = document.getElementById("email");
let fono = document.getElementById("fono");
let fenac = document.getElementById("fenac");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ+\s]+$/.test(nombre.value)){
        alert("El nombre solo debe contener letras")
        nombre.focus();
        return;
    }
        if(!/^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/.test(rut.value)){
        alert("El rut solo puede estar en el formato correcto ej: 12.345.678-9")
        rut.focus();
        return;
    }
        if(!/^[^\s@]+@(gmail|outlook|duocuc)\.(com|cl)$/.test(email.value)){
        alert("El email debe terminar en @gmail.com,@outlook.com o @duocuc.cl")
        email.focus();
        return;
    }
        if(!/^\+56 9\s[0-9]{4}\s[0-9]{4}$/.test(fono.value)){
        alert("El telefono debe tener el formato correcto ej +56 9 xxxx xxxx")
        fono.focus();
        return;
    }    
        if(!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/((19\d\d)|(200[0-7])|(2008))$$/.test(fenac.value)){
        alert("Debe ser mayor de 18 años para comprar")
        fenac.focus();
        return;
    }   

alert ("Compra Exitosa!!");

});

