//Formulario de typeform

(function() 
{ var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; 
if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; 
q.parentNode.insertBefore(js,q) } 
})();

//Smoothscroll

$(document).ready(function(){
    // Agregamos el efecto smoothScroll a los links "a"
    $("a").on('click', function(event) {
  
      // El this.hash debe de tener un valor antes de anular el comportamiento.
      if (this.hash !== "") {
        // Con preventDefault evitamos el comportamiento predeterminado del "a"(anclaje)
        event.preventDefault();
  
        // Variable hash para this.hash, es el valor.
        var hash = this.hash;
  
        // El método de jquery animate sirve para agregar el desplazamiento.
        // El número 800 determina el tiempo en milisegundos para desplazarse.
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash; //#
        });
      }
    });
  });

    
$(function() {
    
    $('[data-toggle="tooltip"]').tooltip();

});