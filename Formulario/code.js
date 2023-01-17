(function() { 
  var input              = document.getElementById('correo');
  var form               = document.getElementById('form');

      elem.id            = 'notify';
      elem.style.display = 'none';

      form.appendChild(elem);

  input.addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
      input.className    = 'invalid animated shake';
      elem.textContent   = 'El nombre de usuario solo debe contener letras minúsculas. p.ej. john';
      elem.className     = 'error';
      elem.style.display = 'block';
    }
  });

  input.addEventListener('input', function(event)
  {
    if ( 'block' === elem.style.display )
     {
      input.className = '';
      elem.style.display = 'none';
     }
  });
  
})();