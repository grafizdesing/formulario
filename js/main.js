document.getElementById('superhero-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var nombre = document.getElementById('nombre').value;
  var edad = document.getElementById('edad').value;
  
  var mensaje = "Has llenado el formulario con éxito. " +
                "Tu nombre es " + nombre + ", tienes una edad de " + edad + " años.";
  
  document.getElementById('mensaje').textContent = mensaje;
});
